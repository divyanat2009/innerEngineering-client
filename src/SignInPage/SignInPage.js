import React, { Component } from 'react';
import UserSignIn from '../UserSignIn';
import { Section } from '../Utils/Utils';


export default class SignInPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  };

  render() {
    return (
      <Section className='SignInPage'>
        <UserSignIn
          onLoginSuccess={this.handleLoginSuccess}
        />
      </Section>
    );
  }
}