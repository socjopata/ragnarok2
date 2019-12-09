import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {get, map, filter, toString, compact, includes, reject, find} from "lodash";

import {
  characterId,
  chosenHexeris,
  chosenHexerisIds,
  mainParameterTotal,
  secondaryParameterTotal,
  bonusFromVirtues,
  experiencePoints,
} from "../../store/heroes";
import {UncontrolledTooltip} from "reactstrap";

class HexerisChoiceList extends Component {
  currentHexerisList = () => {
    const {hexerisList, chosenHexerisIds} = this.props;
    if (hexerisList) {
      const hexerisOfSelectedType = filter(hexerisList, ['kind', "hexeri"]);
      const currentHexeris = hexerisOfSelectedType.filter(hexeri => !includes(compact(chosenHexerisIds), hexeri.id));
      return (currentHexeris);
    }
  };

  onChange = (event) => {
    const targetId = event.currentTarget.id;
    this.props.form.setFieldValue(this.props.field.name, targetId)
  };

  hexeriChoiceDisabled = (hexeri) => {
    const {mainParameterTotal, hexerisList, bonusFromVirtues, secondaryParameterTotal, experiencePoints} = this.props;
    const booleans = map(hexeri.requirements, requirement => {
      switch (requirement.check_applies_to) {
        case "MainParameter":
          return (mainParameterTotal(requirement.name) >= parseInt(requirement.value));
        case "Advantage":
          return map(hexerisList, 'internal_name').includes(requirement.name);
        case "VirtualParameter":
          return (bonusFromVirtues(requirement.name, "VirtualParameter") >= parseInt(requirement.value));
        case "EitherMainParameter":
          const skillRequirements = requirement.name.split('_or_');
          return(!find(skillRequirements, skillName => (mainParameterTotal(skillName) >= parseInt(requirement.value))));
        case "SecondaryParameter":
          return (secondaryParameterTotal(requirement.name) >= parseInt(requirement.value));
      }
    });

    booleans.push(experiencePoints < hexeri.pd_cost);
    if (booleans.includes(true)) {
      return (true);
    }

    return (false);
  };

  render() {
    return (
      <ul>
        {map(this.currentHexerisList(), (props) => <li key={props.id}>
          <input
            name={props.name}
            id={props.id}
            type="radio"
            value={props.id}
            disabled={this.hexeriChoiceDisabled(props)}
            checked={toString(props.id) === toString(this.props.field.value)}
            onChange={this.onChange}
            className="radio-button"
          />
          <label href="#" id={"hexeriDescriptionChoice" + props.id} htmlFor={props.id}>{props.name}</label>
          <UncontrolledTooltip placement="right" target={"hexeriDescriptionChoice" + props.id}>
            {props.description}. Koszt: {props.pd_cost}.
          </UncontrolledTooltip>
        </li>)}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  characterId: characterId(state),
  experiencePoints: experiencePoints(state),
  chosenHexeris: chosenHexeris(state),
  chosenHexerisIds: chosenHexerisIds(state),
  mainParameterTotal: name => mainParameterTotal(state, name),
  secondaryParameterTotal: name => secondaryParameterTotal(state, name),
  bonusFromVirtues: (name, type) => bonusFromVirtues(state, name, type),
  hexerisList: get(state, "advantages.byId"),
});

export default connect(
  mapStateToProps
)(HexerisChoiceList);
