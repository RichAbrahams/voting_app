import PageTitle from '../index';

import expect from 'expect';
import { render } from 'enzyme';
import React from 'react';

describe('<PageTitle />', () => {
  it('should render a div', () => {
    const renderedComponent = render(
      <PageTitle />
    );
    expect(renderedComponent.find('div').length).toEqual(1);
  });
  it('should render a h1', () => {
    const renderedComponent = render(
      <PageTitle />
    );
    expect(renderedComponent.find('h1').length).toEqual(1);
  });
});
