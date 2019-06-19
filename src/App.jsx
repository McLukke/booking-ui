import React from 'react';
import { hot } from 'react-hot-loader/root';
import {
  withRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import PATHS from 'utils/paths';
import isEmpty from 'lodash/isEmpty';

import LoginPage from 'views/login';
import HomePage from 'views/home';

class BookingApp extends React.Component {
  static propTypes = {
    history: PropTypes.shape({}).isRequired,
    user: PropTypes.shape({}).isRequired,
  };

  componentDidMount() {
    this.handleRedirect();
  }

  componentDidUpdate() {
    this.handleRedirect();
  }

  handleRedirect = () => {
    const {
      user,
      history: {
        push,
        location: { pathname },
      },
    } = this.props;
    const exemptRoutes = pathname === PATHS.LOGIN;

    if (isEmpty(user) && !exemptRoutes) {
      push(PATHS.LOGIN);
    }
  };

  render() {
    console.log('props on main component: ', this.props);

    return (
      <Switch>
        <Route path={PATHS.LOGIN} component={LoginPage} />
        <Route path={PATHS.HOME} component={HomePage} />

        <Redirect to={PATHS.HOME} />
      </Switch>
    );
  }
}

const mapState = ({ login: { user } }) => ({ user });

export default hot(withRouter(connect(mapState)(BookingApp)));
