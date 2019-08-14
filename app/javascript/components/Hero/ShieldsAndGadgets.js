import React, {Component, Fragment} from 'react';

class ShieldsAndGadgets extends Component {
  render() {
    return (
      <Fragment>
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
      </Fragment>
    )
  }
}

export default ShieldsAndGadgets;
