import React from 'react';
import { shallow } from 'enzyme';
import ImageWithFallback from '../ImageWithFallback';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<ImageWithFallback />);
});

it('Component renders without crashing', () => {
  expect(wrapper).to.exist;
});

it('Component updates image', () => {
  const imageUrl = 'https://www.cebroker.com/content/images/logo-sm.png';
  wrapper.setProps({
    src: imageUrl
  });
  expect(wrapper.state().src).to.be.equal(imageUrl);
});
