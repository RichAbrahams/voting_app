import HomePagePolls from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { fromJS } from 'immutable';

describe('<HomePagePolls />', () => {
  it('should render a ul', () => {
    const props = ({
      polls: fromJS([{ poll: 1 }, { poll: 2 }]),
    });
    const renderedComponent = shallow(
      <HomePagePolls {...props} />
    );
    expect(renderedComponent.find('ul')).toExist();
  });
});
