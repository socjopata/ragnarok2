import React, {Component} from 'react';
import {
  Container,
  Row,
  Col,
  Jumbotron
} from 'reactstrap';

import {NavLink as RouterNavLink} from 'react-router-dom';

class Homepage extends Component {
  render() {
    return (
      <Jumbotron>
        <Container>
          <Row>
            <Col>
              <h1>Welcome to Ragnarok character creator.</h1>
              <p className="lead">The goal of this webpage is to facilitate character sheet creation for CRPG Ragnarok
                players.</p>
              <hr className="my-4"/>
              <p>Proceed to the character sheet</p>
              <p className="lead">
                <RouterNavLink
                  className="btn btn-primary btn-lg"
                  color="success"
                  role="button"
                  to="/create_a_hero"
                >
                  Create Character
                </RouterNavLink>
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default Homepage;
