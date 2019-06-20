import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import PATHS from 'utils/paths';
import { Button, Row, Col, Icon } from 'antd';
import Spinner from 'components/spin';
import Page from 'components/page';
import styled from 'styled-components';

import { processLogin } from './actions';

const SocialButton = styled(({ style, type, children, ...restProps }) => (
  <Button {...restProps} type="default">
    <Icon type={type} theme="outlined" />
    {children}
  </Button>
))`
  display: flex;
  align-items: center;
  color: white;
  margin: 0 auto 1rem auto;
  background-color: ${({ type }) => {
    switch (type) {
      case 'google-plus':
        return '#db3236';

      case 'facebook':
        return '#3b5998';

      default:
        return '#0077B5';
    }
  }};

  i {
    font-size: 1.5rem;
  }

  &:hover {
    color: white;
    background-color: ${({ type }) => {
      switch (type) {
        case 'google-plus':
          return '#db3236';
  
        case 'facebook':
          return '#3b5998';
  
        default:
          return '#0077B5';
      }
    }};
  }
`;

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
      <Page.Wrapper center>
        <Page.Content border>
          <Row type="flex" justify="center" align="middle" style={{ textAlign: 'center' }}>
            <Col span={24} style={{ marginBottom: '1rem' }}>Please Sign in to Booking App</Col>

            <Col span={24}>
              <SocialButton
                type="google-plus"
                onClick={() => console.log('clicked Google')}
              >
                Sign in with Google+
              </SocialButton>
            </Col>

            <Col span={24}>
              <SocialButton
                type="facebook"
                onClick={() => console.log('clicked Facebook')}
              >
                Sign in with Facebook
              </SocialButton>
            </Col>

            <Col span={24}>
              <Button type="primary" onClick={handleLogin} disabled={isLoading}>
                {isLoading && <Spinner style={{ marginRight: '.5rem' }} />}
                Login
              </Button>
            </Col>
          </Row>
        </Page.Content>
      </Page.Wrapper>
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
