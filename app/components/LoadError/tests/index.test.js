import LoadError from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<LoadError />', () => {
  let props;
  let renderedComponent;
  beforeEach(() => {
    props = {
      reload: () => {},
      text: 'test',
      target: 'test',
    };
    renderedComponent = shallow(
      <LoadError {...props} />
    );
  });
  it('should render a div', () => {
    expect(renderedComponent.find('div')).toExist();
  });
});
