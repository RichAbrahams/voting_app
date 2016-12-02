/**
*
* ViewResultError
*
*/

import React from 'react';
import RetryButton from './RetryButton';
import Icon from './Icon';
import Wrapper from './Wrapper';

function LoadError(props) {
  const { reload, text, target } = props;
  return (
    <Wrapper>
      <Icon
        className="icon"
        name="frown-o"
        size="3x"
      />
      {text}
      <RetryButton onClick={() => reload(target)}>Try again</RetryButton>
    </Wrapper>
  );
}
LoadError.propTypes = {
  reload: React.PropTypes.func,
  text: React.PropTypes.string,
  target: React.PropTypes.string,
};


export default LoadError;
