import React, {Component, Fragment} from 'react';
import {get, isEmpty, map} from 'lodash';
import {Input, Button} from 'reactstrap';
import {connect} from "react-redux";
import TestDifficultyCheatSheet from "./TestDifficultyCheatSheet";
//actions
import {
  inputChange,
  heroClassSelected,
  flexibleSecondarySkillSelected,
  mainParameterIncremented,
  mainParameterDecremented
} from '../../store/heroes';
//selectors
import {
  heroSelected, characterName, characterId, usedFlexibleSecondaryParameters,
  chosenFlexibleSecondaryParameters,
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
  mainParameterUserChanges
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

  renderHeroesForSelect() {
    const {heroesList} = this.props;
    return (
      !isEmpty(heroesList) && [<option disabled value key={0} value={0}> -- Wybierz klasę postaci
        -- </option>].concat(map(heroesList, ({id, name}) => <option key={id} value={id}>{name}</option>))
    )
  }

  renderFlexibleSecondarySkillChoice(skillName) {
    const heroSelected = this.props.heroSelected;
    const usedFlexibleSecondaryParameters = this.props.usedFlexibleSecondaryParameters;
    const chosenFlexibleSecondaryParameters = this.props.chosenFlexibleSecondaryParameters;
    if (heroSelected) {
      const flexibleParameters = heroSelected.parameters.filter(parameter => parameter.name.includes("_or_") || parameter.name.includes("any_") && parameter.type === "SecondaryParameter");
      return (map(flexibleParameters, ({id, name: flexibleParameterName, value}) => {
        if (usedFlexibleSecondaryParameters.includes(flexibleParameterName)) { return false }
        if (get(chosenFlexibleSecondaryParameters, skillName, 0) > 0) { return false }

        if (flexibleParameterName.includes(skillName)) {
          return (<Button key={id + name} color="primary" className="tiny__button float_left" onClick={() => this.handleFlexibleSecondarySkillChoice(flexibleParameterName, skillName, value)}>{value}</Button>)
        } else if (flexibleParameterName.includes("any_")) {
          const base = heroSelected.parameters.filter(parameter => parameter.name === skillName && parameter.type === "SecondaryParameter")[0].value; //FIXME this is a duplication, when we consider a method defined in selectors.js
          const secondaryParameterAtZero = base === 0;
          if (secondaryParameterAtZero) {
            return (<Button key={id + name} color="primary" className="tiny__button float_right" onClick={() => this.handleFlexibleSecondarySkillChoice(flexibleParameterName, skillName, value)}>{value}</Button>)
          }
        }
      }))
    }
  };

  renderIncrementMainParameterButton(skillName) {
    const heroSelected = this.props.heroSelected;
    if (heroSelected) {
      const baseParameter = this.props.mainParameterTotal(skillName);
      const experiencePoints = this.props.experiencePoints;
      const cost = (baseParameter + 1) * 2;
      if (cost <= experiencePoints) {
        return (<Button key={"increment" + skillName} color="success" className="tiny__button float_left"
                        onClick={() => this.handleIncrementMainParameter(skillName, cost)}>+</Button>)
      }
    }
  };

  renderDecrementMainParameterButton(skillName) {
    const heroSelected = this.props.heroSelected;
    if (heroSelected) {
      const canDeduct = this.props.mainParameterUserChanges(skillName);
      console.log(canDeduct);
      if (canDeduct) {
        const costDeducted = this.props.mainParameterTotal(skillName) * 2;
        return (<Button key={"decrement" + skillName} color="danger" className="tiny__button float_right"
                        onClick={() => this.handleDecrementMainParameter(skillName, costDeducted)}>-</Button>)
      }
      //  after the click, decrease the baseParameter and amend the  experiencePointsSpent
    }
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
            {this.renderIncrementMainParameterButton("physique")} BUDOWA CIAŁA {this.renderDecrementMainParameterButton("physique")}
            <br/>
            {this.props.mainParameterBase("physique")} + {this.props.mainParameterFromImplants("physique")} = {this.props.mainParameterTotal("physique")}
            <br/>
            Podstawa Wszczepy
          </td>
          <td className="grey-and-black__cell">{this.renderFlexibleSecondarySkillChoice('fencing')}Broń Biała</td>
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
          <td>{this.renderFlexibleSecondarySkillChoice('martial_arts')}Walka Wręcz</td>
          <td><span>
            {this.props.secondaryParameterBase('martial_arts')}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterFromImplants("martial_arts")}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterBonus("physique", "martial_arts")}
          </span></td>
          <td>{this.props.secondaryParameterTotal("martial_arts")}</td>
          <td>{this.props.secondaryParameterTotalBonus("physique", "martial_arts")}</td>
        </tr>
        <tr className="solid-border__cell">
          <td className="grey-and-black__cell">{this.renderFlexibleSecondarySkillChoice('endurance')}Wytrzymałość</td>
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
            ZRĘCZNOŚĆ
            <br/>
            {this.props.mainParameterBase("dexterity")} + {this.props.mainParameterFromImplants("dexterity")} = {this.props.mainParameterTotal("dexterity")}
            <br/>
            Podstawa Wszczepy
          </td>
          <td className="white-and-black__cell">{this.renderFlexibleSecondarySkillChoice('pistols')}Broń Krótka</td>
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
          <td className="grey-and-black__cell">{this.renderFlexibleSecondarySkillChoice('vehicle_handling')}Obsługa Pojazdów</td>
          <td className="grey-and-black__cell"><span>
            {this.props.secondaryParameterBase('vehicle_handling')}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterFromImplants('vehicle_handling')}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterBonus('vehicle_handling')}
          </span></td>
          <td className="grey-and-black__cell">{this.props.secondaryParameterTotal('vehicle_handling')}</td>
          <td className="grey-and-black__cell">{this.props.secondaryParameterTotalBonus('dexterity', 'vehicle_handling')}</td>
        </tr>
        <tr className="solid-border__cell white-and-black__cell">
          <td>{this.renderFlexibleSecondarySkillChoice('reflex')}Refleks</td>
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
            PERCEPCJA
            <br/>
            {this.props.mainParameterBase("perception")} + {this.props.mainParameterFromImplants("perception")} = {this.props.mainParameterTotal("perception")}
            <br/>
            Podstawa Wszczepy
          </td>
          <td className="grey-and-black__cell">{this.renderFlexibleSecondarySkillChoice('rifles')}Broń Długa</td>
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
          <td>{this.renderFlexibleSecondarySkillChoice('spaceships_handling')}Gwiezdny Pilotaż</td>
          <td><span>
            {this.props.secondaryParameterBase('spaceships_handling')}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterFromImplants('spaceships_handling')}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterBonus('spaceships_handling')}
          </span></td>
          <td>{this.props.secondaryParameterTotal('spaceships_handling')}</td>
          <td>{this.props.secondaryParameterTotalBonus('perception', 'spaceships_handling')}</td>
        </tr>
        <tr className="solid-border__cell">
          <td className="grey-and-black__cell">{this.renderFlexibleSecondarySkillChoice('senses')}Wyczulone Zmysły</td>
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
            INTELIGENCJA
            <br/>
            {this.props.mainParameterBase("inteligence")} + {this.props.mainParameterFromImplants("inteligence")} = {this.props.mainParameterTotal("inteligence")}
            <br/>
            Podstawa Wszczepy
          </td>
          <td className="white-and-black__cell">{this.renderFlexibleSecondarySkillChoice('connections')}Koneksje</td>
          <td className="white-and-black__cell"><span>
            {this.props.secondaryParameterBase('connections')}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterFromImplants('connections')}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterBonus('connections')}
          </span></td>
          <td className="white-and-black__cell">{this.props.secondaryParameterTotal('connections')}</td>
          <td className="white-and-black__cell">{this.props.secondaryParameterTotalBonus('inteligence', 'connections')}</td>
          <td className="centered__cell" rowSpan="2">{this.props.focus}</td>
        </tr>
        <tr className="solid-border__cell">
          <td className="grey-and-black__cell">{this.renderFlexibleSecondarySkillChoice('technology')}Technika</td>
          <td className="grey-and-black__cell"><span>
            {this.props.secondaryParameterBase('technology')}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterFromImplants('technology')}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterBonus('technology')}
          </span></td>
          <td className="grey-and-black__cell">{this.props.secondaryParameterTotal('technology')}</td>
          <td className="grey-and-black__cell">{this.props.secondaryParameterTotalBonus('inteligence', 'technology')}</td>
        </tr>
        <tr className="solid-border__cell white-and-black__cell">
          <td>{this.renderFlexibleSecondarySkillChoice('knowledge')}Wiedza</td>
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
            OPANOWANIE
            <br/>
            {this.props.mainParameterBase("self_control")} + {this.props.mainParameterFromImplants("self_control")} = {this.props.mainParameterTotal("self_control")}
            <br/>
            Podstawa Wszczepy
          </td>
          <td className="grey-and-black__cell">{this.renderFlexibleSecondarySkillChoice('hacking')}Hackowanie</td>
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
          <td>{this.renderFlexibleSecondarySkillChoice('infiltration')}Infiltracja</td>
          <td><span>
            {this.props.secondaryParameterBase('infiltration')}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterFromImplants('infiltration')}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterBonus('infiltration')}
          </span></td>
          <td>{this.props.secondaryParameterTotal('infiltration')}</td>
          <td>{this.props.secondaryParameterTotalBonus('self_control', 'infiltration')}</td>
        </tr>
        <tr className="solid-border__cell">
          <td className="grey-and-black__cell">{this.renderFlexibleSecondarySkillChoice('trick_and_subterfuge')}Trik i Fortel</td>
          <td className="grey-and-black__cell"><span>
            {this.props.secondaryParameterBase('trick_and_subterfuge')}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterFromImplants('trick_and_subterfuge')}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterBonus('trick_and_subterfuge')}
          </span></td>
          <td className="grey-and-black__cell">{this.props.secondaryParameterTotal('trick_and_subterfuge')}</td>
          <td className="grey-and-black__cell">{this.props.secondaryParameterTotalBonus('self_control', 'trick_and_subterfuge')}</td>
          <td className="black-and-white__cell">Wysportowanie (BC+ZR)</td>
        </tr>
        <tr className="solid-border__cell">
          <td rowSpan="3" className="white-and-black__cell">
            ENTROPIA
            <br/>
            {this.props.mainParameterBase("entropy")} + {this.props.mainParameterFromImplants("entropy")} = {this.props.mainParameterTotal("entropy")}
            <br/>
            Podstawa Wszczepy
          </td>
          <td className="white-and-black__cell">{this.renderFlexibleSecondarySkillChoice('charisma')}Charyzma</td>
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
          <td className="grey-and-black__cell">{this.renderFlexibleSecondarySkillChoice('hexeri')}Hekseri</td>
          <td className="grey-and-black__cell"><span>
            {this.props.secondaryParameterBase('hexeri')}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterFromImplants('hexeri')}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterBonus('hexeri')}
          </span></td>
          <td className="grey-and-black__cell">{this.props.secondaryParameterTotal('hexeri')}</td>
          <td className="grey-and-black__cell">{this.props.secondaryParameterTotalBonus('entropy', 'hexeri')}</td>
        </tr>
        <tr className="solid-border__cell white-and-black__cell">
          <td>{this.renderFlexibleSecondarySkillChoice('willpower')}Siła Woli</td>
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
          <td className="no-horizontal-border__cell white-and-black__cell centered__cell">{this.props.movementSpeed}</td>
        </tr>
        <tr className="solid-border__cell">
          <td rowSpan="2" colSpan="2">&nbsp;</td>
          <td rowSpan="2" colSpan="3">&nbsp;</td>
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
          <td colSpan="2">&nbsp;</td>
          <td colSpan="3">&nbsp;</td>
          <td className="no-horizontal-border__cell white-and-black__cell">&nbsp;</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">&nbsp;</td>
          <td colSpan="3">&nbsp;</td>
          <td className="black-and-white__cell">Moc (INTx5)</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">&nbsp;</td>
          <td colSpan="3">&nbsp;</td>
          <td className="centered__cell no-horizontal-border__cell white-and-black__cell">{this.props.power}</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">&nbsp;</td>
          <td colSpan="3">&nbsp;</td>
          <td className="no-horizontal-border__cell white-and-black__cell">&nbsp;</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">&nbsp;</td>
          <td colSpan="3">&nbsp;</td>
          <td className="black-and-white__cell">Prezencja (BC+E)</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">&nbsp;</td>
          <td colSpan="3">&nbsp;</td>
          <td className="centered__cell no-horizontal-border__cell white-and-black__cell">{this.props.apparition}</td>
        </tr>
        <tr className="solid-border__cell black-and-white__cell">
          <td colSpan="5">WSZCZEPY</td>
          <td className="no-horizontal-border__cell white-and-black__cell">&nbsp;</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">&nbsp;</td>
          <td colSpan="3">&nbsp;</td>
          <td className="black-and-white__cell">Przerzuty (E)</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">&nbsp;</td>
          <td colSpan="3">&nbsp;</td>
          <td className="no-horizontal-border__cell white-and-black__cell">OOOOO OOOOO</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">&nbsp;</td>
          <td colSpan="3">&nbsp;</td>
          <td className="no-horizontal-border__cell white-and-black__cell">OOOOO OOOOO</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">&nbsp;</td>
          <td colSpan="3">&nbsp;</td>
          <td className="black-and-white__cell">Przesunięcia (E)</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">&nbsp;</td>
          <td colSpan="3">&nbsp;</td>
          <td className="no-horizontal-border__cell white-and-black__cell">OOOOO OOOOO</td>
        </tr>
        <tr className="solid-border__cell black-and-white__cell">
          <td colSpan="5">MOCE ENTROPICZNE</td>
          <td className="no-horizontal-border__cell white-and-black__cell">OOOOO OOOOO</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">&nbsp;</td>
          <td colSpan="3">&nbsp;</td>
          <td rowSpan="2" className="black-and-white__cell">Poziom Trudności Testów</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">&nbsp;</td>
          <td colSpan="3">&nbsp;</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">&nbsp;</td>
          <td colSpan="3">&nbsp;</td>
          <td className="table-wrapping__cell" rowSpan="8">
            <TestDifficultyCheatSheet/>
          </td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">&nbsp;</td>
          <td colSpan="3">&nbsp;</td>
        </tr>
        <tr className="solid-border__cell">
          <td colSpan="2">&nbsp;</td>
          <td colSpan="3">&nbsp;</td>
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
  heroSelected: heroSelected(state)
});

const mapDispatchToProps = {
  inputChange,
  heroClassSelected,
  flexibleSecondarySkillSelected,
  mainParameterIncremented,
  mainParameterDecremented,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FirstPageBlob);
