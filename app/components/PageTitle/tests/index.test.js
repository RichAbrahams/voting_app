import PageTitle from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Wrapper from '../Wrapper';
import Header from '../Header';

describe('<PageTitle />', () => {
  let renderedComponent;
  let props;
  beforeEach(() => {
    props = {
      text: 'example title',
    };
    renderedComponent = shallow(
      <PageTitle {... props} />
    );
  });
  it('should render a Wrapper', () => {
    expect(renderedComponent.find(Wrapper).length).toEqual(1);
  });
  it('should render a Header', () => {
    expect(renderedComponent.find(Header).length).toEqual(1);
  });
  it('should render the title text', () => {
    expect(renderedComponent.contains('example title')).toEqual(true);
  });
});
