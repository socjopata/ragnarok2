import React, {Component, Fragment} from 'react';
import {Table} from 'reactstrap';
import "./hero.scss"

class Creator extends Component {
  state = {};

  componentDidMount() {
    console.log("Mounted!")
  }

  render() {
    const twoPlusesAndTabs = <span>&emsp;&emsp;&emsp;+&emsp;&emsp;&emsp;&emsp;+&emsp;&emsp;&emsp;</span>;

    return (
      <div className="character_sheet__main">
        <Table>
          <tbody>
          <tr className="black_and_white__cell">
            <td>Parametry Główne (PG)</td>
            <td>Nazwa Umiejętności</td>
            <td>Baza + wszczepy + premie</td>
            <td>Umiejętność</td>
            <td>Premia do Testu</td>
            <td>Imię Weterana</td>
          </tr>
          <tr className="solid_border__cell">
            <td rowspan="3" className="white_and_black__cell">
              BUDOWA CIAŁA
              <br/>
              ____ + ____ =
              <br/>
              Podstawa Wszczepy
            </td>
            <td className="grey_and_black__cell">Broń Biała</td>
            <td className="grey_and_black__cell">{twoPlusesAndTabs}</td>
            <td className="grey_and_black__cell">&nbsp;</td>
            <td className="grey_and_black__cell">&nbsp;</td>
            <td rowspan="2">&nbsp;</td>
          </tr>
          <tr className="solid_border__cell white_and_black__cell">
            <td>Walka Wręcz</td>
            <td>{twoPlusesAndTabs}</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr className="solid_border__cell">
            <td className="grey_and_black__cell">Wytrzymałość</td>
            <td className="grey_and_black__cell">{twoPlusesAndTabs}</td>
            <td className="grey_and_black__cell">&nbsp;</td>
            <td className="grey_and_black__cell">&nbsp;</td>
            <td className="black_and_white__cell">Klasa Postaci</td>
          </tr>
          <tr className="solid_border__cell">
            <td rowSpan="3" className="white_and_black__cell">
              ZRĘCZNOŚĆ
              <br/>
              ____ + ____ =
              <br/>
              Podstawa Wszczepy
            </td>
            <td className="white_and_black__cell">Broń Krótka</td>
            <td className="white_and_black__cell">{twoPlusesAndTabs}</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td rowSpan="2">&nbsp;</td>
          </tr>
          <tr className="solid_border__cell">
            <td className="grey_and_black__cell">Obsługa Pojazdów</td>
            <td className="grey_and_black__cell">{twoPlusesAndTabs}</td>
            <td className="grey_and_black__cell">&nbsp;</td>
            <td className="grey_and_black__cell">&nbsp;</td>
          </tr>
          <tr className="solid_border__cell white_and_black__cell">
            <td>Refleks</td>
            <td>{twoPlusesAndTabs}</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td className="black_and_white__cell">Punkty Doświadczenia</td>
          </tr>
          <tr className="solid_border__cell">
            <td rowSpan="3" className="white_and_black__cell">
              PERCEPCJA
              <br/>
              ____ + ____ =
              <br/>
              Podstawa Wszczepy
            </td>
            <td className="grey_and_black__cell">Broń Długa</td>
            <td className="grey_and_black__cell">{twoPlusesAndTabs}</td>
            <td className="grey_and_black__cell">&nbsp;</td>
            <td className="grey_and_black__cell">&nbsp;</td>
            <td rowSpan="2">&nbsp;</td>
          </tr>
          <tr className="solid_border__cell white_and_black__cell">
            <td>Gwiezdny Pilotaż</td>
            <td>{twoPlusesAndTabs}</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr className="solid_border__cell">
            <td className="grey_and_black__cell">Wyczulone Zmysły</td>
            <td className="grey_and_black__cell">{twoPlusesAndTabs}</td>
            <td className="grey_and_black__cell">&nbsp;</td>
            <td className="grey_and_black__cell">&nbsp;</td>
            <td className="black_and_white__cell">Koncentracja (OP+E)</td>
          </tr>
          <tr className="solid_border__cell">
            <td rowSpan="3" className="white_and_black__cell">
              INTELIGENCJA
              <br/>
              ____ + ____ =
              <br/>
              Podstawa Wszczepy
            </td>
            <td className="white_and_black__cell">Koneksje</td>
            <td className="white_and_black__cell">{twoPlusesAndTabs}</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td rowSpan="2">&nbsp;</td>
          </tr>
          <tr className="solid_border__cell">
            <td className="grey_and_black__cell">Technika</td>
            <td className="grey_and_black__cell">{twoPlusesAndTabs}</td>
            <td className="grey_and_black__cell">&nbsp;</td>
            <td className="grey_and_black__cell">&nbsp;</td>
          </tr>
          <tr className="solid_border__cell white_and_black__cell">
            <td>Wiedza</td>
            <td>{twoPlusesAndTabs}</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td className="black_and_white__cell">Neurostabilność (INTx5)</td>
          </tr>
          <tr className="solid_border__cell">
            <td rowSpan="3" className="white_and_black__cell">
              OPANOWANIE
              <br/>
              ____ + ____ =
              <br/>
              Podstawa Wszczepy
            </td>
            <td className="grey_and_black__cell">Hackowanie</td>
            <td className="grey_and_black__cell">{twoPlusesAndTabs}</td>
            <td className="grey_and_black__cell">&nbsp;</td>
            <td className="grey_and_black__cell">&nbsp;</td>
            <td rowSpan="2">&nbsp;</td>
          </tr>
          <tr className="solid_border__cell white_and_black__cell">
            <td>Infiltracja</td>
            <td>{twoPlusesAndTabs}</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr className="solid_border__cell">
            <td className="grey_and_black__cell">Trik i Fortel</td>
            <td className="grey_and_black__cell">{twoPlusesAndTabs}</td>
            <td className="grey_and_black__cell">&nbsp;</td>
            <td className="grey_and_black__cell">&nbsp;</td>
            <td className="black_and_white__cell">Wysportowanie (BC+ZR)</td>
          </tr>
          <tr className="solid_border__cell">
            <td rowSpan="3" className="white_and_black__cell">
              ENTROPIA
              <br/>
              ____ + ____ =
              <br/>
              Podstawa Wszczepy
            </td>
            <td className="white_and_black__cell">Charyzma</td>
            <td className="white_and_black__cell">{twoPlusesAndTabs}</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td rowSpan="2">&nbsp;</td>
          </tr>
          <tr className="solid_border__cell">
            <td className="grey_and_black__cell">Hekseri</td>
            <td className="grey_and_black__cell">{twoPlusesAndTabs}</td>
            <td className="grey_and_black__cell">&nbsp;</td>
            <td className="grey_and_black__cell">&nbsp;</td>
          </tr>
          <tr className="solid_border__cell white_and_black__cell">
            <td>Siła Woli</td>
            <td>{twoPlusesAndTabs}</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td className="black_and_white__cell">Ruch (5+Wysportowanie)</td>
          </tr>
          <tr className="black_and_white__cell">
            <td colspan="5">ZALETY</td>
            <td className="no_horizontal_border__cell white_and_black__cell">&nbsp;</td>
          </tr>
          <tr className="solid_border__cell">
            <td rowSpan="2" colspan="2">&nbsp;</td>
            <td rowSpan="2" colspan="3">&nbsp;</td>
            <td className="no_horizontal_border__cell white_and_black__cell">&nbsp;</td>
            </tr>
          <tr className="solid_border__cell">
            <td className="black_and_white__cell">Witalność (10+5xBC)</td>
          </tr>
          <tr className="solid_border__cell black_and_white__cell">
            <td colSpan="5">ATUTY</td>
            <td className="no_horizontal_border__cell white_and_black__cell">&nbsp;</td>
          </tr>
          <tr className="solid_border__cell">
            <td colSpan="2">&nbsp;</td>
            <td colSpan="3">&nbsp;</td>
            <td className="no_horizontal_border__cell white_and_black__cell">&nbsp;</td>
          </tr>
          <tr className="solid_border__cell">
            <td colSpan="2">&nbsp;</td>
            <td colSpan="3">&nbsp;</td>
            <td className="black_and_white__cell">Moc (INTx5)</td>
          </tr>
          <tr className="solid_border__cell">
            <td colSpan="2">&nbsp;</td>
            <td colSpan="3">&nbsp;</td>
            <td className="no_horizontal_border__cell white_and_black__cell">&nbsp;</td>
          </tr>
          <tr className="solid_border__cell">
            <td colSpan="2">&nbsp;</td>
            <td colSpan="3">&nbsp;</td>
            <td className="no_horizontal_border__cell white_and_black__cell">&nbsp;</td>
          </tr>
          <tr className="solid_border__cell">
            <td colSpan="2">&nbsp;</td>
            <td colSpan="3">&nbsp;</td>
            <td className="black_and_white__cell">Prezencja (BC+E)</td>
          </tr>
          <tr className="solid_border__cell">
            <td colSpan="2">&nbsp;</td>
            <td colSpan="3">&nbsp;</td>
            <td className="no_horizontal_border__cell white_and_black__cell">&nbsp;</td>
          </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Creator;
