import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 3em 0em 3em 0em;
  justify-content: space-between;
  align-items: flex-end;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default Wrapper;
