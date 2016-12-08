/**
*
* MyPollDeleteError
*
*/

import React from 'react';
import RetryButton from './RetryButton';
import Icon from './Icon';
import Wrapper from './Wrapper';


function MyPollDeleteError(props) {
  const { retry } = props;
  return (
    <Wrapper>
      <Icon
        className="icon"
        name="frown-o"
        size="3x"
      />
      Failed to delete poll
      <RetryButton onClick={() => retry()}>Try again</RetryButton>
    </Wrapper>
  );
}
MyPollDeleteError.propTypes = {
  retry: React.PropTypes.func,
};


export default MyPollDeleteError;
