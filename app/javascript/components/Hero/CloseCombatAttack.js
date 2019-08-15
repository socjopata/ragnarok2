import React, {Component, Fragment} from 'react';

class CloseCombatAttack extends Component {
  render() {
    return (
      <Fragment>
        <tr className="black-and-white__cell">
          <td colSpan="6">WALKA W ZWARCIU</td>
        </tr>
        <tr className="solid-border__cell">
          <td className="table-wrapping__cell" colSpan="6">
            <table className="nested__table">
              <tbody>
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
              </tbody>
            </table>
          </td>
        </tr>
      </Fragment>
    )
  }
}

export default CloseCombatAttack;
