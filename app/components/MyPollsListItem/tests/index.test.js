import MyPollsListItem from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<MyPollsListItem />', () => {
  let renderedComponent;
  let props;
  beforeEach(() => {
    props = {
      myPolls: [],
      viewPoll: () => {},
      deletePoll: () => {},
    };
    renderedComponent = shallow(
      <MyPollsListItem {... props} />
    );
  });

  it('should render a <LI>', () => {
    expect(renderedComponent.find('li')).toExist();
  });
});
