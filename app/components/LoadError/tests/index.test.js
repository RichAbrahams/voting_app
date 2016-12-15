import LoadError from '../index';
import RetryButton from '../RetryButton';
import Icon from '../Icon';
import Wrapper from '../Wrapper';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<LoadError />', () => {
  let props;
  let renderedComponent;
  beforeEach(() => {
    props = {
      reload: () => {},
      text: 'example text',
      target: 'test',
    };
    renderedComponent = shallow(
      <LoadError {...props} />
    );
  });
  it('should render a Wrapper', () => {
    expect(renderedComponent.find(Wrapper).length).toEqual(1);
  });
  it('should render a Icon', () => {
    expect(renderedComponent.find(Icon).length).toEqual(1);
  });
  it('should render a RetryButton', () => {
    expect(renderedComponent.find(RetryButton).length).toEqual(1);
  });
  it('should render the message text', () => {
    expect(renderedComponent.contains('example text')).toEqual(true);
  });
  it('handles clicks', () => {
    const onClickSpy = expect.createSpy();
    renderedComponent = shallow(<RetryButton onClick={onClickSpy} />);
    renderedComponent.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});
