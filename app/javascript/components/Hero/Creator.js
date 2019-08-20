import React, {Component, Fragment} from 'react';
import { get, isEmpty } from 'lodash';
import {Table} from 'reactstrap';
import {connect} from 'react-redux';
import FirstPageBlob from './FirstPageBlob';
import RangedAttack from './RangedAttack';
import RangedDefense from './RangedDefense';
import Armors from './Armors';
import ShieldsAndGadgets from './ShieldsAndGadgets';
import CloseCombatAttack from './CloseCombatAttack';
import CloseCombatDefense from './CloseCombatDefense';
import WealthAndGrenades from './WealthAndGrenades';

import "./hero.scss"
import {fetchHeroes} from "../../store/heros";

class Creator extends Component {
  componentDidMount() {
    const {herosList, fetchHeroes} = this.props;
    if (isEmpty(herosList)) {
      fetchHeroes();
    }
  }

  render() {
    return (
      <div className="character-sheet__main">
        <Table>
          <tbody>
          <FirstPageBlob/>
          <RangedAttack/>
          <RangedDefense/>
          <Armors/>
          <ShieldsAndGadgets/>
          <CloseCombatAttack/>
          <CloseCombatDefense/>
          <WealthAndGrenades/>
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  herosList: get(state, "heros.byId")
});

const mapDispatchToProps = dispatch => ({
  fetchHeroes: () => fetchHeroes(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Creator);
