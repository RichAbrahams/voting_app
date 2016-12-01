/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Header from '../Header/index';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    const AppWrapper = styled.div`
      max-width: calc(768px + 16px * 2);
      margin: 0 auto;
      display: flex;
      min-height: 100vh;
      padding: 0 16px;
      flex-direction: column;
    `;
    return (
      <AppWrapper>
        <Header />
        {React.Children.toArray(this.props.children)}
      </AppWrapper>
    );
  }
}
