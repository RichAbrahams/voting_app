import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0em 0.75em 0em 0.75em;
  outline: none;
  &:hover {
    cursor: pointer;
    color:#5e8c5e;
  }
`;

export default Button;
