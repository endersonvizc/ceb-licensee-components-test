import React from 'react';
import PropTypes from 'prop-types';
import ImageWithFallback from '../ImageWithFallback';
import courseAnytimeLogo from '../../static/images/default-course-anytime-logo.png';
import courseLiveLogo from '../../static/images/default-course-live-logo.png';

class CourseLogo extends React.Component {
  getLogoFromCourseDetail = courseType => {
    switch (courseType) {
      case 'CD_ANYTIME':
        return courseAnytimeLogo;
      case 'CD_LIVE':
        return courseLiveLogo;
      default:
        return courseAnytimeLogo;
    }
  };

  render() {
    const { courseType, styles } = this.props;

    const logo = this.getLogoFromCourseDetail(courseType);
    return (
      <ImageWithFallback
        alt="Course logo"
        src={logo}
        height="100%"
        width="100%"
        styles={styles}
        defaultSrc={courseAnytimeLogo}
      />
    );
  }
}

CourseLogo.propTypes = {
  courseType: PropTypes.string,
  styles: PropTypes.object
};

CourseLogo.defaultProps = {
  styles: {}
};

export default CourseLogo;
