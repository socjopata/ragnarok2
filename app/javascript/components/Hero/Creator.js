import React, {Component, Fragment} from 'react';
import {Table} from 'reactstrap';
import "./hero.scss"

class Creator extends Component {
  state = {};

  componentDidMount() {
    console.log("Mounted!")
  }

  render() {
    return (
      <div className="character_sheet__main">
        <Table>
          <tbody>
          <tr className="black_and_white__tr">
            <td>Parametry Główne (PG)</td>
            <td>Nazwa Umiejętności</td>
            <td>Baza + wszczepy + premie</td>
            <td>Umiejętność</td>
            <td>Premia do Testu</td>
            <td>Imię Weterana</td>
          </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Creator;
