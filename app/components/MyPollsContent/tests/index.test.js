import MyPollsContent from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<MyPollsContent />', () => {
  let renderedComponent;
  let props;
  beforeEach(() => {
    props = {
      loadMyPolls: () => {},
      myPollsError: false,
      myPolls: [],
      viewPoll: () => {},
      deletePoll: () => {},
    };
    renderedComponent = shallow(
      <MyPollsContent {... props} />
    );
  });

  it('should render a <Wrapper>', () => {
    expect(renderedComponent.find('Wrapper')).toExist();
  });
});
