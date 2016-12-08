import styled from 'styled-components';

export default styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  border: 1px solid rgb(237, 234, 234);
  text-align: center;
  transition: all 300ms;
  background: white;
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
  min-height: 110px;
  justify-content: center;
  font-size: 1.25em;
  &:hover {
  cursor: pointer;
  background: #5e8c5e;
  }
`;
