import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = { className: PropTypes.string };
const defaultProps = { className: '' };

const Page = styled(props => <div {...props} />)`
  display: flex;
  flex-grow: 1;
  overflow: hidden;
`;
Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

const Wrapper = styled(({ center, ...restProps }) => <div {...restProps} />)`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100%;
  justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
  align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
`;
Wrapper.propTypes = propTypes;
Wrapper.defaultProps = defaultProps;

const Content = styled(({ border, ...restProps }) => <article {...restProps} />)`
  display: block;
  position: relative;
  overflow: hidden;
  border: ${({ border }) => (border ? '1px solid' : 'none')};
  padding: 1rem;
`;
Content.propTypes = {
  ...propTypes,
  border: PropTypes.bool,
};
Content.defaultProps = {
  ...defaultProps,
  border: false,
};

Page.Wrapper = Wrapper;
Page.Content = Content;

export default Page;
