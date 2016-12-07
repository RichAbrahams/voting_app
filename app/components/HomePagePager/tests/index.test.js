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
  });
  it('should render pager buttons', () => {
    const lastPage = Math.ceil(props.pollCount / 25);
    const nextDisabled = props.currentPage === props.lastPage;
    const previousDisabled = props.currentPage === 1;
    renderedComponent = shallow(<HomePagePager {...props} />);
    expect(renderedComponent.contains(<Wrapper>
      <PagerButton onClick={props.loadPreviousPolls} disabled={previousDisabled}>
        <FontAwesome
          name="arrow-circle-o-left"
          size="3x"
        />
      </PagerButton>
      {props.currentPage} / {lastPage}
      <PagerButton onClick={props.loadNextPolls} disabled={nextDisabled}>
        <FontAwesome
          className="icon"
          name="arrow-circle-o-right"
          size="3x"
        />
      </PagerButton>
    </Wrapper>
)).toEqual(true);
  });
});
