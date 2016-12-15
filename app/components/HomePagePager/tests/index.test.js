import HomePagePager from '../index';
import Wrapper from '../Wrapper';
import PagerButton from '../PagerButton';
import FontAwesome from 'react-fontawesome';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<HomePagePager />', () => {
  let props;
  let renderedComponent;
  beforeEach(() => {
    props = {
      loadNextPolls: () => {},
      loadPreviousPolls: () => {},
      pollCount: 50,
      currentPage: 5,
    };
    renderedComponent = shallow(
      <HomePagePager {...props} />
    );
  });
  it('should render 1 Wrapper', () => {
    expect(renderedComponent.find(Wrapper).length).toEqual(1);
  });
  it('should render 2 PagerButton', () => {
    expect(renderedComponent.find(PagerButton).length).toEqual(2);
  });
  it('should render 2 FontAwesome', () => {
    expect(renderedComponent.find(FontAwesome).length).toEqual(2);
  });
  it('handles clicks', () => {
    const onClickSpy = expect.createSpy();
    renderedComponent = shallow(<PagerButton onClick={onClickSpy} />);
    renderedComponent.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});
