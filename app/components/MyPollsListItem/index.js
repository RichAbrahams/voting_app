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
import ConfirmWrapper from './ConfirmWrapper';
import Button from './Button';
import ConfirmButton from './ConfirmButton';
import Icon from './Icon';

function MyPollsListItem(props) {
  const { poll, viewPoll, deletePoll, setShowConfirm, showConfirm } = props;
  const votes = poll.get('options')
                    .map((item) => item.get('votes'))
                    .reduce((cont, item) => {
                      const val = cont + item;
                      return val;
                    }, 0);
  const url = poll.get('url');
  const showConfirmButtons = url === showConfirm;
  return (
    <LI>
      <QuestionWrapper>{poll.get('question')}</QuestionWrapper>
      <DetailsWrapper>votes cast: {votes}</DetailsWrapper>
      <ControlsWrapper>
        <ButtonWrapper>
          <Button onClick={() => viewPoll(url)}>
            <Icon
              name="eye"
              size="2x"
            />
          View
          </Button>
          <Button onClick={() => setShowConfirm(url)}>
            <Icon
              name="trash"
              size="2x"
            />
          Delete
          </Button>
        </ButtonWrapper>
        <ConfirmWrapper open={showConfirmButtons}>
          <ConfirmButton onClick={deletePoll}>Confirm</ConfirmButton>
          <ConfirmButton onClick={() => setShowConfirm(null)}>Cancel</ConfirmButton>
        </ConfirmWrapper>
      </ControlsWrapper>
    </LI>
  );
}

MyPollsListItem.propTypes = {
  poll: React.PropTypes.object,
  viewPoll: React.PropTypes.func,
  deletePoll: React.PropTypes.func,
  setShowConfirm: React.PropTypes.func,
  showConfirm: React.PropTypes.bool,
};

export default MyPollsListItem;
