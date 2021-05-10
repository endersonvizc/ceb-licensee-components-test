import React from 'react';
import { shallow } from 'enzyme';
import CourseDetailDivider from './CourseRegisterInformation';

it('Renders without crashing', () => {
  const wrapper = shallow(<CourseDetailDivider />);
  expect(wrapper).to.exist;
});

it('Renders register button when a valid URL is given', () => {
  const courseDetail = { website: 'https://www.google.com' };
  const wrapper = shallow(<CourseDetailDivider courseDetail={courseDetail} />);
  const registerButton = wrapper.find('.course-detail-register');
  expect(registerButton).to.exist;
});

it('Hides register button when no valid URL is given', () => {
  const courseDetail = { website: 'no_valid_url' };
  const wrapper = shallow(<CourseDetailDivider courseDetail={courseDetail} />);
  const registerButton = wrapper.find('.course-detail-register');
  expect(registerButton).to.not.exist;
});
