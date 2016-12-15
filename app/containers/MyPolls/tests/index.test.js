import { MyPolls } from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import SectionWrapper from 'components/SectionWrapper';
import MyPollsContent from 'components/MyPollsContent';

describe('<MyPolls />', () => {
  let renderedComponent;
  beforeEach(() => {
    renderedComponent = shallow(
      <MyPolls />
    );
  });
  it('should render a Wrapper', () => {
    expect(renderedComponent.find(SectionWrapper).length).toEqual(1);
  });
  it('should render a MyPollsContent', () => {
    expect(renderedComponent.find(MyPollsContent).length).toEqual(1);
  });
});
