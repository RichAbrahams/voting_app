/**
*
* PageTitle
*
*/
import React from 'react';
import Wrapper from './Wrapper';
import Header from './Header';

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
