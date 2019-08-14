import React, {Component, Fragment} from 'react';

class TestDifficultyCheatSheet extends Component {
  render() {
    return (
      <Fragment>
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
      </Fragment>
    )
  }
}

export default TestDifficultyCheatSheet;
