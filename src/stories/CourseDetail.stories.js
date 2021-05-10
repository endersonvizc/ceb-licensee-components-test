import React from 'react';
import { storiesOf } from '@storybook/react';
import CourseLogo from '../components/CourseLogo';
import CourseRegisterInformation from '../components/CourseRegisterInformation';

const stories = storiesOf('Course Detail', module);

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

stories.add('CourseRegisterInformation', () => {
  const {
    isFeatured,
    courseDetail,
    licenseeId,
    price,
    offeringId,
    isFree,
    favorite,
    professionIds,
    showTotalHours,
    isOutOfCourseSearch,
    isFromSavedCourses,
    categoryGA,
    userId,
    courseId,
    authenticationStatus
  } = {
    courseDetail: {
      id: 577413,
      name: 'Florida Nurse CE Renewal Package - Hosted on CE Broker',
      description:
        "The Florida Nurse CE Renewal Package - Hosted on CE Broker includes all mandatory subject areas for Florida renewal for LPNs and RNs. Courses included in this package are Domestic Violence, Medical Errors, Alzheimers Disease, Hypertension, Laws and Rules, Opioid Use Disorders, Tinnitus, Should I Try Ketamine, Recognizing Impairment at Work, HIV/AIDS and Human Trafficking. This all-online package allows you to take the courses at your own pace, and take the tests as many times as you'd like. This course automatically reports to CE Broker!",
      type: 'CD_ANYTIME',
      rating: 4.6000000000000005,
      ratingCount: 8747,
      featuredBanner: '98df614d-1a51-454d-ac9a-59821970e91b',
      inSeries: 0,
      inModular: 0,
      inConcurredSession: 0,
      dateAdded: '05/23/2017',
      popularity: 12309,
      registrationWebsite:
        'https://www.smartcesolutions.com/bundles/27-hour-continuing-education-package-for-florida-nurses-20-577413',
      nowStatusCode: 'PUBLISHED',
      additionalDescription:
        '<p>SmartCE does not accept commercial support for any course/s. All SmartCE courses can be taken at-your-own-pace and online from any device. They report to CE Broker within 24 hours.</p>',
      learningObjectives:
        '<p><strong>Domestic Violence: The Hidden Diagnosis</strong></p><ul><li>Define domestic violence</li><li>Describe the prevalence of domestic abuse in the United States</li><li>Describe the common characteristics of both domestic violence victims and perpetrators</li><li>Identify common warning signs of domestic violence</li><li>Describe best practices in screening for domestic violence and assessing the needs of domestic violence victims</li><li>Identify the role of the health care professional in reporting domestic violence and assisting victims</li></ul><p><strong>Medical Errors</strong></p><ul><li>Identify the two primary types of medical error</li><li>Define an adverse event</li><li>Explain the importance of near misses in preventing future medical errors</li><li>Define a sentinel event</li><li>Explain how errors are analyzed and the role of Root Cause Analysis in this process</li></ul><p><strong>An Introduction to Alzheimer’s Disease</strong></p><ul><li>Identify early, middle, and late findings associated with dementia</li><li>Discuss three causes of reversible dementia</li><li>List three diagnostic tests that aid in the diagnosis and treatment of dementia</li><li>Describe three non-medical interventions to aid patients with dementia</li><li>Discuss the risks and benefits of medications used to treat behavior disturbances in dementia</li></ul><p><strong>Hypertension: A Review of the Silent Killer</strong></p><ul><li>Describe what primary hypertension is</li><li>Explain the difference between primary and secondary hypertension</li><li>Identify four risk factors for developing hypertension</li><li>Describe how hypertension may damage other organs</li><li>Explain lifestyle changes that may be used to treat primary hypertension</li></ul><p><strong>Laws and Rules of Nursing in Florida</strong></p><ul><li>Discuss the history of the regulation of nursing in Florida</li><li>Describe the purpose of the Florida Nurse Practice Act</li><li>Identify specific rules and laws regarding the practice of nursing in Florida</li><li>Describe the various levels of nursing recognized by the state of Florida and the scope of practice of each</li><li>Discuss the general requirements for continuing licensure in the State</li><li>Describe the difference between the legal and ethical practice of nursing</li><li>Discuss the process for discipline related to nursing practice</li><li>Discuss the disciplinary process for nurses</li></ul><p><strong>An Introduction to Opioid Use Disorders</strong></p><ul><li>Discuss the increasing prevalence of opioids in drug abuse and drug-related deaths in the United States</li><li>Distinguish the difference between opiates and opioids</li><li>Name examples of opioids, both natural and synthetic</li><li>Identify the primary factor contributing to the rise of opioid abuse in the United States</li><li>Name the new diagnosis designated to opioid abuse and/or dependence in the DSM-V</li><li>Identify signs of opioid abuse</li><li>Identify signs of opioid overdose</li><li>Discuss opioid withdrawal and identify likely signs of this</li><li>Name the three symptoms signs found in the Opioid Overdose Triad</li><li>Discuss the initial treatment of an opioid overdose</li></ul>',
      deliveryMethod: {
        code: 'CBT',
        description: 'Computer-Based Training '
      },
      defaultCourseUrl: 'https://www.smartcesolutions.com/',
      provider: {
        id: 20680,
        name: 'SMARTCE',
        logoUrl:
          'https://storage.cebroker.com/CEBroker/b38d2185-c2bd-4fa3-8103-d0c122fcc83a',
        website: 'https://www.smartcesolutions.com/',
        phone: '8779777708',
        mailAddress: {
          streetAddress: '4320 Deerwood Lake Parkway Suite 101 - 332',
          streetAddress2: 'NEW YORK',
          city: 'Jacksonville',
          state: 'FL',
          zipCode: '32216',
          country: 'US'
        }
      },
      components: [
        {
          profession: {
            id: 38,
            name: 'Registered Nurse',
            score: 84.30415,
            board: {
              id: 18,
              associationLabel: [''],
              name: 'Florida Board of Nursing'
            },
            subjectAreas: [
              {
                id: 1,
                name: 'HIV/AIDS',
                approvedHours: 1,
                message: '',
                xref: 582
              },
              {
                id: 4,
                name: 'Medical Errors',
                approvedHours: 2,
                message: '',
                xref: 585
              },
              {
                id: 5,
                name: 'Laws and Rules of the Board',
                approvedHours: 2,
                message: '',
                xref: 1003
              },
              {
                id: 7,
                name: 'Domestic Violence',
                approvedHours: 3,
                message: '',
                xref: 591
              },
              {
                id: 35,
                name: 'General',
                approvedHours: 16,
                message: '',
                xref: 588
              },
              {
                id: 2921,
                name: 'Recognizing Impairment in the Workplace',
                approvedHours: 2,
                message: '',
                xref: 2384
              },
              {
                id: 3113,
                name: 'Human Trafficking',
                approvedHours: 2,
                message: '',
                xref: 2995
              }
            ],
            totalHours: 28
          }
        }
      ],
      ratings: [
        {
          rating: 5,
          comment: '',
          rosterCode: 'ROSTER',
          rosterAttendeeId: 50327254
        },
        {
          rating: 5,
          comment: '',
          rosterCode: 'ROSTER',
          rosterAttendeeId: 50915508
        },
        {
          rating: 5,
          comment: '',
          rosterCode: 'ROSTER',
          rosterAttendeeId: 51188074
        },
        {
          rating: 5,
          comment: '',
          rosterCode: 'ROSTER',
          rosterAttendeeId: 51208388
        }
      ]
    },
    onFavoriteClick: 'ƒ () {}',
    price: '203.0',
    isFree: false,
    showTotalHours: true,
    offeringId: 1176843,
    isFromSavedCourses: false,
    professionIds: [38],
    isOutOfCourseSearch: true,
    userId: 5426726
  };

  const saveClick = () => {
    console.log('Do something');
  };
  const getCourseSearchType = () => {
    console.log('Do something');
  };
  const checkIfIsNowCourse = () => {
    return true;
  };
  const courseSearchUrl = 'url';
  const signInUrl = 'url';
  const lmsUrl = 'url';

  const handleFavoriteClick = () => {
    //doSomething
    console.log('Do something');
  };

  return (
    <div
      style={{
        width: '350px'
      }}
    >
      <CourseRegisterInformation
        isFeatured={isFeatured}
        courseDetail={courseDetail}
        onFavoriteClick={handleFavoriteClick}
        favorite={favorite}
        price={price}
        isFree={isFree}
        showTotalHours={showTotalHours}
        offeringId={offeringId}
        licenseeId={licenseeId}
        isFromSavedCourses={isFromSavedCourses}
        professionIds={professionIds}
        isOutOfCourseSearch={isOutOfCourseSearch}
        categoryGA={categoryGA}
        userId={userId}
        courseId={courseId}
        authenticationStatus={authenticationStatus}
        saveClick={saveClick}
        getCourseSearchType={getCourseSearchType}
        checkIfIsNowCourse={checkIfIsNowCourse}
        courseSearchUrl={courseSearchUrl}
        signInUrl={signInUrl}
        lmsUrl={lmsUrl}
      ></CourseRegisterInformation>
    </div>
  );
});
