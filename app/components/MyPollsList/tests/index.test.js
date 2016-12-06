import MyPollsList from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<MyPollsList />', () => {
  let renderedComponent;
  let props;
  beforeEach(() => {
    props = {
      myPolls: [],
      viewPoll: () => {},
      deletePoll: () => {},
    };
    renderedComponent = shallow(
      <MyPollsList {... props} />
    );
  });

  it('should render a <ul>', () => {
    expect(renderedComponent.find('ul')).toExist();
  });
});
