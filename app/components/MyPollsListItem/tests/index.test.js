import MyPollsListItem from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { fromJS } from 'immutable';
import LI from '../LI';
import QuestionWrapper from '../QuestionWrapper';
import DetailsWrapper from '../DetailsWrapper';
import ControlsWrapper from '../ControlsWrapper';
import ButtonWrapper from '../ButtonWrapper';
import ConfirmWrapper from '../ConfirmWrapper';
import Button from '../Button';
import ConfirmButton from '../ConfirmButton';
import Icon from '../Icon';

describe('<MyPollsList />', () => {
  let renderedComponent;
  let props;
  beforeEach(() => {
    props = {
      poll: fromJS({
        _id: '584770e37ea6d516752d2ede',
        date: '2016-12-07T02:16:04.009Z',
        url: 'rJ_31bgHml',
        question: 'non mollit do quis?',
        createdBy: 'potato',
        __v: 0,
        options: [{ votes: 10, opt: 'test' }, { votes: 10, opt: 'another test' }],
      }),
      viewPoll: () => {},
      deletePoll: () => {},
      setShowConfirm: () => {},
      showConfirm: false,
    };
    renderedComponent = shallow(
      <MyPollsListItem {... props} />
    );
  });
  it('should render a LI', () => {
    expect(renderedComponent.find(LI).length).toEqual(1);
  });
  it('should render a QuestionWrapper', () => {
    expect(renderedComponent.find(QuestionWrapper).length).toEqual(1);
  });
  it('should render a DetailsWrapper', () => {
    expect(renderedComponent.find(DetailsWrapper).length).toEqual(1);
  });
  it('should render a ControlsWrapper', () => {
    expect(renderedComponent.find(ControlsWrapper).length).toEqual(1);
  });
  it('should render a ButtonWrapper', () => {
    expect(renderedComponent.find(ButtonWrapper).length).toEqual(1);
  });
  it('should render a ConfirmWrapper', () => {
    expect(renderedComponent.find(ConfirmWrapper).length).toEqual(1);
  });
  it('should render 2 Button', () => {
    expect(renderedComponent.find(Button).length).toEqual(2);
  });
  it('should render 2 ConfirmButton', () => {
    expect(renderedComponent.find(ConfirmButton).length).toEqual(2);
  });
  it('should render 2 Icon', () => {
    expect(renderedComponent.find(Icon).length).toEqual(2);
  });
  it('Button handles clicks', () => {
    const onClickSpy = expect.createSpy();
    renderedComponent = shallow(<Button onClick={onClickSpy} />);
    renderedComponent.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
  it('ConfirmButton handles clicks', () => {
    const onClickSpy = expect.createSpy();
    renderedComponent = shallow(<ConfirmButton onClick={onClickSpy} />);
    renderedComponent.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});
