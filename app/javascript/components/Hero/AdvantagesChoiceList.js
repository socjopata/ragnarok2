import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {get, map, filter, toString, compact, includes} from "lodash";

import {
  characterId,
  chosenAdvantages,
  chosenAdvantagesIds,
  experiencePoints,
} from "../../store/heroes";
import {UncontrolledTooltip} from "reactstrap";

class AdvantagesChoiceList extends Component {
  currentAdvantagesList = () => {
    const {advantagesList, selectedAdvantageType, chosenAdvantagesIds} = this.props;
    if (advantagesList) {
      const advantagesOfSelectedType = filter(advantagesList, ['kind', selectedAdvantageType]);
      const currentAdvantages = advantagesOfSelectedType.filter(advantage => !includes(compact(chosenAdvantagesIds), advantage.id));
      return (currentAdvantages);
    }
  };

  onChange = (event) => {
    const targetId = event.currentTarget.id;
    this.props.form.setFieldValue(this.props.field.name, targetId)
  };

//TODO implement all cases
  advantageChoiceDisabled = (advantage) => {
    const booleans = map(advantage.requirements, requirement => {
      switch (requirement.check_applies_to) {
        case "MainParameter":
          return (false);
        case "Advantage":
          return (false);
        case "VirtualParameter":
          return (false);
        case "EitherMainParameter":
          return (false);
        case "SecondaryParameter":
          return (false);
      }
    });

    if (booleans.includes(true)) {
      return (true);
    }

    return (false);
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
            disabled={this.advantageChoiceDisabled(props)}
            checked={toString(props.id) === toString(this.props.field.value)}
            onChange={this.onChange}
            className="radio-button"
          />
          <label href="#" id={"advantageDescriptionChoice" + props.id} htmlFor={props.id}>{props.name}</label>
          <UncontrolledTooltip placement="right" target={"advantageDescriptionChoice" + props.id}>
            {props.description}. Koszt: {props.pd_cost}. Wymagania: #TODO
          </UncontrolledTooltip>
        </li>)}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  characterId: characterId(state),
  experiencePoints: experiencePoints(state),
  chosenAdvantages: chosenAdvantages(state),
  chosenAdvantagesIds: chosenAdvantagesIds(state),
  advantagesList: get(state, "advantages.byId"),
});

export default connect(
  mapStateToProps
)(AdvantagesChoiceList);
