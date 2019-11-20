import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {get, map, filter, toString, compact, includes, reject, find} from "lodash";

import {
  characterId,
  chosenAdvantages,
  chosenAdvantagesIds,
  mainParameterTotal,
  secondaryParameterTotal,
  bonusFromVirtues,
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

  advantageChoiceDisabled = (advantage) => {
    const {mainParameterTotal, advantagesList, bonusFromVirtues, secondaryParameterTotal} = this.props;
    const booleans = map(advantage.requirements, requirement => {
      switch (requirement.check_applies_to) {
        case "MainParameter":
          return (mainParameterTotal(requirement.name) >= parseInt(requirement.value));
        case "Advantage":
          return map(advantagesList, 'internal_name').includes(requirement.name);
        case "VirtualParameter":
          return (bonusFromVirtues(requirement.name, "VirtualParameter") >= parseInt(requirement.value));
        case "EitherMainParameter":
          const skillRequirements = requirement.name.split('_or_');
          return(!find(skillRequirements, skillName => (mainParameterTotal(skillName) >= parseInt(requirement.value))));
        case "SecondaryParameter":
          return (secondaryParameterTotal(requirement.name) >= parseInt(requirement.value));
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
  mainParameterTotal: name => mainParameterTotal(state, name),
  secondaryParameterTotal: name => secondaryParameterTotal(state, name),
  bonusFromVirtues: (name, type) => bonusFromVirtues(state, name, type),
  advantagesList: get(state, "advantages.byId"),
});

export default connect(
  mapStateToProps
)(AdvantagesChoiceList);
