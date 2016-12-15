import styled from 'styled-components';

export default styled.input`
  background-color: #fff;
  width: 40em;
  padding: 3px;
  line-height: 30px;
  margin: 0 0 2px;
  overflow: hidden;
  transition: border-color .2s ease;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 2px #eee;
  outline: none;
  @media screen and (max-width: 425px) {
    width: 20em;
  @media screen and (max-width: 375px) {
    width: 15em;
  }
`;
