import React, {Component, Fragment} from 'react';

class WealthAndGrenades extends Component {
  render() {
    return (
      <Fragment>
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
      </Fragment>
    )
  }
}

export default WealthAndGrenades;
