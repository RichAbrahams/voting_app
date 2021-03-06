/**
*
* LoadingIndicator
*
*/

import React from 'react';
import Wrapper from './wrapper';
import Spinner from './spinner';

function LoadingIndicator() {
  return (
    <Wrapper>
      Loading
      <Spinner
        className="icon"
        name="spinner"
        size="2x"
        spin
      />
    </Wrapper>
  );
}

export default LoadingIndicator;
