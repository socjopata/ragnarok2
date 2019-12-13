import React, {Component, Fragment} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {Formik, Field, Form} from 'formik';
import Select from 'react-select';
import {connect} from "react-redux";
import {get, compact, isEmpty, uniq, map} from "lodash";
import HexerisChoiceList from "./HexerisChoiceList";

//selectors
import {
  regionsFamiliarityChoice,
  selectedVirtues,
} from "../../store/heroes";

//actions
import {
  hexeriSelected,
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

  hexeriTypes = () => {
    let kinds = uniq(map(this.props.hexerisList, "kind"));
    // const regionsFamiliarityChoice = this.props.regionsFamiliarityChoice;
    // if (regionsFamiliarityChoice.length > 0) {
    //   kinds = ["Midgard", ...kinds.filter(kind => regionsFamiliarityChoice.includes(kind))];
    // }
    return (map(kinds, (kind) => {
      return ({value: kind, label: kind})
    }));
  };

  handleHexeriChoice = (values, {setSubmitting}) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 400);

  //TODO here be dragons
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
              initialValues={{hexeriType: '', hexerisChoiceList: []}}
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
                  <Select
                    id="color"
                    options={this.hexeriTypes()}
                    multi={false}
                    onChange={selected => setFieldValue("hexeriType", selected.value)}
                  />
                  <Field component={HexerisChoiceList} name="hexerisChoiceList" selectedHexeriType={values.hexeriType}/>
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
  hexerisList: get(state, "hexeris.byId"),
  selectedVirtues: selectedVirtues(state),
//    regionsFamiliarityChoice: regionsFamiliarityChoice(state), TODO ?
});

const mapDispatchToProps = {
  hexeriSelected,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChooseHexeriModal);
