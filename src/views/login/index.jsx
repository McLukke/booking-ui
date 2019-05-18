import React from 'react';
import { PropTypes } from 'prop-types';

class LoginPage extends React.Component {
  static propTypes = {
    history: PropTypes.shape({}).isRequired,
  };

  // TODO: learn about React lifecycles
  componentDidMount() {}

  render() {
    return <div>Login Page goes here</div>;
  }
}

export default LoginPage;
