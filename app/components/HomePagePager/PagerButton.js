/* eslint no-confusing-arrow:0 */

import styled from 'styled-components';

export default styled.button`
  color: ${(props) => props.disabled ? 'rgba(51, 51, 51, 0.3);' : 'rgba(51, 51, 51, 1);'};
  outline: none;
`;
