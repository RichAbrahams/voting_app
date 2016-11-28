import { HomePage } from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<HomePage />', () => {
  let props;
  let renderedComponent;
  beforeEach(() => {
    props = {
      loadingError: false,
      polls: { polls: [1, 2, 3] },
      loading: false,
    };
    renderedComponent = shallow(
      <HomePage {...props} />
    );
  });
  it('should render a section', () => {
    expect(renderedComponent.find('section')).toExist();
  });
});
