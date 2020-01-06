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
import {fetchHeroes} from "../../store/heroes";
import {fetchAdvantages} from "../../store/advantages";
import {fetchImplants} from "../../store/implants";
import {fetchHexeris} from "../../store/hexeris";
import {fetchMeleeWeapons} from "../../store/melee_weapons";
import {fetchRangedWeapons} from "../../store/ranged_weapons";

class Creator extends Component {
  componentDidMount() {
    const {heroesList, fetchHeroes, advantagesList, fetchAdvantages, implantsList, fetchImplants, hexerisList,
      fetchHexeris, meleeWeaponsList, fetchMeleeWeapons, rangedWeaponsList, fetchRangedWeapons} = this.props;
    if (isEmpty(heroesList)) {
      fetchHeroes();
    }
    if (isEmpty(advantagesList)) {
      fetchAdvantages();
    }
    if (isEmpty(implantsList)) {
      fetchImplants();
    }
    if (isEmpty(hexerisList)) {
      fetchHexeris();
    }

    if (isEmpty(meleeWeaponsList)) {
      fetchMeleeWeapons();
    }

    if (isEmpty(rangedWeaponsList)) {
      fetchRangedWeapons();
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
  heroesList: get(state, "heroes.byId"),
  advantagesList: get(state, "advantages.byId"),
  implantsList: get(state, "implants.byId"),
  hexerisList: get(state, "hexeris.byId"),
  meleeWeaponsList: get(state, "meleeWeapons.byId"),
  rangedWeaponsList: get(state, "rangedWeapons.byId"),
});

const mapDispatchToProps = dispatch => ({
  fetchHeroes: () => fetchHeroes(dispatch),
  fetchAdvantages: () => fetchAdvantages(dispatch),
  fetchImplants: () => fetchImplants(dispatch),
  fetchHexeris: () => fetchHexeris(dispatch),
  fetchMeleeWeapons: () => fetchMeleeWeapons(dispatch),
  fetchRangedWeapons: () => fetchRangedWeapons(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Creator);
