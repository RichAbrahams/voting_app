import HomePagePager from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<HomePagePager />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(
      <HomePagePager />
    );
    expect(renderedComponent.find('div')).toExist();
  });
});
