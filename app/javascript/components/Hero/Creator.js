import React, {Component, Fragment} from 'react';
import {Table} from 'reactstrap';

import FirstPageBlob from './FirstPageBlob';
import RangedAttack from './RangedAttack';
import RangedDefense from './RangedDefense';
import Armors from './Armors';
import ShieldsAndGadgets from './ShieldsAndGadgets';
import CloseCombatAttack from './CloseCombatAttack';
import CloseCombatDefense from './CloseCombatDefense';
import WealthAndGrenades from './WealthAndGrenades';

import "./hero.scss"

class Creator extends Component {
  state = {};

  componentDidMount() {
    console.log("Mounted!")
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

export default Creator;
