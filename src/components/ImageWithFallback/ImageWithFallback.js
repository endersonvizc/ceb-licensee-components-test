import React from 'react';
import PropTypes from 'prop-types';

import LoaderStripe from '../LoaderStripe';

const Fragment = React.Fragment;

class ImageWithFallback extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this._isMounted = false;
    this.img = null;
  }

  componentDidMount() {
    const { src } = this.props;
    this._isMounted = true;
    this.checkSrc(src);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.src !== nextProps.src) {
      this.setState({ src: nextProps.src });
      this.checkSrc(nextProps.src);
    }
  }

  checkSrc(src) {
    const { defaultSrc } = this.props;
    const imageSrc = src || defaultSrc;
    this.img.src = imageSrc;
    this.img.onload = () => {
      if (this._isMounted) {
        this.setState({ loaded: true });
      }
    };
  }

  render() {
    const { alt, style, width, height, className } = this.props;
    const { loaded } = this.state;

    return (
      <Fragment>
        <LoaderStripe
          width={width}
          height={height}
          style={{
            ...style,
            display: loaded ? 'none' : 'block'
          }}
        />
        {}
        <img
          alt={alt}
          style={{
            ...style,
            display: loaded ? 'block' : 'none'
          }}
          className={className}
          ref={ref => {
            this.img = ref;
          }}
        />
      </Fragment>
    );
  }
}

ImageWithFallback.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.string,
  defaultSrc: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string
};

export default ImageWithFallback;
