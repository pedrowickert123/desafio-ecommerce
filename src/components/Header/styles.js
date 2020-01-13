import styled from 'styled-components';

export const Container = styled.div`
  height: 64px;
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    a {
      font-weight: bold;
      color: #333;

      & + a {
        margin-left: 15px;
      }
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Mobile = styled.div`
  align-items: center;
  width: 100%;
  height: 100%;
  display: none;

  @media (max-width: 900px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const MobileNavigation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);

  z-index: 999;
`;
export const MobileContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  background: #fff;
  padding: 30px;
`;

export const MobileMenu = styled.ul`
  list-style: none;

  li {
    border-bottom: 1px solid #ddd;
    padding: 0 0 10px;
    a {
      font-weight: bold;
      color: #333;
      font-size: 16px;
    }

    & + li {
      margin-top: 20px;
    }
  }
`;

export const Controls = styled.div`
  margin-top: 15px;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  padding-left: 48%;
  padding-top: 20px;

  @media (max-width: 900px) {
    display: flex;
  }

  @media (max-width: 800px) {
    padding-left: 50%;
  }

  @media (max-width: 670px) {
    padding-left: 51%;
  }

  @media (max-width: 650px) {
    padding-left: 52%;
  }

  @media (max-width: 500px) {
    padding-left: 56%;
  }

  @media (max-width: 400px) {
    padding-left: 58%;
  }
`;
