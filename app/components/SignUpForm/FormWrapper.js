import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  padding: 3em;
  border: 1px solid rgb(237, 234, 234);
  transition: all 300ms;
  background: white;
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
  min-height: 110px;
  @media screen and (max-width: 425px) {
  padding: 2em 0em 3em 0em;
`;
