import HomePageContent from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<HomePageContent />', () => {
  let props;
  let renderedComponent;
  beforeEach(() => {
    props = {
      loadingError: false,
      polls: { polls: [1, 2, 3] },
      loadNextPolls: () => {},
      loadPreviousPolls: () => {},
    };
    renderedComponent = shallow(
      <HomePageContent {...props} />
    );
  });
  it('should render a section', () => {
    expect(renderedComponent.find('section')).toExist();
  });
  it('should render a div', () => {
    expect(renderedComponent.find('div')).toExist();
  });
});
