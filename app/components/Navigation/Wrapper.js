import styled from 'styled-components';

const Wrapper = styled.div`
    width: 60%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    transform: translate(0px, -17px);
  @media screen and (max-width: 768px) {
    margin-top:  4em;
    width: 100%;
    justify-content: center;
    transform: translate(0px, 0px);
  }
`;

export default Wrapper;
