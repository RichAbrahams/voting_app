/**
*
* PageTitle
*
*/
import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
  text-align: center;
  padding-bottom: 0.5em;
  padding-top: 0.5em;
  margin-bottom: 0;
  border-bottom: 1px solid #edeaea;
  margin-top: 0px;
`;

const Header = styled.h1`
  margin: 0;
`;

function PageTitle(props) {
  const { text } = props;
  return (
    <Wrapper>
      <Header>
        {text}
      </Header>
    </Wrapper>
  );
}

PageTitle.propTypes = {
  text: React.PropTypes.string,
};

export default PageTitle;
