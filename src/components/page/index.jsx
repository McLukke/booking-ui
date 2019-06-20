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

const Wrapper = styled(props => <div {...props} />)`
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  align-items: stretch;
`;
Wrapper.propTypes = propTypes;
Wrapper.defaultProps = defaultProps;

const Container = styled(({ noBorder, ...restProps }) => <article {...restProps} />)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  overflow: hidden;
  border: ${({ noBorder }) => (noBorder ? 'none' : '1px solid')};
`;
Container.propTypes = {
  ...propTypes,
  noBorder: PropTypes.bool,
};
Container.defaultProps = {
  ...defaultProps,
  noBorder: false,
};

Page.Wrapper = Wrapper;
Page.Container = Container;

export default Page;
