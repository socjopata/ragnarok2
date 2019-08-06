import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

import {fetchHeroes} from '../store/heros';

class Homepage extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchHeroes();
  }

  render() {
    const {destructuredProp} = this.props;

    return (
      <Jumbotron>
        <Container>
          <Row>
            <Col>
              <h1>Welcome to Ragnarok character creator.</h1>
              <p className="lead">The goal of this webpage is to facilitate character sheet creation for CRPG Ragnarok players.</p>
              <hr className="my-4"/>
              <p>Proceed to the character sheet</p>
              <p className="lead">
                <Button
                  className="btn btn-primary btn-lg"
                  color="success"
                  role="button"
                  href="/create_a_hero"
                  target="_blank"
                >
                  Create Character
                </Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
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
