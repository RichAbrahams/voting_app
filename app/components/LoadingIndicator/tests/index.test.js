import LoadingIndicator from '../index';

import expect from 'expect';
import { render } from 'enzyme';
import React from 'react';

describe('<LoadingIndicator />', () => {
  it('should render a div', () => {
    const renderedComponent = render(
      <LoadingIndicator />
    );
    expect(renderedComponent.find('div').length).toEqual(1);
  });
});
