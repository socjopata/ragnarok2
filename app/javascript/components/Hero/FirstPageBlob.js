import React, {Component, Fragment} from 'react';
import {get, isEmpty, map} from 'lodash';
import {Input} from 'reactstrap';
import {connect} from "react-redux";
import TestDifficultyCheatSheet from "./TestDifficultyCheatSheet";
//actions
import {inputChange, heroClassSelected} from '../../store/heroes';
//selectors
import {
  characterName, characterId, mainParameterBodyBuildingBase,
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
} from '../../store/heroes';

class FirstPageBlob extends Component {
  handleChange = ({target: {value, name: inputName}}) => {
    this.props.inputChange(value, inputName);
  };

  handleHeroClassChange = ({target: {value}}) => {
    this.props.heroClassSelected(value);
  };

  renderHeroesForSelect() {
    const {heroesList} = this.props;
    return (
      !isEmpty(heroesList) && [<option disabled value key={0} value={0}> -- Wybierz klasę postaci
        -- </option>].concat(map(heroesList, ({id, name}) => <option key={id} value={id}>{name}</option>))
    )
  }

  render() {
    const twoPlusesAndTabs = <span>&emsp;&emsp;&emsp;+&emsp;&emsp;&emsp;&emsp;+&emsp;&emsp;&emsp;</span>;

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
          <td className="grey-and-black__cell">Broń Biała</td>
          <td className="grey-and-black__cell">{twoPlusesAndTabs}</td>
          <td className="grey-and-black__cell">&nbsp;</td>
          <td className="grey-and-black__cell">&nbsp;</td>
          <td rowSpan="2">
            <Input type="text" name="name" id="name" placeholder="Jak się nazywasz?" onChange={this.handleChange}
                   defaultValue={this.props.name}/>
          </td>
        </tr>
        <tr className="solid-border__cell white-and-black__cell">
          <td>Walka Wręcz</td>
          <td>{twoPlusesAndTabs}</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr className="solid-border__cell">
          <td className="grey-and-black__cell">Wytrzymałość</td>
          <td className="grey-and-black__cell">{twoPlusesAndTabs}</td>
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
          <td className="white-and-black__cell">Broń Krótka</td>
          <td className="white-and-black__cell">{twoPlusesAndTabs}</td>
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
          <td className="grey-and-black__cell">Obsługa Pojazdów</td>
          <td className="grey-and-black__cell">{twoPlusesAndTabs}</td>
          <td className="grey-and-black__cell">&nbsp;</td>
          <td className="grey-and-black__cell">&nbsp;</td>
        </tr>
        <tr className="solid-border__cell white-and-black__cell">
          <td>Refleks</td>
          <td>{twoPlusesAndTabs}</td>
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
          <td className="grey-and-black__cell">Broń Długa</td>
          <td className="grey-and-black__cell">{twoPlusesAndTabs}</td>
          <td className="grey-and-black__cell">&nbsp;</td>
          <td className="grey-and-black__cell">&nbsp;</td>
          <td rowSpan="2">&nbsp;</td>
        </tr>
        <tr className="solid-border__cell white-and-black__cell">
          <td>Gwiezdny Pilotaż</td>
          <td>{twoPlusesAndTabs}</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr className="solid-border__cell">
          <td className="grey-and-black__cell">Wyczulone Zmysły</td>
          <td className="grey-and-black__cell">{twoPlusesAndTabs}</td>
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
          <td className="white-and-black__cell">Koneksje</td>
          <td className="white-and-black__cell">{twoPlusesAndTabs}</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td rowSpan="2">&nbsp;</td>
        </tr>
        <tr className="solid-border__cell">
          <td className="grey-and-black__cell">Technika</td>
          <td className="grey-and-black__cell">{twoPlusesAndTabs}</td>
          <td className="grey-and-black__cell">&nbsp;</td>
          <td className="grey-and-black__cell">&nbsp;</td>
        </tr>
        <tr className="solid-border__cell white-and-black__cell">
          <td>Wiedza</td>
          <td>{twoPlusesAndTabs}</td>
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
          <td className="grey-and-black__cell">Hackowanie</td>
          <td className="grey-and-black__cell">{twoPlusesAndTabs}</td>
          <td className="grey-and-black__cell">&nbsp;</td>
          <td className="grey-and-black__cell">&nbsp;</td>
          <td rowSpan="2">&nbsp;</td>
        </tr>
        <tr className="solid-border__cell white-and-black__cell">
          <td>Infiltracja</td>
          <td>{twoPlusesAndTabs}</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr className="solid-border__cell">
          <td className="grey-and-black__cell">Trik i Fortel</td>
          <td className="grey-and-black__cell">{twoPlusesAndTabs}</td>
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
          <td className="white-and-black__cell">Charyzma</td>
          <td className="white-and-black__cell">{twoPlusesAndTabs}</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td rowSpan="2">&nbsp;</td>
        </tr>
        <tr className="solid-border__cell">
          <td className="grey-and-black__cell">Hekseri</td>
          <td className="grey-and-black__cell">{twoPlusesAndTabs}</td>
          <td className="grey-and-black__cell">&nbsp;</td>
          <td className="grey-and-black__cell">&nbsp;</td>
        </tr>
        <tr className="solid-border__cell white-and-black__cell">
          <td>Siła Woli</td>
          <td>{twoPlusesAndTabs}</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td className="black-and-white__cell">Ruch (5+Wysportowanie)</td>
        </tr>
        <tr className="black-and-white__cell">
          <td colSpan="5">ZALETY</td>
          <td className="no-horizontal-border__cell white-and-black__cell">&nbsp;</td>
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
          <td className="no-horizontal-border__cell white-and-black__cell">&nbsp;</td>
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
          <td className="no-horizontal-border__cell white-and-black__cell">&nbsp;</td>
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
          <td className="no-horizontal-border__cell white-and-black__cell">&nbsp;</td>
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
  heroesList: get(state, "heroes.byId")
});

const mapDispatchToProps = {
  inputChange,
  heroClassSelected
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FirstPageBlob);
