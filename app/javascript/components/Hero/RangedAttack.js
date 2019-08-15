import React, {Component, Fragment} from 'react';

class RangedAttack extends Component {
  render() {
    return (
      <Fragment>
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
              <tbody>
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
              </tbody>
            </table>
          </td>
        </tr>
      </Fragment>
    )
  }
}

export default RangedAttack;
