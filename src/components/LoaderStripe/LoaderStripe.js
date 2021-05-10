import React from 'react';
import PropTypes from 'prop-types';

import './LoaderStripe.css';

class LoaderStripe extends React.PureComponent {
  render() {
    const { width, height, style, className = '' } = this.props;
    return (
      <div
        style={{ width, height, ...style }}
        className={`loader-stripe ${className}`}
      />
    );
  }
}

LoaderStripe.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string
};

LoaderStripe.defaultProps = {
  width: '100%',
  height: '20px',
  style: {}
};

export default LoaderStripe;
