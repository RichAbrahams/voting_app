import ViewPollVoteSaved from '../index';
import RetryButton from '../RetryButton';
import Icon from '../Icon';
import Wrapper from '../Wrapper';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<ViewPollVoteSaved />', () => {
  let props;
  let renderedComponent;
  beforeEach(() => {
    props = {
      url: 'string',
      loadResultPage: () => {},
    };
  });
  it('should render 1 Wrapper', () => {
    renderedComponent = shallow(
      <ViewPollVoteSaved {... props} />
    );
    expect(renderedComponent.find(Wrapper).length).toEqual(1);
  });
  it('should render 1 RetryButton', () => {
    renderedComponent = shallow(
      <ViewPollVoteSaved {... props} />
    );
    expect(renderedComponent.find(RetryButton).length).toEqual(1);
  });
  it('should render 1 Icon', () => {
    renderedComponent = shallow(
      <ViewPollVoteSaved {... props} />
    );
    expect(renderedComponent.find(Icon).length).toEqual(1);
  });
  it('handles clicks', () => {
    const onClickSpy = expect.createSpy();
    renderedComponent = shallow(<RetryButton onClick={onClickSpy} />);
    renderedComponent.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});
