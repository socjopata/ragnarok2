import React, {Component, Fragment} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {
  characterId,
  chosenAdvantages,
  experiencePoints,
} from "../../store/heroes";
import {connect} from "react-redux";

class ChooseAdvantageModal extends Component {
  state = {
    isOpen: false
  };

  componentDidMount() {
    console.log("Mounted!")
  }

  toggleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
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
          <ModalHeader toggle={this.toggleOpen}>Modal title</ModalHeader>
          <ModalBody>
            Here be dragons.
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
});

export default connect(
  mapStateToProps
)(ChooseAdvantageModal);
