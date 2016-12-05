import Navigation from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Navigation />', () => {
  let renderedComponent;
  let props;
  beforeEach(() => {
    props = ({
      username: 'test',
      changePage: () => {},
    });
    renderedComponent = shallow(
      <Navigation {...props} />
    );
  });
  it('should render a <Wrapper>', () => {
    expect(renderedComponent.find('Wrapper')).toExist();
  });
  it('should render NavLinks', () => {
    expect(renderedComponent.find('NavLink')).toExist();
  });
});
