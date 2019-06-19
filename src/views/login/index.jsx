import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import PATHS from 'utils/paths';

import { processLogin } from './actions';

class LoginPage extends React.Component {
  static propTypes = {
    history: PropTypes.shape({}).isRequired,
    user: PropTypes.shape({}).isRequired,
    handleLogin: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.handleRedirect();
  }

  componentDidUpdate() {
    this.handleRedirect();
  }

  handleRedirect = () => {
    const { user, history } = this.props;

    if (!isEmpty(user)) {
      history.push(PATHS.HOME);
    }
  };

  render() {
    const { handleLogin } = this.props;

    return (
      <div>
        Login Page goes here
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </div>
    );
  }
}

const mapState = ({ login: { user } }) => ({ user });

const mapDispatch = {
  handleLogin: processLogin,
};

export default withRouter(
  connect(
    mapState,
    mapDispatch,
  )(LoginPage),
);
