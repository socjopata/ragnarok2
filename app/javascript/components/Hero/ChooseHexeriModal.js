import React, {Component, Fragment} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {Formik, Field, Form} from 'formik';
import Select from 'react-select';
import {connect} from "react-redux";
import {get, map, uniq, startCase} from "lodash";
import HexerisChoiceList from "./HexerisChoiceList";

//actions
import {
  hexeriSelected
} from '../../store/heroes';

class ChooseHexeriModal extends Component {
  state = {
    isOpen: false,
  };

  toggleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  handleHexeriChoice = (values, {setSubmitting}) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
    const id = values.hexerisChoiceList;
    const cost = this.props.hexerisList[id].pd_cost;
    this.toggleOpen();
    this.props.hexeriSelected(id, cost);
  };

  render() {
    return (
      <Fragment>
        <Button key={"addHexeri"} color="success" className="tiny__button float-left"
                onClick={this.toggleOpen}>+</Button>
        <Modal isOpen={this.state.isOpen} toggle={this.toggleOpen} className={this.props.className}>
          <ModalHeader toggle={this.toggleOpen}>Wybierz Hexeri</ModalHeader>
          <ModalBody>
            <Formik
              initialValues={{hexerisChoiceList: []}}
              onSubmit={this.handleHexeriChoice}>
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
                  <Field component={HexerisChoiceList} name="hexerisChoiceList"/>
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
  hexerisList: get(state, "advantages.byId"),
});

const mapDispatchToProps = {
  hexeriSelected,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChooseHexeriModal);