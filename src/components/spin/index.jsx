import React from 'react';
import { Spin, Icon } from 'antd';
import PropTypes from 'prop-types';

const Spinner = ({ fontSize, size, ...restProps }) => (
  <Spin
    {...restProps}
    indicator={<Icon type="loading" style={{ fontSize: fontSize || size }} spin />}
  />
);
Spinner.propTypes = {
  fontSize: PropTypes.number,
  size: PropTypes.number,
};
Spinner.defaultProps = {
  fontSize: 16,
  size: 16,
};

export default Spinner;
