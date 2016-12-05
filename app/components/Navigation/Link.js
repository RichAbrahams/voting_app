import styled from 'styled-components';

const Link = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 1.5em;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

export default Link;
