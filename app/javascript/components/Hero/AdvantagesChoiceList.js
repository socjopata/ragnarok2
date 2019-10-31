import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {get, map, filter, toString} from "lodash";

import {
  characterId,
  chosenAdvantages,
  experiencePoints,
} from "../../store/heroes";

class AdvantagesChoiceList extends Component {
  currentAdvantagesList = () => {
    const {advantagesList, selectedAdvantageType} = this.props;
    if (advantagesList) {
      return (filter(advantagesList, ['kind', selectedAdvantageType]));
    }
  };

  onChange = (event) => {
    const targetId = event.currentTarget.id;
    this.props.form.setFieldValue(this.props.field.name, targetId)
  };

  render() {
    return (
      <ul>
        {map(this.currentAdvantagesList(), (props) => <li key={props.id}>
          <input
            name={props.name}
            id={props.id}
            type="radio"
            value={props.id}
            checked={toString(props.id) === toString(this.props.field.value)}
            onChange={this.onChange}
            className="radio-button"
          />
          <label htmlFor={props.id}>{props.name}</label></li>)}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  characterId: characterId(state),
  experiencePoints: experiencePoints(state),
  chosenAdvantages: chosenAdvantages(state),
  advantagesList: get(state, "advantages.byId"),
});

export default connect(
  mapStateToProps
)(AdvantagesChoiceList);
