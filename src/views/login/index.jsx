import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import PATHS from 'utils/paths';
import { Button } from 'antd';
import Spinner from 'components/spin';

import { processLogin } from './actions';

class LoginPage extends React.Component {
  static propTypes = {
    history: PropTypes.shape({}).isRequired,
    user: PropTypes.shape({}).isRequired,
    handleLogin: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
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
    const { handleLogin, isLoading } = this.props;

    return (
      <div>
        Login Page goes here
        <Button type="primary" onClick={handleLogin} disabled={isLoading}>
          {isLoading && <Spinner style={{ marginRight: '.5rem' }} />}
          Login
        </Button>
      </div>
    );
  }
}

const mapState = ({ login }) => login;

const mapDispatch = {
  handleLogin: processLogin,
};

export default withRouter(
  connect(
    mapState,
    mapDispatch,
  )(LoginPage),
);
