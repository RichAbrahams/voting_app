import { Header } from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Wrapper from '../Wrapper';
import Navigation from 'components/Navigation';
import LogoWrapper from '../LogoWrapper';


describe('<Header />', () => {
  let props;
  let renderedComponent;
  beforeEach(() => {
    props = {
      username: 'string',
      token: 'string',
      changePage: () => {},
      logOut: () => {},
      getVotedFromLocalStorage: () => {},
      getTokenFromLocalStorage: () => {},
      getUserFromToken: () => {},
    };
    renderedComponent = shallow(
      <Header {... props} />
    );
  });
  it('should render a Wrapper', () => {
    expect(renderedComponent.find(Wrapper).length).toEqual(1);
  });
  it('should render a LogoWrapper', () => {
    expect(renderedComponent.find(LogoWrapper).length).toEqual(1);
  });
  it('should render an image', () => {
    expect(renderedComponent.find('img').length).toEqual(1);
  });
  it('should render a Navigation', () => {
    expect(renderedComponent.find(Navigation).length).toEqual(1);
  });
});
