/* eslint no-confusing-arrow:0 */

import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 0;
  margin: 1rem 0rem 1rem 0rem;
  height: ${(props) => props.open ? '36px' : '0px'};
  overflow: hidden;
  transition: height 300ms;
  color: #222;
`;
