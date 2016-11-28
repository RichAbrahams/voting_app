/**
*
* HomePageError
*
*/

import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

function HomePageError() {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width 100%;
    padding-top: 1em;
    align-items: center;
    font-size: 2em;
    color: #222;
  `;

  return (
    <Wrapper>
      <FontAwesome
        className="icon"
        name="frown-o"
        size="2x"
      />
      Server error, please try later
    </Wrapper>
  );
}

export default HomePageError;
