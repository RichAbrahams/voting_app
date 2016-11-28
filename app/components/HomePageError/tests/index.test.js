import HomePageError from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<HomePageError />', () => {
  let renderedComponent;
  beforeEach(() => {
    renderedComponent = shallow(
      <HomePageError />
    );
  });
  it('should render a div', () => {
    expect(renderedComponent.find('div')).toExist();
  });
  it('should render a span', () => {
    expect(renderedComponent.find('span')).toExist();
  });
});
