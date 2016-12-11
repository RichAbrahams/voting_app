import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 3em 0em 1.5em 0em;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 5px solid #444;
  margin-bottom: 3em;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default Wrapper;
