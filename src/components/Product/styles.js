import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;

  span {
    margin-top: 15px;
    font-weight: bold;
    text-transform: uppercase;
  }

  img {
    max-width: 350px;

    @media (max-width: 1560px) {
      max-width: 300px;
    }

    @media (max-width: 1380px) {
      max-width: 250px;
    }

    @media (max-width: 1200px) {
      max-width: 200px;
    }

    @media (max-width: 950px) {
      max-width: 250px;
    }

    @media (max-width: 865px) {
      max-width: 200px;
    }

    @media (max-width: 700px) {
      max-width: 150px;
    }

    @media (max-width: 530px) {
      max-width: 20 0px;
    }
  }
`;
