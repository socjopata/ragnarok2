import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import {fetchHeroes} from '../store/heros';

class Homepage extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchHeroes();
  }

  render() {
    const {destructuredProp} = this.props;

    return (
      <Fragment>
        Here be dragons... and a hompage.
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchHeroes: () => fetchHeroes(dispatch)
});

// #TODO change null to mapStateToProps later
export default connect(
  null,
  mapDispatchToProps,
)(Homepage);
