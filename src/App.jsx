import React from 'react';
import { hot } from 'react-hot-loader/root';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import logo from './logo.svg';
import AppWrapper from './App.styles.js';

// TODO:
//   1) convert this to a class component
//   2) check for a user session first thing (lifecycles)
//     a) if there is a user session, redirect to login page
//     b) otherwise, go show a dummy page for now
const App = ({ history }) => (
  <AppWrapper>
    <AppWrapper.Header>
      <AppWrapper.Logo src={logo} alt="logo" />
      <AppWrapper.Intro>
        {'Edit '}
        <code>src/App.js</code>
        {' and save to reload.'}
      </AppWrapper.Intro>

      <AppWrapper.Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </AppWrapper.Link>

      <AppWrapper.Intro>
        {/* TODO: use { Switch, Route } from react-router-dom to show either login page or this page */}
        <button type="button" onClick={() => history.push('/login')}>
          or Login now!
        </button>
      </AppWrapper.Intro>
    </AppWrapper.Header>
  </AppWrapper>
);
App.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default hot(withRouter(App));
