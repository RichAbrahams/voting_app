import MyPollsContent from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { fromJS } from 'immutable';
import PageTitle from '../../PageTitle';
import Wrapper from '../../InnerWrapper';
import LoadError from '../../LoadError';
import MyPollsList from '../../MyPollsList';
import NoPollsMsg from '../NoPollsMsg';
import MyPollDeleteError from '../../MyPollDeleteError';

describe('<MyPollsContent />', () => {
  let props;
  let renderedComponent;
  beforeEach(() => {
    props = {
      myPollsError: false,
      loadMyPolls: () => {},
      myPolls: fromJS([{
        _id: '584770e37ea6d516752d2ede',
        date: '2016-12-07T02:16:04.009Z',
        url: 'rJ_31bgHml',
        question: 'non mollit do quis?',
        createdBy: 'potato',
        __v: 0,
        options: [{ votes: 10, opt: 'test' }, { votes: 10, opt: 'another test' }],
      }]),
      viewPoll: () => {},
      deletePoll: () => {},
      setShowConfirm: () => {},
      showConfirm: false,
      deletePollError: false,
    };
    renderedComponent = shallow(
      <MyPollsContent {...props} />
    );
  });
  it('should render a Wrapper', () => {
    expect(renderedComponent.find(Wrapper).length).toEqual(1);
  });
  it('should render a PageTitle', () => {
    expect(renderedComponent.find(PageTitle).length).toEqual(1);
  });
  it('should render a MyPollsList', () => {
    expect(renderedComponent.find(MyPollsList).length).toEqual(1);
  });
  it('should render a LoadError', () => {
    props = Object.assign(...props, { myPollsError: true });
    renderedComponent = shallow(
      <MyPollsContent {...props} />
    );
    expect(renderedComponent.find(LoadError).length).toEqual(1);
  });
  it('should render a MyPollDeleteError', () => {
    props = Object.assign(...props, { deletePollError: true });
    renderedComponent = shallow(
      <MyPollsContent {...props} />
    );
    expect(renderedComponent.find(MyPollDeleteError).length).toEqual(1);
  });
  it('should render a NoPollsMsg', () => {
    props = Object.assign(...props, { myPolls: fromJS([]) });
    renderedComponent = shallow(
      <MyPollsContent {...props} />
    );
    expect(renderedComponent.find(NoPollsMsg).length).toEqual(1);
  });
  it('should not render a MyPollsList', () => {
    props = Object.assign(...props, { myPollsError: true });
    renderedComponent = shallow(
      <MyPollsContent {...props} />
    );
    expect(renderedComponent.find(MyPollsList).length).toEqual(0);
  });
  it('should not render a MyPollsList', () => {
    props = Object.assign(...props, { deletePollError: true });
    renderedComponent = shallow(
      <MyPollsContent {...props} />
    );
    expect(renderedComponent.find(MyPollsList).length).toEqual(0);
  });
  it('should not render a MyPollsList', () => {
    props = Object.assign(...props, { myPolls: fromJS([]) });
    renderedComponent = shallow(
      <MyPollsContent {...props} />
    );
    expect(renderedComponent.find(MyPollsList).length).toEqual(0);
  });
});
