import React, {Component, Fragment} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {Formik, Field, Form} from 'formik';
import Select from 'react-select';
import {connect} from "react-redux";
import {get, map, uniq, startCase} from "lodash";
import ImplantsChoiceList from "./ImplantsChoiceList";

//actions
import {
  implantSelected
} from '../../store/heroes';

//selectors
import {
  implantsList,
} from "../../store/heroes";

class ChooseImplantModal extends Component {
  state = {
    isOpen: false,
  };

  toggleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  implantTypes = () => {
    const kinds = uniq(map(this.props.implantsList, "kind"));
    return (map(kinds, (kind) => {
      return ({value: kind, label: kind})
    }));
  };

  handleImplantChoice = (values, {setSubmitting}) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
    const id = values.implantsChoiceList;
    const neurostabilityCost = this.props.implantsList[id].neurostability_cost;
    const moneyCost = this.props.implantsList[id].money_cost;
    this.toggleOpen();
    this.props.implantSelected(id, neurostabilityCost, moneyCost);
  };

  render() {
    return (
      <Fragment>
        <Button key={"addAnImplant"} color="success" className="tiny__button float-left"
                onClick={this.toggleOpen}>+</Button>
        <Modal isOpen={this.state.isOpen} toggle={this.toggleOpen} className={this.props.className}>
          <ModalHeader toggle={this.toggleOpen}>Wybierz Implant</ModalHeader>
          <ModalBody>
            <Formik
              initialValues={{implantType: '', implantsChoiceList: []}}
              onSubmit={this.handleImplantChoice}>
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
                    options={this.implantTypes()}
                    multi={false}
                    onChange={selected => setFieldValue("implantType", selected.value)}
                  />
                  <Field component={ImplantsChoiceList} name="implantsChoiceList" selectedImplantType={values.implantType}/>
                  <Button type="submit" color="primary" disabled={isSubmitting}>
                    Wybierz
                  </Button>
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
  implantsList: get(state, "implants.byId"),
});

const mapDispatchToProps = {
  implantSelected,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChooseImplantModal);
