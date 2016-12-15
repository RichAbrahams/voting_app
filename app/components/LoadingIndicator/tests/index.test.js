import LoadingIndicator from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Wrapper from '../wrapper';
import Spinner from '../spinner';

describe('<LoadingIndicator />', () => {
  let renderedComponent;
  beforeEach(() => {
    renderedComponent = shallow(
      <LoadingIndicator />
    );
  });
  it('should render a Wrapper', () => {
    expect(renderedComponent.find(Wrapper).length).toEqual(1);
  });
  it('should render a Spinner', () => {
    expect(renderedComponent.find(Spinner).length).toEqual(1);
  });
});
