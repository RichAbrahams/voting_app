import { SignUp } from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import SectionWrapper from 'components/SectionWrapper';
import SignUpForm from 'components/SignUpForm';
import Wrapper from 'components/InnerWrapper';
import PageTitle from 'components/PageTitle';

describe('<SignUp />', () => {
  let props;
  let renderedComponent;
  beforeEach(() => {
    props = {
      signUp: () => {},
      username: 'string',
      changePage: () => {},
      resetSignUp: () => {},
    };
    renderedComponent = shallow(
      <SignUp {... props} />
    );
  });
  it('should render a Wrapper', () => {
    expect(renderedComponent.find(Wrapper).length).toEqual(1);
  });
  it('should render a SectionWrapper', () => {
    expect(renderedComponent.find(SectionWrapper).length).toEqual(1);
  });
  it('should render a SignUpForm', () => {
    expect(renderedComponent.find(SignUpForm).length).toEqual(1);
  });
  it('should render a PageTitle', () => {
    expect(renderedComponent.find(PageTitle).length).toEqual(1);
  });
});
