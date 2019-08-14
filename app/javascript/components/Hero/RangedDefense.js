import React, {Component, Fragment} from 'react';

class RangedDefense extends Component {
  render() {
    return (
      <Fragment>
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
      </Fragment>
    )
  }
}

export default RangedDefense;
