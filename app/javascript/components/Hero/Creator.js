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
      <div className="character-sheet__main">
        <Table>
          <tbody>
          <tr className="black-and-white__cell">
            <td>Parametry Główne (PG)</td>
            <td>Nazwa Umiejętności</td>
            <td>Baza + wszczepy + premie</td>
            <td>Umiejętność</td>
            <td>Premia do Testu</td>
            <td>Imię Weterana</td>
          </tr>
          <tr className="solid-border__cell">
            <td rowspan="3" className="white-and-black__cell">
              BUDOWA CIAŁA
              <br/>
              ____ + ____ =
              <br/>
              Podstawa Wszczepy
            </td>
            <td className="grey-and-black__cell">Broń Biała</td>
            <td className="grey-and-black__cell">{twoPlusesAndTabs}</td>
            <td className="grey-and-black__cell">&nbsp;</td>
            <td className="grey-and-black__cell">&nbsp;</td>
            <td rowspan="2">&nbsp;</td>
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
              ____ + ____ =
              <br/>
              Podstawa Wszczepy
            </td>
            <td className="white-and-black__cell">Broń Krótka</td>
            <td className="white-and-black__cell">{twoPlusesAndTabs}</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td rowSpan="2">&nbsp;</td>
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
              ____ + ____ =
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
              ____ + ____ =
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
              ____ + ____ =
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
              ____ + ____ =
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
            <td colspan="5">ZALETY</td>
            <td className="no-horizontal-border__cell white-and-black__cell">&nbsp;</td>
          </tr>
          <tr className="solid-border__cell">
            <td rowSpan="2" colspan="2">&nbsp;</td>
            <td rowSpan="2" colspan="3">&nbsp;</td>
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
            <table id="test-difficulty-cheatsheet__table">
              <tr>
                <td className="-left">Łatwy</td>
                <td className="-right">10</td>
              </tr>
              <tr className="grey-and-black__cell">
                <td className="-left">Standardowy</td>
                <td className="-right">15</td>
              </tr>
              <tr>
                <td className="-left">Trudny</td>
                <td className="-right">20</td>
              </tr>
              <tr className="grey-and-black__cell">
                <td className="-left">B. Trudny</td>
                <td className="-right">25</td>
              </tr>
              <tr>
                <td className="-left">Ekstremalny</td>
                <td className="-right">30</td>
              </tr>
              <tr className="grey-and-black__cell">
                <td className="-left">B. Trudny</td>
                <td className="-right">35</td>
              </tr>
              <tr>
                <td className="-left">Boski</td>
                <td className="-right">40</td>
              </tr>
              <tr className="grey-and-black__cell">
                <td className="-left">MG/Kampania</td>
                <td className="-right">&nbsp;</td>
              </tr>
            </table>
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

          <tr className="black-and-white__cell">
            <td colSpan="6">ATAK
              DYSTANSOWY &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;TRAFIENIE
              NA ZASIĘGU
            </td>
          </tr>

          <tr className="solid-border__cell">
            <td className="table-wrapping__cell" colSpan="6">
              <table className="nested__table">
                <tr>
                  <th className="grey-and-black__cell">Nazwa Broni</th>
                  <th className="grey-and-black__cell">Premia do Testu</th>
                  <th className="grey-and-black__cell">Celność</th>
                  <th className="grey-and-black__cell">Szybko-strzelność</th>
                  <th className="light-grey-and-black__cell">Bliskim (1-10m)</th>
                  <th className="light-grey-and-black__cell">Średnim (11-50m)</th>
                  <th className="light-grey-and-black__cell">Dalekim (51-150m)</th>
                  <th className="light-grey-and-black__cell">Ekstrem. (151-2km)</th>
                  <th className="black-and-white__cell">Obrażenia</th>
                </tr>
                <tr className="white-and-black__cell">
                  <td className="text-left-allign">1.</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr className="grey-and-black__cell">
                  <td className="text-left-allign">2.</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr className="white-and-black__cell">
                  <td className="text-left-allign">3.</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>

          <tr className="black-and-white__cell">
            <td colSpan="6">OBRONA DYSTANSOWA</td>
          </tr>

          <tr className="solid-border__cell">
            <td className="table-wrapping__cell" colSpan="6">
              <table className="nested__table">
                <tr className="grey-and-black__cell">
                  <th>Podstawa</th>
                  <th>Opanowanie</th>
                  <th>Zręczność</th>
                  <th>Atuty</th>
                  <th>Premie</th>
                  <th>Zbroja/Tarcza</th>
                  <th>SUMA</th>
                </tr>
                <tr className="white-and-black__cell">
                  <td>15</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr className="grey-and-black__cell">
                  <td>Podstawa</td>
                  <td>Opanowanie</td>
                  <td>Zręczność</td>
                  <td>Atuty</td>
                  <td>Premie</td>
                  <td>Zbroja/Tarcza</td>
                  <td>SUMA</td>
                </tr>
                <tr className="white-and-black__cell">
                  <td>15</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>

          <tr className="black-and-white__cell">
            <td colSpan="6">PANCERZE</td>
          </tr>

          <tr className="solid-border__cell">
            <td className="table-wrapping__cell" colSpan="6">
              <table className="nested__table">
                <tr className="grey-and-black__cell">
                  <th>Nazwa</th>
                  <th>W zwarciu</th>
                  <th>Balistyczny</th>
                  <th>Zasady Specjalne</th>
                </tr>
                <tr className="white-and-black__cell">
                  <td className="text-left-allign">1.</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr className="white-and-black__cell">
                  <td className="text-left-allign">2.</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr className="white-and-black__cell">
                  <td className="text-left-allign">3.</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>

          <tr className="black-and-white__cell">
            <td colSpan="6">TARCZE  i  GADŻETY</td>
          </tr>

          <tr className="solid-border__cell">
            <td className="table-wrapping__cell" colSpan="6">
              <table className="nested__table">
                <tr className="grey-and-black__cell">
                  <th>Nazwa</th>
                  <th>Parametry</th>
                  <th>Zasady Specjalne</th>
                </tr>
                <tr className="white-and-black__cell">
                  <td className="text-left-allign">1.</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr className="white-and-black__cell">
                  <td className="text-left-allign">2.</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr className="white-and-black__cell">
                  <td className="text-left-allign">3.</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>

          <tr className="black-and-white__cell">
            <td colSpan="6">WALKA W ZWARCIU</td>
          </tr>

          <tr className="solid-border__cell">
            <td className="table-wrapping__cell" colSpan="6">
              <table className="nested__table">
                <tr>
                  <th className="grey-and-black__cell">Nazwa Broni</th>
                  <th className="grey-and-black__cell">Typ</th>
                  <th className="grey-and-black__cell">Premia do Testu
                    Broń Biała/Walka Wręcz
                  </th>
                  <th className="grey-and-black__cell">Trafienie Broni</th>
                  <th className="grey-and-black__cell">TRAFIENIE</th>
                  <th className="grey-and-black__cell">OBRAŻENIA</th>
                </tr>
                <tr className="white-and-black__cell">
                  <td className="text-left-allign">1.</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr className="grey-and-black__cell">
                  <td className="text-left-allign">2.</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr className="white-and-black__cell">
                  <td className="text-left-allign">3.</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>

          <tr className="black-and-white__cell">
            <td colSpan="6">OBRONA W ZWARCIU</td>
          </tr>

          <tr className="solid-border__cell">
            <td className="table-wrapping__cell" colSpan="6">
              <table className="nested__table">
                <tr className="grey-and-black__cell">
                  <td>Podstawa</td>
                  <td>Opanowanie</td>
                  <td>Umiejętność Broń Biała</td>
                  <td>Premie</td>
                  <td>Obrona Broni</td>
                  <td>Zbroja/Tarcza</td>
                  <td>SUMA</td>
                </tr>
                <tr className="white-and-black__cell">
                  <td>15</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr className="grey-and-black__cell">
                  <td>Podstawa</td>
                  <td>Opanowanie</td>
                  <td>Umiejętność Broń Biała</td>
                  <td>Premie</td>
                  <td>Broń Improw.</td>
                  <td>Zbroja/Tarcza</td>
                  <td>SUMA</td>
                </tr>
                <tr className="white-and-black__cell">
                  <td>15</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr className="grey-and-black__cell">
                  <td>Podstawa</td>
                  <td>Opanowanie</td>
                  <td>Umiejętność Walka Wręcz</td>
                  <td>Premie</td>
                  <td>Zasady Spec.</td>
                  <td>Zbroja/Tarcza</td>
                  <td>SUMA</td>
                </tr>
                <tr className="white-and-black__cell">
                  <td>15</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>

          <tr className="solid-border__cell black-and-white__cell">
            <td colSpan="2">Majątek</td>
            <td colSpan="4">Granaty</td>
          </tr>
          <tr className="solid-border__cell">
            <td colSpan="2">&nbsp;</td>
            <td colSpan="1" className="grey-and-black__cell">Nazwa</td>
            <td colSpan="1" className="grey-and-black__cell">Obrażenia</td>
            <td colSpan="1" className="grey-and-black__cell">Promień Wyb.</td>
            <td colSpan="1" className="grey-and-black__cell">Zasady Spec.</td>
          </tr>
          <tr className="solid-border__cell">
            <td colSpan="2">&nbsp;</td>
            <td colSpan="1">&nbsp;</td>
            <td colSpan="1">&nbsp;</td>
            <td colSpan="1">&nbsp;</td>
            <td colSpan="1">&nbsp;</td>
          </tr>
          <tr className="solid-border__cell">
            <td colSpan="2">&nbsp;</td>
            <td colSpan="1">&nbsp;</td>
            <td colSpan="1">&nbsp;</td>
            <td colSpan="1">&nbsp;</td>
            <td colSpan="1">&nbsp;</td>
          </tr>
          <tr className="solid-border__cell">
            <td colSpan="2">&nbsp;</td>
            <td colSpan="1">&nbsp;</td>
            <td colSpan="1">&nbsp;</td>
            <td colSpan="1">&nbsp;</td>
            <td colSpan="1">&nbsp;</td>
          </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Creator;
