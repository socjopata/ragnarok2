import React, {Component, Fragment} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {Formik, Field, Form} from 'formik';
import Select from 'react-select';
import {connect} from "react-redux";
import {get, map, uniq, startCase} from "lodash";
import AdvantagesChoiceList from "./AdvantagesChoiceList";

//actions
import {
  advantageSelected
} from '../../store/heroes';

//selectors
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
    isOpen: false,
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

  handleAdvantageChoice = (values, {setSubmitting}) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
    const id = values.advantagesChoiceList;
    const cost = this.props.advantagesList[id].pd_cost;
    this.toggleOpen();
    this.props.advantageSelected(id, cost);
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
              initialValues={{advantageType: '', advantagesChoiceList: []}}
              onSubmit={this.handleAdvantageChoice}>
              {({
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  setFieldValue
                  /* and other goodies */
                }) => (
                <Form onSubmit={handleSubmit}>
                  <Select
                    id="color"
                    options={this.advantageTypes()}
                    multi={false}
                    onChange={selected => setFieldValue("advantageType", selected.value)}
                  />
                  <Field component={AdvantagesChoiceList} name="advantagesChoiceList" selectedAdvantageType={values.advantageType}/>
                  <button color="primary" type="submit" disabled={isSubmitting}>
                    Wybierz
                  </button>
                </Form>
              )}
            </Formik>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleOpen}>Zamknij</Button>
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

const mapDispatchToProps = {
  advantageSelected,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChooseAdvantageModal);
