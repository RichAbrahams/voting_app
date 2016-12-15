/* eslint no-unused-vars:0 */
import ViewPollContent from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { fromJS } from 'immutable';
import PageTitle from '../../PageTitle';
import ViewPollOptions from '../../ViewPollOptions';
import ViewPollVoteSaved from '../../ViewPollVoteSaved';
import LoadError from '../../LoadError';
import Wrapper from '../../InnerWrapper';

describe('<ViewPollContent />', () => {
  let props;
  let renderedComponent;
  beforeEach(() => {
    props = {
      loadPollError: false,
      createdBy: 'user',
      question: 'a string',
      options: fromJS([{ votes: 10, opt: 'test' }, { votes: 10, opt: 'another test' }]),
      url: 'a string',
      id: 'a string',
      loadPoll: () => {},
      saveVote: () => {},
      voteSaved: false,
      loadResultPage: () => {},
    };
    renderedComponent = shallow(
      <ViewPollContent {... props} />
    );
  });
  it('should render a Wrapper', () => {
    expect(renderedComponent.find(Wrapper).length).toEqual(1);
  });
  it('should render a PageTitle', () => {
    expect(renderedComponent.find(PageTitle).length).toEqual(1);
  });
  it('should render a ViewPollOptions', () => {
    expect(renderedComponent.find(ViewPollOptions).length).toEqual(1);
  });
  it('should render a LoadError', () => {
    props = Object.assign(...props, { loadPollError: true });
    renderedComponent = shallow(
      <ViewPollContent {... props} />
    );
    expect(renderedComponent.find(LoadError).length).toEqual(1);
  });
  it('should render a ViewPollVoteSaved', () => {
    props = Object.assign(...props, { voteSaved: true });
    renderedComponent = shallow(
      <ViewPollContent {... props} />
    );
    expect(renderedComponent.find(ViewPollVoteSaved).length).toEqual(1);
  });
  it('should not render a ViewPollOptions', () => {
    props = Object.assign(...props, { loadPollError: true });
    renderedComponent = shallow(
      <ViewPollContent {... props} />
    );
    expect(renderedComponent.find(ViewPollOptions).length).toEqual(0);
  });
  it('should not render a ViewPollOptions', () => {
    props = Object.assign(...props, { voteSaved: true });
    renderedComponent = shallow(
      <ViewPollContent {... props} />
    );
    expect(renderedComponent.find(ViewPollOptions).length).toEqual(0);
  });
});
