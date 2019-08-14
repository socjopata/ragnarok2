import React, {Component, Fragment} from 'react';

class CloseCombatDefense extends Component {
  render() {
    return (
      <Fragment>
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
      </Fragment>
    )
  }
}

export default CloseCombatDefense;
