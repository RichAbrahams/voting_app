import { NewPoll } from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import SectionWrapper from 'components/SectionWrapper';
import PageTitle from 'components/PageTitle';
import Wrapper from 'components/InnerWrapper';
import NewPollForm from 'components/NewPollForm';

describe('<NewPoll />', () => {
  let renderedComponent;
  beforeEach(() => {
    renderedComponent = shallow(
      <NewPoll />
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
  it('should render a NewPollForm', () => {
    expect(renderedComponent.find(NewPollForm).length).toEqual(1);
  });
});
