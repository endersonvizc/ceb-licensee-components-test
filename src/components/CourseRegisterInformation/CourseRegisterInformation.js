import React from 'react';
import PropTypes from 'prop-types';
import accounting from 'accounting';
import ReactGA from 'react-ga';
import { Button } from 'emerald-ui';
import './CourseRegisterInformation.css';

class CourseRegisterInformation extends React.PureComponent {
  handleRegisterClick = () => {
    const {
      courseDetail,
      isFeatured,
      offeringId,
      licenseeId,
      isFromSavedCourses,
      isOutOfCourseSearch,
      categoryGA
    } = this.props;
    const { id: courseId, provider = {} } = courseDetail;
    const { id: providerId } = provider;

    const registerUrl =
      courseDetail.registrationWebsite ||
      courseDetail.defaultCourseUrl ||
      provider.website;
    if (isOutOfCourseSearch) {
      // Send an event to google analytics
      ReactGA.event({
        category: categoryGA ? categoryGA : 'lic_beta_register_ad',
        action: 'click',
        label: `providerId=${providerId},courseId=${courseId},offeringId=${offeringId}`
      });
      saveClick({
        type: 'REGISTER_BUTTON',
        providerId,
        courseId,
        offeringId,
        clickedURL: registerUrl,
        courseSearchType: getCourseSearchType(licenseeId),
        isFeaturedCourse: true
      });
      return;
    }

    // Send an event to google analytics
    ReactGA.event({
      category: 'provider_website_link',
      action: 'click',
      label: `${isFeatured ? 'Featured-' : ''}${registerUrl}`
    });
    if (isFeatured) {
      // Send an event to google analytics
      ReactGA.event({
        category: 'featured_provider_link_cs_v2',
        action: 'click'
      });

      ReactGA.event({
        category: 'featured_registration_button',
        action: 'click',
        label: registerUrl
      });
    }
    let type = 'REGISTER_BUTTON';
    if (isFromSavedCourses) {
      type += '_FAVORITE';
    }
    saveClick({
      type,
      providerId,
      courseId,
      offeringId,
      clickedURL: registerUrl,
      courseSearchType: getCourseSearchType(licenseeId),
      isFeaturedCourse: isFeatured
    });
  };

  render() {
    const {
      isFree,
      price,
      courseDetail,
      showTotalHours,
      professionIds,
      userId,
      authenticationStatus,
      checkIfIsNowCourse,
      courseSearchUrl,
      signInUrl,
      lmsUrl
    } = this.props;

    const { provider = {}, components = [], id: courseId } = courseDetail;

    const isNowCourse = checkIfIsNowCourse(courseDetail);

    const encodedUrl = encodeURIComponent(
      `${courseSearchUrl}/login?redirect_to=lms-redirection-${courseId}`
    );
    const isNotLoggedIn = authenticationStatus === 'unauthenticated';
    const nowCourseUrl = isNotLoggedIn
      ? `${signInUrl}?continue_to=${encodedUrl}`
      : `${lmsUrl}/${userId}-${courseId}`;

    let priceLabel = '';
    let isContactProvider = false;
    if (isFree) {
      priceLabel = 'Free';
    } else if (price && price !== '99999.0') {
      priceLabel = accounting.formatMoney(price, '$');
    } else {
      isContactProvider = true;
      priceLabel = 'Price not reported';
    }

    let totalHours = 0;

    if (professionIds.length > 0) {
      const component = components.find(({ profession }) =>
        professionIds.includes(profession.id)
      );
      const { profession } = component;
      totalHours = profession ? profession.totalHours : 0;
    }

    const registerUrl =
      courseDetail.registrationWebsite ||
      courseDetail.defaultCourseUrl ||
      provider.website;
    const urlRegEx = /^(http|https):\/\//;
    const isValidUrl = registerUrl
      ? urlRegEx.test(registerUrl.toLowerCase())
      : false;

    return (
      <div className="floating-content course-register-information">
        <div className="course-register-information-container">
          <div className="course-register-information-header">
            <div className="course-register-information-info">
              <span
                className={`course-detail-price ${
                  isContactProvider ? 'price-not-reported' : ''
                }`}
              >
                {isContactProvider ? 'Price not reported' : priceLabel}
              </span>
              {showTotalHours && (
                <p className="course-detail-hours">{`${totalHours} ${
                  totalHours > 1 ? 'Hours' : 'Hour'
                }`}</p>
              )}
            </div>
          </div>
          <div className="course-register-information-register-section">
            {registerUrl && isValidUrl && (
              <Button
                className="course-detail-register"
                color={!isNowCourse ? 'info' : 'warning'}
                href={!isNowCourse ? registerUrl : nowCourseUrl}
                onClick={this.handleRegisterClick}
                target="_blank"
              >
                <span>{isNowCourse ? 'START COURSE' : 'LEARN MORE'}</span>{' '}
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

CourseRegisterInformation.propTypes = {
  isFeatured: PropTypes.bool,
  isFree: PropTypes.bool,
  price: PropTypes.string,
  courseDetail: PropTypes.object,
  showTotalHours: PropTypes.bool,
  offeringId: PropTypes.number,
  licenseeId: PropTypes.number,
  isFromSavedCourses: PropTypes.bool,
  professionIds: PropTypes.array,
  isOutOfCourseSearch: PropTypes.bool,
  categoryGA: PropTypes.string,
  userId: PropTypes.number,
  authenticationStatus: PropTypes.string,
  saveClick: PropTypes.func,
  getCourseSearchType: PropTypes.func,
  checkIfIsNowCourse: PropTypes.func,
  courseSearchUrl: PropTypes.string,
  signInUrl: PropTypes.string,
  lmsUrl: PropTypes.string,
};

CourseRegisterInformation.defaultProps = {
  courseDetail: {},
  showTotalHours: true,
  isFromSavedCourses: false
};

export default CourseRegisterInformation;
