import React, { Component, Fragment } from 'react';

class Homepage extends Component {
  state = {
  };

  componentDidMount() {
    console.log("Mounted!")
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

export default Homepage
