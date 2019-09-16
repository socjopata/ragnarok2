import React, {Component, Fragment} from 'react';
import {get, isEmpty, map} from 'lodash';
import {Input, Button} from 'reactstrap';
import {connect} from "react-redux";
import TestDifficultyCheatSheet from "./TestDifficultyCheatSheet";
//actions
import {inputChange, heroClassSelected, flexibleSecondarySkillSelected} from '../../store/heroes';
//selectors
import {
  heroSelected, characterName, characterId, mainParameterBodyBuildingBase,
  mainParameterBodyBuildingFromImplants,
  mainParameterBodyBuildingTotal,
  mainParameterDexterityBase,
  mainParameterDexterityFromImplants,
  mainParameterDexterityTotal,
  mainParameterPerceptionBase,
  mainParameterPerceptionFromImplants,
  mainParameterPerceptionTotal,
  mainParameterInteligenceBase,
  mainParameterInteligenceFromImplants,
  mainParameterInteligenceTotal,
  mainParameterSelfControlBase,
  mainParameterSelfControlFromImplants,
  mainParameterSelfControlTotal,
  mainParameterEntropyBase,
  mainParameterEntropyFromImplants,
  mainParameterEntropyTotal,
  experiencePoints,
  focus,
  neurostability,
  sportiness,
  movementSpeed,
  hitPoints,
  power,
  apparition,
  secondaryParameterFencingBase,
  secondaryParameterFencingFromImplants,
  secondaryParameterFencingBonus,
  secondaryParameterFencingTotal,
  secondaryParameterMartialArtsBase,
  secondaryParameterMartialArtsFromImplants,
  secondaryParameterMartialArtsBonus,
  secondaryParameterMartialArtsTotal,
  secondaryParameterEnduranceBase,
  secondaryParameterEnduranceFromImplants,
  secondaryParameterEnduranceBonus,
  secondaryParameterEnduranceTotal,
  secondaryParameterPistolsBase,
  secondaryParameterPistolsFromImplants,
  secondaryParameterPistolsBonus,
  secondaryParameterPistolsTotal,
  secondaryParameterVehicleHandlingBase,
  secondaryParameterVehicleHandlingFromImplants,
  secondaryParameterVehicleHandlingBonus,
  secondaryParameterVehicleHandlingTotal,
  secondaryParameterReflexBase,
  secondaryParameterReflexFromImplants,
  secondaryParameterReflexBonus,
  secondaryParameterReflexTotal,
  secondaryParameterRiflesBase,
  secondaryParameterRiflesFromImplants,
  secondaryParameterRiflesBonus,
  secondaryParameterRiflesTotal,
  secondaryParameterSpaceshipsHandlingBase,
  secondaryParameterSpaceshipsHandlingFromImplants,
  secondaryParameterSpaceshipsHandlingBonus,
  secondaryParameterSpaceshipsHandlingTotal,
  secondaryParameterSensesBase,
  secondaryParameterSensesFromImplants,
  secondaryParameterSensesBonus,
  secondaryParameterSensesTotal,
  secondaryParameterConnectionsBase,
  secondaryParameterConnectionsFromImplants,
  secondaryParameterConnectionsBonus,
  secondaryParameterConnectionsTotal,
  secondaryParameterTechnologyBase,
  secondaryParameterTechnologyFromImplants,
  secondaryParameterTechnologyBonus,
  secondaryParameterTechnologyTotal,
  secondaryParameterKnowledgeBase,
  secondaryParameterKnowledgeFromImplants,
  secondaryParameterKnowledgeBonus,
  secondaryParameterKnowledgeTotal,
  secondaryParameterHackingBase,
  secondaryParameterHackingFromImplants,
  secondaryParameterHackingBonus,
  secondaryParameterHackingTotal,
  secondaryParameterInfiltrationBase,
  secondaryParameterInfiltrationFromImplants,
  secondaryParameterInfiltrationBonus,
  secondaryParameterInfiltrationTotal,
  secondaryParameterTrickAndSubterfugeBase,
  secondaryParameterTrickAndSubterfugeFromImplants,
  secondaryParameterTrickAndSubterfugeBonus,
  secondaryParameterTrickAndSubterfugeTotal,
  secondaryParameterCharismaBase,
  secondaryParameterCharismaFromImplants,
  secondaryParameterCharismaBonus,
  secondaryParameterCharismaTotal,
  secondaryParameterHexeriBase,
  secondaryParameterHexeriFromImplants,
  secondaryParameterHexeriBonus,
  secondaryParameterHexeriTotal,
  secondaryParameterWillpowerBase,
  secondaryParameterWillpowerFromImplants,
  secondaryParameterWillpowerBonus,
  secondaryParameterWillpowerTotal,
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

  renderHeroesForSelect() {
    const {heroesList} = this.props;
    return (
      !isEmpty(heroesList) && [<option disabled value key={0} value={0}> -- Wybierz klasę postaci
        -- </option>].concat(map(heroesList, ({id, name}) => <option key={id} value={id}>{name}</option>))
    )
  }

  renderFlexibleSecondarySkillChoice(skillName) {
    const heroSelected = this.props.heroSelected;
    if (heroSelected) {
      const flexibleParameters = heroSelected.parameters.filter(parameter => parameter.name.includes("_or_") || parameter.name.includes("any_") && parameter.type === "SecondaryParameter");
      return (map(flexibleParameters, ({id, name: flexibleParameterName, value}) => {
        if (flexibleParameterName.includes(skillName)) {
          return (<Button key={id + name} color="primary" className="tiny__button" onClick={() => this.handleFlexibleSecondarySkillChoice(flexibleParameterName, skillName, value)}>{value}</Button>)
        } else if (flexibleParameterName.includes("any_")) {
          const base = heroSelected.parameters.filter(parameter => parameter.name === skillName && parameter.type === "SecondaryParameter")[0].value; //FIXME this is a duplication, when we consider a method defined in selectors.js
          const secondaryParameterAtZero = base === 0;
          if (secondaryParameterAtZero) {
            return (<Button key={id + name} color="primary" className="tiny__button" onClick={() => this.handleFlexibleSecondarySkillChoice(flexibleParameterName, skillName, value)}>{value}</Button>)
          }
        }
      }))
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
            BUDOWA CIAŁA
            <br/>
            {this.props.mainParameterBodyBuildingBase} + {this.props.mainParameterBodyBuildingFromImplants} = {this.props.mainParameterBodyBuildingTotal}
            <br/>
            Podstawa Wszczepy
          </td>
          <td className="grey-and-black__cell">{this.renderFlexibleSecondarySkillChoice('fencing')}Broń Biała</td>
          <td className="grey-and-black__cell"><span>
            {this.props.secondaryParameterFencingBase}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterFencingFromImplants}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterFencingBonus}
          </span></td>
          <td className="grey-and-black__cell">&nbsp;</td>
          <td className="grey-and-black__cell">&nbsp;</td>
          <td rowSpan="2">
            <Input type="text" name="name" id="name" placeholder="Jak się nazywasz?" onChange={this.handleChange}
                   defaultValue={this.props.name}/>
          </td>
        </tr>
        <tr className="solid-border__cell white-and-black__cell">
          <td>{this.renderFlexibleSecondarySkillChoice('martial_arts')}Walka Wręcz</td>
          <td><span>
            {this.props.secondaryParameterMartialArtsBase}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterMartialArtsFromImplants}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterMartialArtsBonus}
          </span></td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr className="solid-border__cell">
          <td className="grey-and-black__cell">{this.renderFlexibleSecondarySkillChoice('endurance')}Wytrzymałość</td>
          <td className="grey-and-black__cell"><span>
            {this.props.secondaryParameterEnduranceBase}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterEnduranceFromImplants}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterEnduranceBonus}
          </span></td>
          <td className="grey-and-black__cell">&nbsp;</td>
          <td className="grey-and-black__cell">&nbsp;</td>
          <td className="black-and-white__cell">Klasa Postaci</td>
        </tr>
        <tr className="solid-border__cell">
          <td rowSpan="3" className="white-and-black__cell">
            ZRĘCZNOŚĆ
            <br/>
            {this.props.mainParameterDexterityBase} + {this.props.mainParameterDexterityFromImplants} = {this.props.mainParameterDexterityTotal}
            <br/>
            Podstawa Wszczepy
          </td>
          <td className="white-and-black__cell">{this.renderFlexibleSecondarySkillChoice('pistols')}Broń Krótka</td>
          <td className="white-and-black__cell"><span>
            {this.props.secondaryParameterPistolsBase}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterPistolsFromImplants}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterPistolsBonus}
          </span></td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
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
            {this.props.secondaryParameterVehicleHandlingBase}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterVehicleHandlingFromImplants}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterVehicleHandlingBonus}
          </span></td>
          <td className="grey-and-black__cell">&nbsp;</td>
          <td className="grey-and-black__cell">&nbsp;</td>
        </tr>
        <tr className="solid-border__cell white-and-black__cell">
          <td>{this.renderFlexibleSecondarySkillChoice('reflex')}Refleks</td>
          <td><span>
            {this.props.secondaryParameterReflexBase}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterReflexFromImplants}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterReflexBonus}
          </span></td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td className="black-and-white__cell">Punkty Doświadczenia</td>
        </tr>
        <tr className="solid-border__cell">
          <td rowSpan="3" className="white-and-black__cell">
            PERCEPCJA
            <br/>
            {this.props.mainParameterPerceptionBase} + {this.props.mainParameterPerceptionFromImplants} = {this.props.mainParameterPerceptionTotal}
            <br/>
            Podstawa Wszczepy
          </td>
          <td className="grey-and-black__cell">{this.renderFlexibleSecondarySkillChoice('rifles')}Broń Długa</td>
          <td className="grey-and-black__cell"><span>
            {this.props.secondaryParameterRiflesBase}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterRiflesFromImplants}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterRiflesBonus}
          </span></td>
          <td className="grey-and-black__cell">&nbsp;</td>
          <td className="grey-and-black__cell">&nbsp;</td>
          <td className="centered__cell" rowSpan="2">{this.props.experiencePoints}</td>
        </tr>
        <tr className="solid-border__cell white-and-black__cell">
          <td>{this.renderFlexibleSecondarySkillChoice('spaceships_handling')}Gwiezdny Pilotaż</td>
          <td><span>
            {this.props.secondaryParameterSpaceshipsHandlingBase}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterSpaceshipsHandlingFromImplants}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterSpaceshipsHandlingBonus}
          </span></td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr className="solid-border__cell">
          <td className="grey-and-black__cell">{this.renderFlexibleSecondarySkillChoice('senses')}Wyczulone Zmysły</td>
          <td className="grey-and-black__cell"><span>
            {this.props.secondaryParameterSensesBase}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterSensesFromImplants}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterSensesBonus}
          </span></td>
          <td className="grey-and-black__cell">&nbsp;</td>
          <td className="grey-and-black__cell">&nbsp;</td>
          <td className="black-and-white__cell">Koncentracja (OP+E)</td>
        </tr>
        <tr className="solid-border__cell">
          <td rowSpan="3" className="white-and-black__cell">
            INTELIGENCJA
            <br/>
            {this.props.mainParameterInteligenceBase} + {this.props.mainParameterInteligenceFromImplants} = {this.props.mainParameterInteligenceTotal}
            <br/>
            Podstawa Wszczepy
          </td>
          <td className="white-and-black__cell">{this.renderFlexibleSecondarySkillChoice('connections')}Koneksje</td>
          <td className="white-and-black__cell"><span>
            {this.props.secondaryParameterConnectionsBase}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterConnectionsFromImplants}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterConnectionsBonus}
          </span></td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td className="centered__cell" rowSpan="2">{this.props.focus}</td>
        </tr>
        <tr className="solid-border__cell">
          <td className="grey-and-black__cell">{this.renderFlexibleSecondarySkillChoice('technology')}Technika</td>
          <td className="grey-and-black__cell"><span>
            {this.props.secondaryParameterTechnologyBase}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterTechnologyFromImplants}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterTechnologyBonus}
          </span></td>
          <td className="grey-and-black__cell">&nbsp;</td>
          <td className="grey-and-black__cell">&nbsp;</td>
        </tr>
        <tr className="solid-border__cell white-and-black__cell">
          <td>{this.renderFlexibleSecondarySkillChoice('knowledge')}Wiedza</td>
          <td><span>
            {this.props.secondaryParameterKnowledgeBase}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterKnowledgeFromImplants}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterKnowledgeBonus}
          </span></td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td className="black-and-white__cell">Neurostabilność (INTx5)</td>
        </tr>
        <tr className="solid-border__cell">
          <td rowSpan="3" className="white-and-black__cell">
            OPANOWANIE
            <br/>
            {this.props.mainParameterSelfControlBase} + {this.props.mainParameterSelfControlFromImplants} = {this.props.mainParameterSelfControlTotal}
            <br/>
            Podstawa Wszczepy
          </td>
          <td className="grey-and-black__cell">{this.renderFlexibleSecondarySkillChoice('hacking')}Hackowanie</td>
          <td className="grey-and-black__cell"><span>
            {this.props.secondaryParameterHackingBase}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterHackingFromImplants}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterHackingBonus}
          </span></td>
          <td className="grey-and-black__cell">&nbsp;</td>
          <td className="grey-and-black__cell">&nbsp;</td>
          <td className="centered__cell" rowSpan="2">{this.props.neurostability}</td>
        </tr>
        <tr className="solid-border__cell white-and-black__cell">
          <td>{this.renderFlexibleSecondarySkillChoice('infiltration')}Infiltracja</td>
          <td><span>
            {this.props.secondaryParameterInfiltrationBase}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterInfiltrationFromImplants}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterInfiltrationBonus}
          </span></td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr className="solid-border__cell">
          <td className="grey-and-black__cell">{this.renderFlexibleSecondarySkillChoice('trick_and_subterfuge')}Trik i Fortel</td>
          <td className="grey-and-black__cell"><span>
            {this.props.secondaryParameterTrickAndSubterfugeBase}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterTrickAndSubterfugeFromImplants}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterTrickAndSubterfugeBonus}
          </span></td>
          <td className="grey-and-black__cell">&nbsp;</td>
          <td className="grey-and-black__cell">&nbsp;</td>
          <td className="black-and-white__cell">Wysportowanie (BC+ZR)</td>
        </tr>
        <tr className="solid-border__cell">
          <td rowSpan="3" className="white-and-black__cell">
            ENTROPIA
            <br/>
            {this.props.mainParameterEntropyBase} + {this.props.mainParameterEntropyFromImplants} = {this.props.mainParameterEntropyTotal}
            <br/>
            Podstawa Wszczepy
          </td>
          <td className="white-and-black__cell">{this.renderFlexibleSecondarySkillChoice('charisma')}Charyzma</td>
          <td className="white-and-black__cell"><span>
            {this.props.secondaryParameterCharismaBase}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterCharismaFromImplants}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterCharismaBonus}
          </span></td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td className="centered__cell" rowSpan="2">{this.props.sportiness}</td>
        </tr>
        <tr className="solid-border__cell">
          <td className="grey-and-black__cell">{this.renderFlexibleSecondarySkillChoice('hexeri')}Hekseri</td>
          <td className="grey-and-black__cell"><span>
            {this.props.secondaryParameterHexeriBase}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterHexeriFromImplants}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterHexeriBonus}
          </span></td>
          <td className="grey-and-black__cell">&nbsp;</td>
          <td className="grey-and-black__cell">&nbsp;</td>
        </tr>
        <tr className="solid-border__cell white-and-black__cell">
          <td>{this.renderFlexibleSecondarySkillChoice('willpower')}Siła Woli</td>
          <td><span>
            {this.props.secondaryParameterWillpowerBase}&emsp;&emsp;+&ensp;
            &emsp;{this.props.secondaryParameterWillpowerFromImplants}&emsp;&emsp;+
            &emsp;&emsp;{this.props.secondaryParameterWillpowerBonus}
          </span></td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
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
  mainParameterBodyBuildingBase: mainParameterBodyBuildingBase(state),
  mainParameterBodyBuildingFromImplants: mainParameterBodyBuildingFromImplants(state),
  mainParameterBodyBuildingTotal: mainParameterBodyBuildingTotal(state),
  mainParameterDexterityBase: mainParameterDexterityBase(state),
  mainParameterDexterityFromImplants: mainParameterDexterityFromImplants(state),
  mainParameterDexterityTotal: mainParameterDexterityTotal(state),
  mainParameterPerceptionBase: mainParameterPerceptionBase(state),
  mainParameterPerceptionFromImplants: mainParameterPerceptionFromImplants(state),
  mainParameterPerceptionTotal: mainParameterPerceptionTotal(state),
  mainParameterInteligenceBase: mainParameterInteligenceBase(state),
  mainParameterInteligenceFromImplants: mainParameterInteligenceFromImplants(state),
  mainParameterInteligenceTotal: mainParameterInteligenceTotal(state),
  mainParameterSelfControlBase: mainParameterSelfControlBase(state),
  mainParameterSelfControlFromImplants: mainParameterSelfControlFromImplants(state),
  mainParameterSelfControlTotal: mainParameterSelfControlTotal(state),
  mainParameterEntropyBase: mainParameterEntropyBase(state),
  mainParameterEntropyFromImplants: mainParameterEntropyFromImplants(state),
  mainParameterEntropyTotal: mainParameterEntropyTotal(state),
  experiencePoints: experiencePoints(state),
  focus: focus(state),
  neurostability: neurostability(state),
  sportiness: sportiness(state),
  movementSpeed: movementSpeed(state),
  hitPoints: hitPoints(state),
  power: power(state),
  apparition: apparition(state),
  secondaryParameterFencingBase: secondaryParameterFencingBase(state),
  secondaryParameterFencingFromImplants: secondaryParameterFencingFromImplants(state),
  secondaryParameterFencingBonus: secondaryParameterFencingBonus(state),
  secondaryParameterFencingTotal: secondaryParameterFencingTotal(state),
  secondaryParameterMartialArtsBase: secondaryParameterMartialArtsBase(state),
  secondaryParameterMartialArtsFromImplants: secondaryParameterMartialArtsFromImplants(state),
  secondaryParameterMartialArtsBonus: secondaryParameterMartialArtsBonus(state),
  secondaryParameterMartialArtsTotal: secondaryParameterMartialArtsTotal(state),
  secondaryParameterEnduranceBase: secondaryParameterEnduranceBase(state),
  secondaryParameterEnduranceFromImplants: secondaryParameterEnduranceFromImplants(state),
  secondaryParameterEnduranceBonus: secondaryParameterEnduranceBonus(state),
  secondaryParameterEnduranceTotal: secondaryParameterEnduranceTotal(state),
  secondaryParameterPistolsBase: secondaryParameterPistolsBase(state),
  secondaryParameterPistolsFromImplants: secondaryParameterPistolsFromImplants(state),
  secondaryParameterPistolsBonus: secondaryParameterPistolsBonus(state),
  secondaryParameterPistolsTotal: secondaryParameterPistolsTotal(state),
  secondaryParameterVehicleHandlingBase: secondaryParameterVehicleHandlingBase(state),
  secondaryParameterVehicleHandlingFromImplants: secondaryParameterVehicleHandlingFromImplants(state),
  secondaryParameterVehicleHandlingBonus: secondaryParameterVehicleHandlingBonus(state),
  secondaryParameterVehicleHandlingTotal: secondaryParameterVehicleHandlingTotal(state),
  secondaryParameterReflexBase: secondaryParameterReflexBase(state),
  secondaryParameterReflexFromImplants: secondaryParameterReflexFromImplants(state),
  secondaryParameterReflexBonus: secondaryParameterReflexBonus(state),
  secondaryParameterReflexTotal: secondaryParameterReflexTotal(state),
  secondaryParameterRiflesBase: secondaryParameterRiflesBase(state),
  secondaryParameterRiflesFromImplants: secondaryParameterRiflesFromImplants(state),
  secondaryParameterRiflesBonus: secondaryParameterRiflesBonus(state),
  secondaryParameterRiflesTotal: secondaryParameterRiflesTotal(state),
  secondaryParameterSpaceshipsHandlingBase: secondaryParameterSpaceshipsHandlingBase(state),
  secondaryParameterSpaceshipsHandlingFromImplants: secondaryParameterSpaceshipsHandlingFromImplants(state),
  secondaryParameterSpaceshipsHandlingBonus: secondaryParameterSpaceshipsHandlingBonus(state),
  secondaryParameterSpaceshipsHandlingTotal: secondaryParameterSpaceshipsHandlingTotal(state),
  secondaryParameterSensesBase: secondaryParameterSensesBase(state),
  secondaryParameterSensesFromImplants: secondaryParameterSensesFromImplants(state),
  secondaryParameterSensesBonus: secondaryParameterSensesBonus(state),
  secondaryParameterSensesTotal: secondaryParameterSensesTotal(state),
  secondaryParameterConnectionsBase: secondaryParameterConnectionsBase(state),
  secondaryParameterConnectionsFromImplants: secondaryParameterConnectionsFromImplants(state),
  secondaryParameterConnectionsBonus: secondaryParameterConnectionsBonus(state),
  secondaryParameterConnectionsTotal: secondaryParameterConnectionsTotal(state),
  secondaryParameterTechnologyBase: secondaryParameterTechnologyBase(state),
  secondaryParameterTechnologyFromImplants: secondaryParameterTechnologyFromImplants(state),
  secondaryParameterTechnologyBonus: secondaryParameterTechnologyBonus(state),
  secondaryParameterTechnologyTotal: secondaryParameterTechnologyTotal(state),
  secondaryParameterKnowledgeBase: secondaryParameterKnowledgeBase(state),
  secondaryParameterKnowledgeFromImplants: secondaryParameterKnowledgeFromImplants(state),
  secondaryParameterKnowledgeBonus: secondaryParameterKnowledgeBonus(state),
  secondaryParameterKnowledgeTotal: secondaryParameterKnowledgeTotal(state),
  secondaryParameterHackingBase: secondaryParameterHackingBase(state),
  secondaryParameterHackingFromImplants: secondaryParameterHackingFromImplants(state),
  secondaryParameterHackingBonus: secondaryParameterHackingBonus(state),
  secondaryParameterHackingTotal: secondaryParameterHackingTotal(state),
  secondaryParameterInfiltrationBase: secondaryParameterInfiltrationBase(state),
  secondaryParameterInfiltrationFromImplants: secondaryParameterInfiltrationFromImplants(state),
  secondaryParameterInfiltrationBonus: secondaryParameterInfiltrationBonus(state),
  secondaryParameterInfiltrationTotal: secondaryParameterInfiltrationTotal(state),
  secondaryParameterTrickAndSubterfugeBase: secondaryParameterTrickAndSubterfugeBase(state),
  secondaryParameterTrickAndSubterfugeFromImplants: secondaryParameterTrickAndSubterfugeFromImplants(state),
  secondaryParameterTrickAndSubterfugeBonus: secondaryParameterTrickAndSubterfugeBonus(state),
  secondaryParameterTrickAndSubterfugeTotal: secondaryParameterTrickAndSubterfugeTotal(state),
  secondaryParameterCharismaBase: secondaryParameterCharismaBase(state),
  secondaryParameterCharismaFromImplants: secondaryParameterCharismaFromImplants(state),
  secondaryParameterCharismaBonus: secondaryParameterCharismaBonus(state),
  secondaryParameterCharismaTotal: secondaryParameterCharismaTotal(state),
  secondaryParameterHexeriBase: secondaryParameterHexeriBase(state),
  secondaryParameterHexeriFromImplants: secondaryParameterHexeriFromImplants(state),
  secondaryParameterHexeriBonus: secondaryParameterHexeriBonus(state),
  secondaryParameterHexeriTotal: secondaryParameterHexeriTotal(state),
  secondaryParameterWillpowerBase: secondaryParameterWillpowerBase(state),
  secondaryParameterWillpowerFromImplants: secondaryParameterWillpowerFromImplants(state),
  secondaryParameterWillpowerBonus: secondaryParameterWillpowerBonus(state),
  secondaryParameterWillpowerTotal: secondaryParameterWillpowerTotal(state),
  heroesList: get(state, "heroes.byId"),
  heroSelected: heroSelected(state)
});

const mapDispatchToProps = {
  inputChange,
  heroClassSelected,
  flexibleSecondarySkillSelected
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FirstPageBlob);
