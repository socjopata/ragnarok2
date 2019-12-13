import React, {Component, Fragment} from 'react';
import {get, isEmpty, map, find, toNumber, uniq, sum, compact} from 'lodash';
import {Input, Button, UncontrolledTooltip} from 'reactstrap';
import {connect} from "react-redux";
import classNames from 'classnames'
import TestDifficultyCheatSheet from "./TestDifficultyCheatSheet";
import ChooseAdvantageModal from "./ChooseAdvantageModal";
import ChooseImplantModal from "./ChooseImplantModal";
import ChooseHexeriModal from "./ChooseHexeriModal";
import ChooseEinherEnhancementsModal from "./ChooseEinherEnhancementsModal";

//actions
import {
  inputChange,
  heroClassSelected,
  flexibleSecondarySkillSelected,
  mainParameterIncremented,
  mainParameterDecremented,
  secondaryParameterIncremented,
  secondaryParameterDecremented,
  advantageRemoved,
  implantRemoved,
  hexeriRemoved,
  regionsFamiliarityUpdated,
  virtueSelected,
} from '../../store/heroes';
//selectors
import {
  heroSelected, characterName, characterId, usedFlexibleSecondaryParameters,
  chosenFlexibleSecondaryParameters,
  selectedVirtues,
  allVirtuesSelected,
  flexibleParameters,
  allFlexibleParametersAssigned,
  mainParameterBase,
  mainParameterFromImplants,
  mainParameterTotal,
  experiencePoints,
  focus,
  neurostability,
  sportiness,
  movementSpeed,
  hitPoints,
  power,
  apparition,
  secondaryParameterBase,
  secondaryParameterFromImplants,
  secondaryParameterBonus,
  secondaryParameterTotal,
  secondaryParameterTotalBonus,
  mainParameterUserChanges,
  secondaryParameterUserChanges,
  chosenAdvantagesIds,
  chosenAdvantages,
  chosenImplantsIds,
  chosenImplants,
  regionsFamiliarityChoice,
  chosenHexerisIds,
  chosenHexeris,
  einherRolls,
  einherImplantsIds,
} from '../../store/heroes';

class FirstPageBlob extends Component {
  handleChange = ({target: {value, name: inputName}}) => {
    this.props.inputChange(value, inputName);
  };

  handleHeroClassChange = ({target: {value}}) => {
    this.props.heroClassSelected(value);
  };

  handleFlexibleSecondarySkillChoice = (flexibleParameterName, skillName, value) => {
    this.props.flexibleSecondarySkillSelected(flexibleParameterName, skillName, value);
  };

  handleIncrementMainParameter = (skillName, cost) => {
    this.props.mainParameterIncremented(skillName, cost);
  };

  handleDecrementMainParameter = (skillName, costDeducted) => {
    this.props.mainParameterDecremented(skillName, costDeducted);
  };

  handleIncrementSecondaryParameter = (skillName, cost) => {
    this.props.secondaryParameterIncremented(skillName, cost);
  };

  handleDecrementSecondaryParameter = (skillName, costDeducted) => {
    this.props.secondaryParameterDecremented(skillName, costDeducted);
  };

  handleVirtueSelected = (virtueIndex) => (data) => {
    const virtueId = toNumber(data.target.value);
    const virtue = find(this.props.heroSelected.virtues, {id: virtueId});

    this.props.virtueSelected(virtueIndex, virtue);
  };

  handleRemoveAdvantageChoice = (advantageId, pdCost) => {
    this.props.advantageRemoved(advantageId, pdCost);
  };

  handleRemoveHexeriChoice = (hexeriId, pdCost) => {
    const selectedVirtues = this.props.selectedVirtues;
    const isStager = !isEmpty(compact(selectedVirtues).filter(virtue => virtue.internal_name === "stager"));
    const _pdCost = isStager ? pdCost - 1 : pdCost;
    this.props.hexeriRemoved(hexeriId, _pdCost);
  };

  handleRemoveImplantChoice = (implantId, neurostabilityCost, moneyCost, kind) => {
    const { selectedVirtues, regionsFamiliarityChoice, chosenImplants } = this.props;
    const implantFamilies = uniq(map(chosenImplants.filter(implant => implant.id !== implantId), "kind"));
    this.props.implantRemoved(implantId, neurostabilityCost, moneyCost);

    const twoImplantGroupsAllowed = selectedVirtues && !isEmpty(selectedVirtues.filter(virtue => virtue.internal_name === "fraud"));
    if (twoImplantGroupsAllowed && (regionsFamiliarityChoice.length === 2) && (implantFamilies.length === 1)) {
      this.props.regionsFamiliarityUpdated(implantFamilies)
    } else if ((regionsFamiliarityChoice.length === 1) && (implantFamilies.length === 0)) {
      this.props.regionsFamiliarityUpdated([])
    }
  };

  renderHeroesForSelect() {
    const {heroesList} = this.props;
    return (
      !isEmpty(heroesList) && [<option disabled value key={0} value={0}> -- Wybierz klasę postaci
        -- </option>].concat(map(heroesList, ({id, name}) => <option key={id} value={id}>{name}</option>))
    )
  }

  renderFlexibleSecondarySkillChoice(skillName) {
    const {heroSelected, usedFlexibleSecondaryParameters, chosenFlexibleSecondaryParameters, allVirtuesSelected} = this.props;

    if (heroSelected && allVirtuesSelected) {
      const flexibleParameters = this.props.flexibleParameters;
      return (map(flexibleParameters, ({id, name: flexibleParameterName, value}) => {
        if (usedFlexibleSecondaryParameters.includes(flexibleParameterName)) {
          return false
        }
        if (get(chosenFlexibleSecondaryParameters, skillName, 0) > 0) {
          return false
        }

        if (flexibleParameterName.includes(skillName)) {
          return (<Button key={id + name} color="primary" className="tiny__button float-left"
                          onClick={() => this.handleFlexibleSecondarySkillChoice(flexibleParameterName, skillName, value)}>{value}</Button>)
        } else if (flexibleParameterName.includes("any_")) {
          const base = heroSelected.parameters.filter(parameter => parameter.name === skillName && parameter.type === "SecondaryParameter")[0].value; //FIXME this is a duplication, when we consider a method defined in selectors.js
          const secondaryParameterAtZero = base === 0;
          if (secondaryParameterAtZero) {
            return (<Button key={id + name} color="primary" className="tiny__button float-right"
                            onClick={() => this.handleFlexibleSecondarySkillChoice(flexibleParameterName, skillName, value)}>{value}</Button>)
          }
        }
      }))
    }
  };

  renderIncrementMainParameterButton(skillName) {
    const {heroSelected, allFlexibleParametersAssigned, allVirtuesSelected} = this.props;
    if (heroSelected && allVirtuesSelected && allFlexibleParametersAssigned) {
      const baseParameter = this.props.mainParameterTotal(skillName);
      const experiencePoints = this.props.experiencePoints;
      const cost = (baseParameter + 1) * 2;
      if (cost <= experiencePoints) {
        return (<Button key={"increment" + skillName} color="success" className="tiny__button float-left"
                        onClick={() => this.handleIncrementMainParameter(skillName, cost)}>+</Button>)
      }
    }
  };

  renderDecrementMainParameterButton(skillName) {
    const {heroSelected, allFlexibleParametersAssigned, allVirtuesSelected} = this.props;
    if (heroSelected && allVirtuesSelected && allFlexibleParametersAssigned) {
      const canDeduct = this.props.mainParameterUserChanges(skillName);
      if (canDeduct) {
        const costDeducted = this.props.mainParameterTotal(skillName) * 2;
        return (<Button key={"decrement" + skillName} color="danger" className="tiny__button float-right"
                        onClick={() => this.handleDecrementMainParameter(skillName, costDeducted)}>-</Button>)
      }
    }
  };

  renderIncrementSecondaryParameterButton(skillName) {
    const {heroSelected, allFlexibleParametersAssigned, allVirtuesSelected} = this.props;
    if (heroSelected && allVirtuesSelected && allFlexibleParametersAssigned) {
      const secondaryParameter = this.props.secondaryParameterTotal(skillName);
      const experiencePoints = this.props.experiencePoints;
      const cost = (secondaryParameter + 1);
      if (cost <= experiencePoints) {
        return (<Button key={"increment" + skillName} color="success" className="tiny__button float-left"
                        onClick={() => this.handleIncrementSecondaryParameter(skillName, cost)}>+</Button>)
      }
    }
  };

  renderDecrementSecondaryParameterButton(skillName) {
    const {heroSelected, allFlexibleParametersAssigned, allVirtuesSelected} = this.props;
    if (heroSelected && allVirtuesSelected && allFlexibleParametersAssigned) {
      const canDeduct = this.props.secondaryParameterUserChanges(skillName);
      if (canDeduct) {
        const costDeducted = this.props.secondaryParameterTotal(skillName);
        return (<Button key={"decrement" + skillName} color="danger" className="tiny__button float-right"
                        onClick={() => this.handleDecrementSecondaryParameter(skillName, costDeducted)}>-</Button>)
      }
    }
  };

  renderVirtueSelectOptions(virtues) {
    return ([
        <option disabled value key={0} value={0}> -- Wybierz zaletę
          --
        </option>
      ].concat(map(virtues, ({id, name}) => <option key={id} value={id}>{name}</option>))
    )
  };

  renderVirtueSelect(virtueIndex) {
    const {heroSelected} = this.props;
    if (heroSelected) {
      const selectedVirtue = this.props.selectedVirtues[virtueIndex];
      if (selectedVirtue) {
        return (<p>
          <span href="#" id={"virtueDescription" + selectedVirtue.id}>{selectedVirtue.name}</span>
          <UncontrolledTooltip placement="right" target={"virtueDescription" + selectedVirtue.id}>
            {selectedVirtue.description}
          </UncontrolledTooltip>
        </p>)
      } else {
        const selectedVirtuesIds = map(this.props.selectedVirtues, "id");
        const virtues = heroSelected.virtues.filter(virtue => !selectedVirtuesIds.includes(virtue.id));
        return (<Input type="select" name="virtueSelect" placeholder="Wybierz zaletę"
                       defaultValue={0}
                       onChange={this.handleVirtueSelected(virtueIndex)}>{this.renderVirtueSelectOptions(virtues)}</Input>)
      }
    }
  };
  //TODO consider renaming this method and other methods, as it's not only a button
  renderAdvantageChoiceButton(advantageIndex) {
    const {heroSelected, allFlexibleParametersAssigned, allVirtuesSelected, chosenAdvantagesIds, chosenAdvantages} = this.props;
    if (heroSelected && allVirtuesSelected && allFlexibleParametersAssigned) {
      if (!!chosenAdvantagesIds[advantageIndex]) {
        const advantage = chosenAdvantages[advantageIndex];
        return (<p>
          <span href="#" id={"advantageDescription" + advantage.id}>{advantage.name}</span>
          <UncontrolledTooltip placement="right" target={"advantageDescription" + advantage.id}>
            {advantage.description}
          </UncontrolledTooltip>
          <Button key={"removeAdvantage" + advantage.id} color="danger"
                  className="tiny__button float-right"
                  onClick={() => this.handleRemoveAdvantageChoice(advantage.id, advantage.pd_cost)}>-
          </Button>
        </p>)

        // render skill name <p> with on hover tooltip with desc + cost of use again
      } else if (chosenAdvantagesIds.indexOf(null) === advantageIndex) {
        return(<ChooseAdvantageModal/>);
      }
    }
  };

  //TODO consider renaming this method and other methods, as it's not only a button
  renderImplantChoiceButton(implantIndex) {
    const {heroSelected, allFlexibleParametersAssigned, allVirtuesSelected, chosenImplantsIds, chosenImplants, einherRolls, einherImplantsIds} = this.props;
    if (heroSelected && allVirtuesSelected && allFlexibleParametersAssigned) {
      if (!isEmpty(einherRolls)) {
        return(<ChooseEinherEnhancementsModal/>);
      } else if (!!chosenImplantsIds[implantIndex]) {
        const implant = chosenImplants[implantIndex];
        return (<p>
          <span href="#" id={"implantDescription" + implant.id}>{implant.name}</span>
          <UncontrolledTooltip placement="right" target={"implantDescription" + implant.id}>
            {implant.description}
          </UncontrolledTooltip>
          {!(einherImplantsIds.includes(implant.id)) && (
          <Button key={"removeImplant" + implant.id} color="danger"
                  className="tiny__button implant"
                  onClick={() => this.handleRemoveImplantChoice(implant.id, implant.neurostability_cost, implant.money_cost, implant.kind)}>-
          </Button>)}
        </p>)
      } else if (chosenImplantsIds.indexOf(null) === implantIndex) {
        return(<ChooseImplantModal/>);
      }
    }
  };

  renderHexeriChoiceButton(hexeriIndex) {
    const {heroSelected, allFlexibleParametersAssigned, allVirtuesSelected, chosenHexerisIds, chosenHexeris} = this.props;
    if (heroSelected && allVirtuesSelected && allFlexibleParametersAssigned) {
      if (!!chosenHexerisIds[hexeriIndex]) {
        const hexeri = chosenHexeris[hexeriIndex];
        return (<p>
          <span href="#" id={"hexeriDescription" + hexeri.id}>{hexeri.name}</span>
          <UncontrolledTooltip placement="right" target={"hexeriDescription" + hexeri.id}>
            {hexeri.description}
          </UncontrolledTooltip>
          <Button key={"removeHexeri" + hexeri.id} color="danger"
                  className="tiny__button float-right"
                  onClick={() => this.handleRemoveHexeriChoice(hexeri.id, hexeri.pd_cost)}>-
          </Button>
        </p>)

        // render skill name <p> with on hover tooltip with desc + cost of use again
      } else if (chosenHexerisIds.indexOf(null) === hexeriIndex) {
        return(<ChooseHexeriModal/>);
      }
    }
  };

  pickMeFirst(_classNames) {
    const {heroSelected, allVirtuesSelected} = this.props;
    return (classNames(_classNames, {"pick-me-first": heroSelected && !allVirtuesSelected}));
  };

  render() {
    return (
      <Fragment>
        <tr className="black-and-white__cell">
          <td>Parametry Główne (PG)</td>
          <td>Nazwa Umiejętności</td>
          <td>Baza + wszczepy + premie</td>
          <td>Umiejętność</td>
          <td>Premia do Testu</td>
          <td>Imię Weterana</td>
        </tr>
        <tr className="solid-border__cell">
          <td rowSpan="3" className="white-and-black__cell">
            {this.renderIncrementMainParameterButton("physique")} BUDOWA
            CIAŁA {this.renderDecrementMainParameterButton("physique")}
            <br/>
            {this.props.mainParameterBase("physique")} + {this.props.mainParameterFromImplants("physique")} = {this.props.mainParameterTotal("physique")}
            <br/>
            Podstawa Wszczepy
          </td>
          <td
            className="grey-and-black__cell">{this.renderIncrementSecondaryParameterButton("fencing")}{this.renderFlexibleSecondarySkillChoice('fencing')}Broń
            Biała{this.renderDecrementSecondaryParameterButton("fencing")}</td>
          <td className="grey-and-black__cell"><span>
            {this.props.secondaryParameterBase("fencing")}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterFromImplants("fencing")}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterBonus("fencing")}
          </span></td>
          <td className="grey-and-black__cell">{this.props.secondaryParameterTotal("fencing")}</td>
          <td className="grey-and-black__cell">{this.props.secondaryParameterTotalBonus("physique", "fencing")}</td>
          <td rowSpan="2">
            <Input type="text" name="name" id="name" placeholder="Jak się nazywasz?" onChange={this.handleChange}
                   defaultValue={this.props.name}/>
          </td>
        </tr>
        <tr className="solid-border__cell white-and-black__cell">
          <td>{this.renderIncrementSecondaryParameterButton("martial_arts")}{this.renderFlexibleSecondarySkillChoice('martial_arts')}Walka
            Wręcz{this.renderDecrementSecondaryParameterButton("martial_arts")}</td>
          <td><span>
            {this.props.secondaryParameterBase('martial_arts')}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterFromImplants("martial_arts")}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterBonus("physique", "martial_arts")}
          </span></td>
          <td>{this.props.secondaryParameterTotal("martial_arts")}</td>
          <td>{this.props.secondaryParameterTotalBonus("physique", "martial_arts")}</td>
        </tr>
        <tr className="solid-border__cell">
          <td
            className="grey-and-black__cell">{this.renderIncrementSecondaryParameterButton("endurance")}{this.renderFlexibleSecondarySkillChoice('endurance')} Wytrzymałość {this.renderDecrementSecondaryParameterButton("endurance")}</td>
          <td className="grey-and-black__cell"><span>
            {this.props.secondaryParameterBase("endurance")}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterFromImplants("endurance")}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterBonus("endurance")}
          </span></td>
          <td className="grey-and-black__cell">{this.props.secondaryParameterTotal("endurance")}</td>
          <td className="grey-and-black__cell">{this.props.secondaryParameterTotalBonus("physique", "endurance")}</td>
          <td className="black-and-white__cell">Klasa Postaci</td>
        </tr>
        <tr className="solid-border__cell">
          <td rowSpan="3" className="white-and-black__cell">
            {this.renderIncrementMainParameterButton("dexterity")} ZRĘCZNOŚĆ {this.renderDecrementMainParameterButton("dexterity")}
            <br/>
            {this.props.mainParameterBase("dexterity")} + {this.props.mainParameterFromImplants("dexterity")} = {this.props.mainParameterTotal("dexterity")}
            <br/>
            Podstawa Wszczepy
          </td>
          <td
            className="white-and-black__cell">{this.renderIncrementSecondaryParameterButton("pistols")}{this.renderFlexibleSecondarySkillChoice('pistols')}Broń
            Krótka{this.renderDecrementSecondaryParameterButton("pistols")}</td>
          <td className="white-and-black__cell"><span>
            {this.props.secondaryParameterBase("pistols")}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterFromImplants("pistols")}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterBonus("pistols")}
          </span></td>
          <td className="white-and-black__cell">{this.props.secondaryParameterTotal("pistols")}</td>
          <td className="white-and-black__cell">{this.props.secondaryParameterTotalBonus("dexterity", "pistols")}</td>
          <td rowSpan="2">
            <Input type="select" name="characterClass" id="characterClass" placeholder="Wybierz klasę postaci"
                   value={this.props.characterId}
                   onChange={this.handleHeroClassChange}>
              {this.renderHeroesForSelect()}
            </Input>
          </td>
        </tr>
        <tr className="solid-border__cell">
          <td
            className="grey-and-black__cell">{this.renderIncrementSecondaryParameterButton("vehicle_handling")}{this.renderFlexibleSecondarySkillChoice('vehicle_handling')}Obsługa
            Pojazdów{this.renderDecrementSecondaryParameterButton("vehicle_handling")}
          </td>
          <td className="grey-and-black__cell"><span>
            {this.props.secondaryParameterBase('vehicle_handling')}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterFromImplants('vehicle_handling')}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterBonus('vehicle_handling')}
          </span></td>
          <td className="grey-and-black__cell">{this.props.secondaryParameterTotal('vehicle_handling')}</td>
          <td
            className="grey-and-black__cell">{this.props.secondaryParameterTotalBonus('dexterity', 'vehicle_handling')}</td>
        </tr>
        <tr className="solid-border__cell white-and-black__cell">
          <td>{this.renderIncrementSecondaryParameterButton("reflex")}{this.renderFlexibleSecondarySkillChoice('reflex')}Refleks{this.renderDecrementSecondaryParameterButton("reflex")}</td>
          <td><span>
            {this.props.secondaryParameterBase('reflex')}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterFromImplants('reflex')}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterBonus('reflex')}
          </span></td>
          <td>{this.props.secondaryParameterTotal('reflex')}</td>
          <td>{this.props.secondaryParameterTotalBonus('dexterity', 'reflex')}</td>
          <td className="black-and-white__cell">Punkty Doświadczenia</td>
        </tr>
        <tr className="solid-border__cell">
          <td rowSpan="3" className="white-and-black__cell">
            {this.renderIncrementMainParameterButton("perception")} PERCEPCJA {this.renderDecrementMainParameterButton("perception")}
            <br/>
            {this.props.mainParameterBase("perception")} + {this.props.mainParameterFromImplants("perception")} = {this.props.mainParameterTotal("perception")}
            <br/>
            Podstawa Wszczepy
          </td>
          <td
            className="grey-and-black__cell">{this.renderIncrementSecondaryParameterButton("rifles")}{this.renderFlexibleSecondarySkillChoice('rifles')}Broń
            Długa{this.renderDecrementSecondaryParameterButton("rifles")}</td>
          <td className="grey-and-black__cell"><span>
            {this.props.secondaryParameterBase('rifles')}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterFromImplants('rifles')}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterBonus('rifles')}
          </span></td>
          <td className="grey-and-black__cell">{this.props.secondaryParameterTotal('rifles')}</td>
          <td className="grey-and-black__cell">{this.props.secondaryParameterTotalBonus('perception', 'rifles')}</td>
          <td className="centered__cell" rowSpan="2">{this.props.experiencePoints}</td>
        </tr>
        <tr className="solid-border__cell white-and-black__cell">
          <td>{this.renderIncrementSecondaryParameterButton("spaceships_handling")}{this.renderFlexibleSecondarySkillChoice('spaceships_handling')}Gwiezdny
            Pilotaż{this.renderDecrementSecondaryParameterButton("spaceships_handling")}</td>
          <td><span>
            {this.props.secondaryParameterBase('spaceships_handling')}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterFromImplants('spaceships_handling')}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterBonus('spaceships_handling')}
          </span></td>
          <td>{this.props.secondaryParameterTotal('spaceships_handling')}</td>
          <td>{this.props.secondaryParameterTotalBonus('perception', 'spaceships_handling')}</td>
        </tr>
        <tr className="solid-border__cell">
          <td
            className="grey-and-black__cell">{this.renderIncrementSecondaryParameterButton("senses")}{this.renderFlexibleSecondarySkillChoice('senses')}Wyczulone
            Zmysły{this.renderDecrementSecondaryParameterButton("senses")}
          </td>
          <td className="grey-and-black__cell"><span>
            {this.props.secondaryParameterBase('senses')}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterFromImplants('senses')}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterBonus('senses')}
          </span></td>
          <td className="grey-and-black__cell">{this.props.secondaryParameterTotal('senses')}</td>
          <td className="grey-and-black__cell">{this.props.secondaryParameterTotalBonus('perception', 'senses')}</td>
          <td className="black-and-white__cell">Koncentracja (OP+E)</td>
        </tr>
        <tr className="solid-border__cell">
          <td rowSpan="3" className="white-and-black__cell">
            {this.renderIncrementMainParameterButton("inteligence")} INTELIGENCJA {this.renderDecrementMainParameterButton("inteligence")}
            <br/>
            {this.props.mainParameterBase("inteligence")} + {this.props.mainParameterFromImplants("inteligence")} = {this.props.mainParameterTotal("inteligence")}
            <br/>
            Podstawa Wszczepy
          </td>
          <td
            className="white-and-black__cell">{this.renderIncrementSecondaryParameterButton("connections")}{this.renderFlexibleSecondarySkillChoice('connections')}Koneksje{this.renderDecrementSecondaryParameterButton("connections")}</td>
          <td className="white-and-black__cell"><span>
            {this.props.secondaryParameterBase('connections')}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterFromImplants('connections')}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterBonus('connections')}
          </span></td>
          <td className="white-and-black__cell">{this.props.secondaryParameterTotal('connections')}</td>
          <td
            className="white-and-black__cell">{this.props.secondaryParameterTotalBonus('inteligence', 'connections')}</td>
          <td className="centered__cell" rowSpan="2">{this.props.focus}</td>
        </tr>
        <tr className="solid-border__cell">
          <td
            className="grey-and-black__cell">{this.renderIncrementSecondaryParameterButton("technology")}{this.renderFlexibleSecondarySkillChoice('technology')}Technika{this.renderDecrementSecondaryParameterButton("technology")}
          </td>
          <td className="grey-and-black__cell"><span>
            {this.props.secondaryParameterBase('technology')}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterFromImplants('technology')}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterBonus('technology')}
          </span></td>
          <td className="grey-and-black__cell">{this.props.secondaryParameterTotal('technology')}</td>
          <td
            className="grey-and-black__cell">{this.props.secondaryParameterTotalBonus('inteligence', 'technology')}</td>
        </tr>
        <tr className="solid-border__cell white-and-black__cell">
          <td>{this.renderIncrementSecondaryParameterButton("knowledge")}{this.renderFlexibleSecondarySkillChoice('knowledge')}Wiedza{this.renderDecrementSecondaryParameterButton("knowledge")}</td>
          <td><span>
            {this.props.secondaryParameterBase('knowledge')}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterFromImplants('knowledge')}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterBonus('knowledge')}
          </span></td>
          <td>{this.props.secondaryParameterTotal('knowledge')}</td>
          <td>{this.props.secondaryParameterTotalBonus('inteligence', 'knowledge')}</td>
          <td className="black-and-white__cell">Neurostabilność (INTx5)</td>
        </tr>
        <tr className="solid-border__cell">
          <td rowSpan="3" className="white-and-black__cell">
            {this.renderIncrementMainParameterButton("self_control")} OPANOWANIE {this.renderDecrementMainParameterButton("self_control")}
            <br/>
            {this.props.mainParameterBase("self_control")} + {this.props.mainParameterFromImplants("self_control")} = {this.props.mainParameterTotal("self_control")}
            <br/>
            Podstawa Wszczepy
          </td>
          <td className="grey-and-black__cell">{this.renderIncrementSecondaryParameterButton("hacking")}{this.renderFlexibleSecondarySkillChoice('hacking')}Hackowanie{this.renderDecrementSecondaryParameterButton("hacking")}</td>
          <td className="grey-and-black__cell"><span>
            {this.props.secondaryParameterBase('hacking')}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterFromImplants('hacking')}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterBonus('hacking')}
          </span></td>
          <td className="grey-and-black__cell">{this.props.secondaryParameterTotal('hacking')}</td>
          <td className="grey-and-black__cell">{this.props.secondaryParameterTotalBonus('self_control', 'hacking')}</td>
          <td className="centered__cell" rowSpan="2">{this.props.neurostability}</td>
        </tr>
        <tr className="solid-border__cell white-and-black__cell">
          <td>{this.renderIncrementSecondaryParameterButton("infiltration")}{this.renderFlexibleSecondarySkillChoice('infiltration')}Infiltracja{this.renderDecrementSecondaryParameterButton("infiltration")}</td>
          <td><span>
            {this.props.secondaryParameterBase('infiltration')}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterFromImplants('infiltration')}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterBonus('infiltration')}
          </span></td>
          <td>{this.props.secondaryParameterTotal('infiltration')}</td>
          <td>{this.props.secondaryParameterTotalBonus('self_control', 'infiltration')}</td>
        </tr>
        <tr className="solid-border__cell">
          <td className="grey-and-black__cell">{this.renderIncrementSecondaryParameterButton("trick_and_subterfuge")}{this.renderFlexibleSecondarySkillChoice('trick_and_subterfuge')}Trik i
            Fortel{this.renderDecrementSecondaryParameterButton("trick_and_subterfuge")}
          </td>
          <td className="grey-and-black__cell"><span>
            {this.props.secondaryParameterBase('trick_and_subterfuge')}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterFromImplants('trick_and_subterfuge')}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterBonus('trick_and_subterfuge')}
          </span></td>
          <td className="grey-and-black__cell">{this.props.secondaryParameterTotal('trick_and_subterfuge')}</td>
          <td
            className="grey-and-black__cell">{this.props.secondaryParameterTotalBonus('self_control', 'trick_and_subterfuge')}</td>
          <td className="black-and-white__cell">Wysportowanie (BC+ZR)</td>
        </tr>
        <tr className="solid-border__cell">
          <td rowSpan="3" className="white-and-black__cell">
            {this.renderIncrementMainParameterButton("entropy")} ENTROPIA {this.renderDecrementMainParameterButton("entropy")}
            <br/>
            {this.props.mainParameterBase("entropy")} + {this.props.mainParameterFromImplants("entropy")} = {this.props.mainParameterTotal("entropy")}
            <br/>
            Podstawa Wszczepy
          </td>
          <td className="white-and-black__cell">{this.renderIncrementSecondaryParameterButton("charisma")}{this.renderFlexibleSecondarySkillChoice('charisma')}Charyzma{this.renderDecrementSecondaryParameterButton("charisma")}</td>
          <td className="white-and-black__cell"><span>
            {this.props.secondaryParameterBase('charisma')}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterFromImplants('charisma')}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterBonus('charisma')}
          </span></td>
          <td className="white-and-black__cell">{this.props.secondaryParameterTotal('charisma')}</td>
          <td className="white-and-black__cell">{this.props.secondaryParameterTotalBonus('entropy', 'charisma')}</td>
          <td className="centered__cell" rowSpan="2">{this.props.sportiness}</td>
        </tr>
        <tr className="solid-border__cell">
          <td className="grey-and-black__cell">{this.renderIncrementSecondaryParameterButton("hexeri")}{this.renderFlexibleSecondarySkillChoice('hexeri')}Hekseri{this.renderDecrementSecondaryParameterButton("hexeri")}</td>
          <td className="grey-and-black__cell"><span>
            {this.props.secondaryParameterBase('hexeri')}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterFromImplants('hexeri')}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterBonus('hexeri')}
          </span></td>
          <td className="grey-and-black__cell">{this.props.secondaryParameterTotal('hexeri')}</td>
          <td className="grey-and-black__cell">{this.props.secondaryParameterTotalBonus('entropy', 'hexeri')}</td>
        </tr>
        <tr className="solid-border__cell white-and-black__cell">
          <td>{this.renderIncrementSecondaryParameterButton("willpower")}{this.renderFlexibleSecondarySkillChoice('willpower')}Siła Woli{this.renderDecrementSecondaryParameterButton("willpower")}</td>
          <td><span>
            {this.props.secondaryParameterBase('willpower')}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterFromImplants('willpower')}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterBonus('willpower')}
          </span></td>
          <td>{this.props.secondaryParameterTotal('willpower')}</td>
          <td>{this.props.secondaryParameterTotalBonus('entropy', 'willpower')}</td>
          <td className="black-and-white__cell">Ruch (5+Wysportowanie)</td>
        </tr>
        <tr className="black-and-white__cell">
          <td colSpan="5">ZALETY</td>
          <td
            className="no-horizontal-border__cell white-and-black__cell centered__cell">{this.props.movementSpeed}</td>
        </tr>
        <tr className="solid-border__cell">
          <td className={this.pickMeFirst("white-and-black__cell")} rowSpan="2"
              colSpan="2">{this.renderVirtueSelect(0)}</td>
          <td className={this.pickMeFirst("white-and-black__cell")} rowSpan="2"
              colSpan="3">{this.renderVirtueSelect(1)}</td>
          <td className="no-horizontal-border__cell white-and-black__cell">&nbsp;</td>
        </tr>
        <tr className="solid-border__cell">
          <td className="black-and-white__cell">Witalność (10+5xBC)</td>
        </tr>
        <tr className="solid-border__cell black-and-white__cell">
          <td colSpan="5">ATUTY</td>
          <td className="centered__cell no-horizontal-border__cell white-and-black__cell">{this.props.hitPoints}</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">{this.renderAdvantageChoiceButton(0)}</td>
          <td colSpan="3">{this.renderAdvantageChoiceButton(6)}</td>
          <td className="no-horizontal-border__cell white-and-black__cell">&nbsp;</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">{this.renderAdvantageChoiceButton(1)}</td>
          <td colSpan="3">{this.renderAdvantageChoiceButton(7)}</td>
          <td className="black-and-white__cell">Moc (INTx5)</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">{this.renderAdvantageChoiceButton(2)}&nbsp;</td>
          <td colSpan="3">{this.renderAdvantageChoiceButton(8)}&nbsp;</td>
          <td className="centered__cell no-horizontal-border__cell white-and-black__cell">{this.props.power}</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">{this.renderAdvantageChoiceButton(3)}</td>
          <td colSpan="3">{this.renderAdvantageChoiceButton(9)}</td>
          <td className="no-horizontal-border__cell white-and-black__cell">&nbsp;</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">{this.renderAdvantageChoiceButton(4)}</td>
          <td colSpan="3">{this.renderAdvantageChoiceButton(10)}</td>
          <td className="black-and-white__cell">Prezencja (BC+E)</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">{this.renderAdvantageChoiceButton(5)}</td>
          <td colSpan="3">{this.renderAdvantageChoiceButton(11)}</td>
          <td className="centered__cell no-horizontal-border__cell white-and-black__cell">{this.props.apparition}</td>
        </tr>
        <tr className="solid-border__cell black-and-white__cell">
          <td colSpan="5">WSZCZEPY</td>
          <td className="no-horizontal-border__cell white-and-black__cell">&nbsp;</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">{this.renderImplantChoiceButton(0)}</td>
          <td colSpan="3">{this.renderImplantChoiceButton(5)}</td>
          <td className="black-and-white__cell">Przerzuty (E)</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">{this.renderImplantChoiceButton(1)}</td>
          <td colSpan="3">{this.renderImplantChoiceButton(6)}</td>
          <td className="no-horizontal-border__cell white-and-black__cell">OOOOO OOOOO</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">{this.renderImplantChoiceButton(2)}</td>
          <td colSpan="3">{this.renderImplantChoiceButton(7)}</td>
          <td className="no-horizontal-border__cell white-and-black__cell">OOOOO OOOOO</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">{this.renderImplantChoiceButton(3)}</td>
          <td colSpan="3">{this.renderImplantChoiceButton(8)}</td>
          <td className="black-and-white__cell">Przesunięcia (E)</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">{this.renderImplantChoiceButton(4)}</td>
          <td colSpan="3">{this.renderImplantChoiceButton(9)}</td>
          <td className="no-horizontal-border__cell white-and-black__cell">OOOOO OOOOO</td>
        </tr>
        <tr className="solid-border__cell black-and-white__cell">
          <td colSpan="5">MOCE ENTROPICZNE</td>
          <td className="no-horizontal-border__cell white-and-black__cell">OOOOO OOOOO</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">{this.renderHexeriChoiceButton(0)}&nbsp;</td>
          <td colSpan="3">{this.renderHexeriChoiceButton(5)}&nbsp;</td>
          <td rowSpan="2" className="black-and-white__cell">Poziom Trudności Testów</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">{this.renderHexeriChoiceButton(1)}&nbsp;</td>
          <td colSpan="3">{this.renderHexeriChoiceButton(6)}&nbsp;</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">{this.renderHexeriChoiceButton(2)}&nbsp;</td>
          <td colSpan="3">{this.renderHexeriChoiceButton(7)}&nbsp;</td>
          <td className="table-wrapping__cell" rowSpan="8">
            <TestDifficultyCheatSheet/>
          </td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">{this.renderHexeriChoiceButton(3)}&nbsp;</td>
          <td colSpan="3">{this.renderHexeriChoiceButton(8)}&nbsp;</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">{this.renderHexeriChoiceButton(4)}&nbsp;</td>
          <td colSpan="3">{this.renderHexeriChoiceButton(9)}&nbsp;</td>
        </tr>
        <tr className="solid-border__cell black-and-white__cell">
          <td colSpan="5">WYPOSAŻENIE</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">&nbsp;</td>
          <td colSpan="3">&nbsp;</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">&nbsp;</td>
          <td colSpan="3">&nbsp;</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">&nbsp;</td>
          <td colSpan="3">&nbsp;</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">&nbsp;</td>
          <td colSpan="3">&nbsp;</td>
        </tr>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  name: characterName(state),
  characterId: characterId(state),
  mainParameterBase: name => mainParameterBase(state, name),
  mainParameterFromImplants: name => mainParameterFromImplants(state, name),
  mainParameterTotal: name => mainParameterTotal(state, name),
  mainParameterUserChanges: name => mainParameterUserChanges(state, name),
  secondaryParameterUserChanges: name => secondaryParameterUserChanges(state, name),
  usedFlexibleSecondaryParameters: usedFlexibleSecondaryParameters(state),
  chosenFlexibleSecondaryParameters: chosenFlexibleSecondaryParameters(state),
  experiencePoints: experiencePoints(state),
  focus: focus(state),
  neurostability: neurostability(state),
  sportiness: sportiness(state),
  movementSpeed: movementSpeed(state),
  hitPoints: hitPoints(state),
  power: power(state),
  apparition: apparition(state),
  secondaryParameterBase: name => secondaryParameterBase(state, name),
  secondaryParameterFromImplants: name => secondaryParameterFromImplants(state, name),
  secondaryParameterBonus: name => secondaryParameterBonus(state, name),
  secondaryParameterTotal: name => secondaryParameterTotal(state, name),
  secondaryParameterTotalBonus: (mainName, secondaryName) => secondaryParameterTotalBonus(state, mainName, secondaryName),
  heroesList: get(state, "heroes.byId"),
  heroSelected: heroSelected(state),
  selectedVirtues: selectedVirtues(state),
  allVirtuesSelected: allVirtuesSelected(state),
  flexibleParameters: flexibleParameters(state),
  allFlexibleParametersAssigned: allFlexibleParametersAssigned(state),
  chosenAdvantagesIds: chosenAdvantagesIds(state),
  chosenAdvantages: chosenAdvantages(state),
  chosenImplantsIds: chosenImplantsIds(state),
  chosenImplants: chosenImplants(state),
  regionsFamiliarityChoice: regionsFamiliarityChoice(state),
  chosenHexerisIds: chosenHexerisIds(state),
  chosenHexeris: chosenHexeris(state),
  einherRolls: einherRolls(state),
  einherImplantsIds: einherImplantsIds(state),
});

const mapDispatchToProps = {
  inputChange,
  heroClassSelected,
  flexibleSecondarySkillSelected,
  mainParameterIncremented,
  mainParameterDecremented,
  secondaryParameterIncremented,
  secondaryParameterDecremented,
  advantageRemoved,
  hexeriRemoved,
  implantRemoved,
  regionsFamiliarityUpdated,
  virtueSelected,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FirstPageBlob);
