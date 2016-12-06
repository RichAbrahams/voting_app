import { MyPolls } from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<MyPolls />', () => {
  let renderedComponent;
  beforeEach(() => {
    renderedComponent = shallow(
      <MyPolls />
    );
  });

  it('should render a section', () => {
    expect(renderedComponent.find('section')).toExist();
  });
});
