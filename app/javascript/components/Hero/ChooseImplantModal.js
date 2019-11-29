import React, {Component, Fragment} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {Formik, Field, Form} from 'formik';
import Select from 'react-select';
import {connect} from "react-redux";
import {get, map, uniq, values, isEmpty} from "lodash";
import ImplantsChoiceList from "./ImplantsChoiceList";

//actions
import {
  implantSelected,
  regionsFamiliarityUpdated,
} from '../../store/heroes';

//selectors
import {
  implantsList,
  selectedVirtues,
  regionsFamiliarityChoice
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

  handleImplantChoice = (_values, {setSubmitting}) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
    this.toggleOpen();

    const id = _values.implantsChoiceList;
    const implant = values(this.props.implantsList).filter(implant => implant.id === parseInt(id))[0];
    this.props.implantSelected(id, implant.neurostability_cost, implant.money_cost);

    const kind = implant.kind;
    const { selectedVirtues, regionsFamiliarityChoice } = this.props;
    const twoImplantGroupsAllowed = selectedVirtues && !isEmpty(selectedVirtues.filter(virtue => virtue.internal_name === "fraud"));

    if (twoImplantGroupsAllowed && regionsFamiliarityChoice.length < 3) {
      if (!(kind === "Midgard") && (regionsFamiliarityChoice[0] !== kind)) {
        this.props.regionsFamiliarityUpdated([...regionsFamiliarityChoice, kind])
      }
    } else if (regionsFamiliarityChoice.length === 0) {
      !(kind === "Midgard") && this.props.regionsFamiliarityUpdated([kind])
    }
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
  selectedVirtues: selectedVirtues(state),
  regionsFamiliarityChoice: regionsFamiliarityChoice(state),
});

const mapDispatchToProps = {
  implantSelected,
  regionsFamiliarityUpdated,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChooseImplantModal);
