/**
*
* MyPollsListItem
*
*/
import React from 'react';
import LI from './LI';
import QuestionWrapper from './QuestionWrapper';
import DetailsWrapper from './DetailsWrapper';
import ControlsWrapper from './ControlsWrapper';
import ButtonWrapper from './ButtonWrapper';
import Button from './Button';
import Icon from './Icon';

function MyPollsListItem(props) {
  const { poll, viewPoll, deletePoll } = props;
  const votes = poll.get('options')
                    .map((item) => item.get('votes'))
                    .reduce((cont, item) => {
                      const val = cont + item;
                      return val;
                    }, 0);
  const url = poll.get('url');

  return (
    <LI>
      <QuestionWrapper>{poll.get('question')}</QuestionWrapper>
      <DetailsWrapper>votes cast: {votes}</DetailsWrapper>
      <ControlsWrapper>
        <ButtonWrapper>
          <Button onClick={() => viewPoll(url)}>
            <Icon
              name="eye"
              size="3x"
            />
          View
          </Button>
          <Button onClick={() => deletePoll(url)}>
            <Icon
              name="trash"
              size="3x"
            />
          Delete
          </Button>
        </ButtonWrapper>
      </ControlsWrapper>
    </LI>
  );
}

MyPollsListItem.propTypes = {
  poll: React.PropTypes.object,
  viewPoll: React.PropTypes.func,
  deletePoll: React.PropTypes.func,
};

export default MyPollsListItem;
