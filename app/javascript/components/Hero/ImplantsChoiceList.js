import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {get, map, filter, toString, compact, includes, reject, find} from "lodash";

import {
  characterId,
  chosenImplants,
  chosenImplantsIds,
  experiencePoints,
  neurostability,
  money,
} from "../../store/heroes";
import {UncontrolledTooltip} from "reactstrap";

class ImplantsChoiceList extends Component {
  currentImplantsList = () => {
    const {implantsList, selectedImplantType, chosenImplantsIds} = this.props;
    if (implantsList) {
      const implantsOfSelectedType = filter(implantsList, ['kind', selectedImplantType]);
      const currentImplants = implantsOfSelectedType.filter(implant => !includes(compact(chosenImplantsIds), implant.id));
      return (currentImplants);
    }
  };

  onChange = (event) => {
    const targetId = event.currentTarget.id;
    this.props.form.setFieldValue(this.props.field.name, targetId)
  };

  implantChoiceDisabled = (implant) => {
    const {implantsList, neurostability, money} = this.props;
    const booleans = map(implant.requirements, requirement => {
      switch (requirement.check_applies_to) {
        case "Implant":
          //TODO implement me
          return(false);
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
        {map(this.currentImplantsList(), (props) => <li key={props.id}>
          <input
            name={props.name}
            id={props.id}
            type="radio"
            value={props.id}
            disabled={this.implantChoiceDisabled(props)}
            checked={toString(props.id) === toString(this.props.field.value)}
            onChange={this.onChange}
            className="radio-button"
          />
          <label href="#" id={"implantDescriptionChoice" + props.id} htmlFor={props.id}>{props.name}</label>
          <UncontrolledTooltip placement="right" target={"implantDescriptionChoice" + props.id}>
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
  neurostability: neurostability(state),
  money: money(state),
  chosenImplants: chosenImplants(state),
  chosenImplantsIds: chosenImplantsIds(state),
  implantsList: get(state, "implants.byId"),
});

export default connect(
  mapStateToProps
)(ImplantsChoiceList);
