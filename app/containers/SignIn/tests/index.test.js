import { SignIn } from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Wrapper from 'components/InnerWrapper';
import SignInForm from 'components/SignInForm';
import SectionWrapper from 'components/SectionWrapper';
import PageTitle from 'components/PageTitle';

describe('<SignIn />', () => {
  let props;
  let renderedComponent;
  beforeEach(() => {
    props = {
      signIn: () => {},
      resetSignIn: () => {},
      username: 'string',
      changePage: () => {},
    };
    renderedComponent = shallow(
      <SignIn {... props} />
    );
  });
  it('should render a Wrapper', () => {
    expect(renderedComponent.find(Wrapper).length).toEqual(1);
  });
  it('should render a SectionWrapper', () => {
    expect(renderedComponent.find(SectionWrapper).length).toEqual(1);
  });
  it('should render a PageTitle', () => {
    expect(renderedComponent.find(PageTitle).length).toEqual(1);
  });
  it('should render a SignInForm', () => {
    expect(renderedComponent.find(SignInForm).length).toEqual(1);
  });
});
