import ViewResultContent from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<ViewResultContent />', () => {
  let props;
  let renderedComponent;
  beforeEach(() => {
    props = {
      reload: () => {},
      pollResultError: false,
      createdBy: 'test',
      question: 'test',
      options: 'test',
      url: 'test',
      loadPollResult: () => {},
    };
    renderedComponent = shallow(
      <ViewResultContent {...props} />
    );
  });
  it('should render a div', () => {
    expect(renderedComponent.find('div')).toExist();
  });
});
