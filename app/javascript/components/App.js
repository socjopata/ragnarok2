import React from "react"
import PropTypes from "prop-types"
class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        Text: {this.props.example_property}
      </React.Fragment>
    );
  }
}

App.propTypes = {
  example_property: PropTypes.string
};
export default App
