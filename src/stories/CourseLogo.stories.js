import React from 'react';
import { storiesOf } from '@storybook/react';
import CourseLogo from '../components/CourseLogo';

const stories = storiesOf('App test', module);

stories.add('CourseLogo', () => {
  const props = {
    courseType: 'CD_ANYTIME',
    courseDetail: {
      type: 'CD_ANYTIME'
    },
    styles: {}
  };

  return (
    <div>
      <CourseLogo
        courseType={props.courseType}
        courseDetail={props.courseDetail}
        styles={props.styles}
      ></CourseLogo>
    </div>
  );
});
