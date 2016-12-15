import ViewPollListItem from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import LI from '../LI';

describe('<ViewPollListItem />', () => {
  let props;
  let renderedComponent;
  beforeEach(() => {
    props = {
      option: 'test',
      id: 'test',
      url: 'test',
      saveVote: () => {},
    };
  });
  it('should render 1 LI', () => {
    renderedComponent = shallow(
      <ViewPollListItem {... props} />
    );
    expect(renderedComponent.find(LI).length).toEqual(1);
  });
});
