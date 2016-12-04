import { Header } from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Header />', () => {
  let renderedComponent;
  beforeEach(() => {
    renderedComponent = shallow(
      <Header />
    );
  });
  it('should render a div', () => {
    expect(renderedComponent.find('div')).toExist();
  });
});
