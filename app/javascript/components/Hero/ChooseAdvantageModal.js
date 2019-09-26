import React, {Component, Fragment} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { Formik } from 'formik';
import Select from 'react-select';
import {connect} from "react-redux";
import {get, map, uniq, startCase} from "lodash";

import {
  characterId,
  chosenAdvantages,
  experiencePoints,
} from "../../store/heroes";

const ADVANTAGES_MAP = {
  ranged: "Strzeleckie",
  melee: "Walka w Zwarciu",
  hexeri: "Hekseri",
  general: "Ogólne",
  battle_general: "Ogólne Bitewne"
};

class ChooseAdvantageModal extends Component {
  state = {
    isOpen: false
  };

  toggleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  advantageTypes = () => {
    const kinds = uniq(map(this.props.advantagesList, "kind"));
    return (map(kinds, (kind) => {
      return ({value: kind, label: ADVANTAGES_MAP[kind]})
    }));
  };

  //  use reactstrap Modal and Uncontrolled Tooltip
  //  and then bundle formik to handle the form rendering and interactions between inputs... nice :)
  render() {
    return (
      <Fragment>
        <Button key={"addAnAdvantage"} color="success" className="tiny__button float-left"
                onClick={this.toggleOpen}>+</Button>
        <Modal isOpen={this.state.isOpen} toggle={this.toggleOpen} className={this.props.className}>
          <ModalHeader toggle={this.toggleOpen}>Wybierz Atut</ModalHeader>
          <ModalBody>
            <Formik
              initialValues={{ advantageType: '' }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                <form onSubmit={handleSubmit}>
                  <Select
                    id="color"
                    options={this.advantageTypes()}
                    multi={false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.advantageType}
                  />
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </form>
              )}
            </Formik>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleOpen}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggleOpen}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Fragment>
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
)(ChooseAdvantageModal);
