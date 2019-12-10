import React, {Component, Fragment} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledTooltip} from 'reactstrap';
import {Formik, Field, Form} from 'formik';
import {connect} from "react-redux";
import {get, map, filter, forEach} from "lodash";

//actions
import {
  implantSelected,
  einherEnhancementsDetermined,
} from '../../store/heroes';

//selectors
import {
  implantsList,
  einherRolls,
} from "../../store/heroes";
import AdvantagesChoiceList from "./AdvantagesChoiceList";

class ChooseEinherEnhancementsModal extends Component {
  state = {
    isOpen: false,
  };

  toggleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  handleEinherEnhancementsChoices = (_values, {setSubmitting}) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
    this.toggleOpen();

    const {einherRolls, implantsList} = this.props;

    const einherImplantsIds = [];
    forEach(einherRolls, rollValue => {
      if (rollValue === 2) {
        const medicPouch = filter(implantsList, implant => implant.internal_name === 'medic_pouch')[0];
        this.props.implantSelected(medicPouch.id, 0, 0);
        einherImplantsIds.push(medicPouch.id);
      } else if ([3, 4].includes(rollValue)) {
        const extendedLungs = filter(implantsList, implant => implant.internal_name === 'extended_lungs')[0];
        this.props.implantSelected(extendedLungs.id, 0, 0);
        einherImplantsIds.push(extendedLungs.id);
      } else if ([5, 6].includes(rollValue)) {
        const antiToxic = filter(implantsList, implant => implant.internal_name === 'anti_toxic')[0];
        this.props.implantSelected(antiToxic.id, 0, 0);
        einherImplantsIds.push(antiToxic.id);
      } else if ([7, 8, 9].includes(rollValue)) {
        const cyberEyes = filter(implantsList, implant => implant.internal_name.startsWith('odins_eye'));
        forEach(cyberEyes, cyberEye => {
          this.props.implantSelected(cyberEye.id, 0, 0);
          einherImplantsIds.push(cyberEye.id);
        });
      } else if ([10, 11, 12].includes(rollValue)) {
        const cyberneticPerfection = filter(implantsList, implant => implant.id === parseInt(get(_values, 'einherChoicePerfection', 'id')))[0];
        this.props.implantSelected(cyberneticPerfection.id, 0, 0);
        einherImplantsIds.push(cyberneticPerfection.id);
      } else if ([13, 14, 15].includes(rollValue)) {
        const limbType = get(_values, 'einherChoiceLimbs');
        if (limbType === "Hands") {
          const cyberHands = filter(implantsList, implant => implant.internal_name.startsWith('cyber_hand'));
          forEach(cyberHands, cyberHand => {
            this.props.implantSelected(cyberHand.id, 0, 0);
            einherImplantsIds.push(cyberHand.id);
          });
        } else if (limbType === "Legs") {
          const cyberLegs = filter(implantsList, implant => implant.internal_name.startsWith('cyber_leg'));
          forEach(cyberLegs, cyberLeg => {
            this.props.implantSelected(cyberLeg.id, 0, 0);
            einherImplantsIds.push(cyberLeg.id);
          });
        }
      } else if ([16, 17].includes(rollValue)) {
        const perceptionType = get(_values, 'einherChoiceLimbs');
        if (perceptionType === "Gere") {
          const gerePerception = filter(implantsList, implant => implant.internal_name === 'gere_perception')[0];
          this.props.implantSelected(gerePerception.id, 0, 0);
          einherImplantsIds.push(gerePerception.id);
        } else if (perceptionType === "Freke") {
          const frekePerception = filter(implantsList, implant => implant.internal_name === 'freke_perception')[0];
          this.props.implantSelected(frekePerception.id, 0, 0);
          einherImplantsIds.push(frekePerception.id);
        }
      } else if ([18, 19].includes(rollValue)) {
        const onlyAScratch = filter(implantsList, implant => implant.internal_name === 'only_a_scratch')[0];
        this.props.implantSelected(onlyAScratch.id, 0, 0);
        einherImplantsIds.push(onlyAScratch.id);
      } else if ([20].includes(rollValue)) {
        const cyberneticImprovement = filter(implantsList, implant => implant.id === parseInt(get(_values, 'einherCyberneticImprovement', 'id')))[0];
        this.props.implantSelected(cyberneticImprovement.id, 0, 0);
        einherImplantsIds.push(cyberneticImprovement.id);
      }
    });

    this.props.einherEnhancementsDetermined(einherImplantsIds);
  };

  cyberneticPerfectionImplants = () => {
    const {implantsList} = this.props;
    if (implantsList) {
      const currentImplants = filter(implantsList, implant => implant.internal_name.startsWith('cybernetic_perfection__'));
      return (currentImplants);
    }
  };

  cyberneticImprovementImplants = () => {
    const {implantsList} = this.props;
    if (implantsList) {
      const currentImplants = filter(implantsList, implant => implant.internal_name.startsWith('cybernetic_improvement__'));
      return (currentImplants);
    }
  };

  renderEinherChoice = (index, handleChange) => {
    const einherRoll = this.props.einherRolls[index];

    if (einherRoll === 2) {
      return (<span>Wylosowano: Kieszeń Medyczna</span>)
    } else if ([3, 4].includes(einherRoll)) {
      return (<span>Wylosowano: Rozszerzone Płuca</span>)
    } else if ([5, 6].includes(einherRoll)) {
      return (<span>Wylosowano: Anti-Toxic</span>)
    } else if ([7, 8, 9].includes(einherRoll)) {
      return (<span>Wylosowano: Cyber Oczy</span>)
    } else if ([10, 11, 12].includes(einherRoll)) {
      return (
        <ul><span className="bold__text">Wylosowano: Cyb. Perfekcja. Określ typ:</span>
          {map(this.cyberneticPerfectionImplants(), (props) => <li key={props.id}>
            <input
              name={`einherChoicePerfection`}
              id={`einherChoicePerfection${props.id}`}
              type="radio"
              value={props.id}
              onChange={handleChange}
              className="radio-button"
            />
            <label href="#" id={"einherCyberneticBodyEnhancementDescription" + props.id}
                   htmlFor={props.id}>{props.name}</label>
            <UncontrolledTooltip placement="right" target={"einherCyberneticBodyEnhancementDescription" + props.id}>
              {props.description}.
            </UncontrolledTooltip>
          </li>)}
        </ul>
      )
    } else if ([13, 14, 15].includes(einherRoll)) {
      return (
        <ul><span className="bold__text">Wylosowano: Cyb. Kończyny (ręce lub nogi). Określ typ:</span>
          <li key="einherChoiceLimbs1">
            <input
              name={`einherChoiceLimbs`}
              id={`einherChoiceLimbs`}
              type="radio"
              value="Hands"
              onChange={handleChange}
              className="radio-button"
            />
          </li>
          <label href="#" id={"einherCyberneticBodyEnhancementDescription" + "einherChoiceLimbs1"}
                 htmlFor="einherChoiceLimbs1">Cybernetyczne Ręce</label>
          <li key="einherChoiceLimbs2">
            <input
              name={`einherChoiceLimbs`}
              id={`einherChoiceLimbs`}
              type="radio"
              value="Legs"
              onChange={handleChange}
              className="radio-button"
            />
          </li>
          <label href="#" id={"einherCyberneticBodyEnhancementDescription" + "einherChoiceLimbs2"}
                 htmlFor="einherChoiceLimbs2">Cybernetyczne Nogi</label>
        </ul>
      )
    } else if ([16, 17].includes(einherRoll)) {
      return (
        <ul><span className="bold__text">Wylosowano: Percepcja Freke lub Gere. Określ typ:</span>
          <li key="einherChoicePerception1">
            <input
              name={`einherChoicePerception`}
              id={`einherChoicePerception`}
              type="radio"
              value="Freke"
              onChange={handleChange}
              className="radio-button"
            />
          </li>
          <label href="#" id={"einherCyberneticBodyEnhancementDescription" + "einherChoicePerception1"}
                 htmlFor="einherChoicePerception1">Percepcja Freke</label>
          <li key="einherChoicePerception2">
            <input
              name={`einherChoicePerception`}
              id={`einherChoicePerception`}
              type="radio"
              value="Gere"
              onChange={handleChange}
              className="radio-button"
            />
          </li>
          <label href="#" id={"einherCyberneticBodyEnhancementDescription" + "einherChoicePerception2"}
                 htmlFor="einherChoicePerception2">Percepcja Gere</label>
        </ul>
      )
    } else if ([18, 19].includes(einherRoll)) {
      return (<span>To tylko Draśnięcie!</span>)
    } else if ([20].includes(einherRoll)) {
      return (
        <ul><span className="bold__text">Wylosowano: Cyb. Udoskonalenie. Określ typ:</span>
          {map(this.cyberneticImprovementImplants(), (props) => <li key={props.id}>
            <input
              name={`einherCyberneticImprovement`}
              id={`einherCyberneticImprovement${props.id}`}
              type="radio"
              value={props.id}
              onChange={handleChange}
              className="radio-button"
            />
            <label href="#" id={"einherCyberneticBodyEnhancementDescription" + props.id}
                   htmlFor={props.id}>{props.name}</label>
            <UncontrolledTooltip placement="right" target={"einherCyberneticBodyEnhancementDescription" + props.id}>
              {props.description}.
            </UncontrolledTooltip>
          </li>)}
        </ul>
      )
    }
  };

  render() {
    return (
      <Fragment>
        <Button key={"defineEinherEnhancements"} color="warning" className="tiny__button float-left"
                onClick={this.toggleOpen}>o</Button>
        <Modal isOpen={this.state.isOpen} toggle={this.toggleOpen} className={this.props.className}>
          <ModalHeader toggle={this.toggleOpen}>Potwierdź Implanty wynikające z zalety </ModalHeader>
          <ModalBody>
            <Formik
              initialValues={{}}
              onSubmit={this.handleEinherEnhancementsChoices}>
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
                  <Field name="firstChoice">
                    {({
                        field, // { name, value, onChange, onBlur }
                        form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => (
                      <div>
                        {this.renderEinherChoice(0, handleChange)}
                      </div>
                    )}
                  </Field>

                  <Field name="secondChoice">
                    {({
                        field, // { name, value, onChange, onBlur }
                        form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => (
                      <div>
                        {this.renderEinherChoice(1, handleChange,)}
                      </div>
                    )}
                  </Field>
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
  einherRolls: einherRolls(state),
});

const mapDispatchToProps = {
  einherEnhancementsDetermined,
  implantSelected
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChooseEinherEnhancementsModal);
