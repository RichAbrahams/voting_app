import styled from 'styled-components';

export default styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  border: 1px solid rgb(237, 234, 234);
  border-radius: 6px;
  padding: 0.5em;
  text-align: center;
  transition: all 300ms;
  &:hover {
  cursor: pointer;
  background: #444;
  }
`;
