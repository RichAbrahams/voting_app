import Navigation from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Wrapper from '../Wrapper';
import NavLink from '../NavLink';
import LogOutLink from '../LogOutLink';

describe('<Navigation />', () => {
  let renderedComponent;
  let props;
  beforeEach(() => {
    props = {
      username: 'test',
      changePage: () => {},
      logOut: () => {},
    };
    renderedComponent = shallow(
      <Navigation {... props} />
    );
  });
  it('should render a Wrapper', () => {
    expect(renderedComponent.find(Wrapper).length).toEqual(1);
  });
  it('should render 3 NavLink', () => {
    expect(renderedComponent.find(NavLink).length).toEqual(3);
  });
  it('should render a LogOutLink', () => {
    expect(renderedComponent.find(LogOutLink).length).toEqual(1);
  });
  it('should render 3 NavLink', () => {
    props = Object.assign(...props, { username: null });
    renderedComponent = shallow(
      <Navigation {... props} />
    );
    expect(renderedComponent.find(NavLink).length).toEqual(3);
  });
  it('should not render a LogOutLink', () => {
    props = Object.assign(...props, { username: null });
    renderedComponent = shallow(
      <Navigation {... props} />
    );
    expect(renderedComponent.find(LogOutLink).length).toEqual(0);
  });
});
