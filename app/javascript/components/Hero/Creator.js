import React, { Component, Fragment } from 'react';

class Creator extends Component {
  state = {};

  componentDidMount() {
    console.log("Mounted!")
  }

  render() {
    return (
      <Fragment>
        Here be dragons... and an actual character sheet.
      </Fragment>
    );
  }
}

export default Creator;
