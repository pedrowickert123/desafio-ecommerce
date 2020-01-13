import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90%;
  margin: 0 auto;
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: bold;
    text-transform: uppercase;
  }

  div.dropdown {
    display: inline-block;
    position: relative;
    overflow: hidden;
    width: 200px;
    background: #fff;
    border: 1px solid #eee;
    border-radius: 0;

    &::after {
      content: '';
      position: absolute;
      z-index: 2;
      top: 12px;
      right: 10px;
      width: 0;
      height: 0;
      border: 6px dashed;
      border-color: #888888 transparent;
      pointer-events: none;
      border-top-style: solid;
      border-bottom: none;
    }

    /* &::before {
      border-bottom-style: solid;
      border-top: none;
    } */
  }

  select {
    position: relative;
    width: 130%;
    margin: 0;
    padding: 6px 8px 6px 10px;
    height: 28px;
    line-height: 14px;
    font-size: 12px;
    color: #62717a;
    text-shadow: 0 1px white;
    background: #fff;
    border: 0;
    border-radius: 0;
    -webkit-appearance: none;
    font-size: 14px;
    text-transform: uppercase;

    &:focus {
      width: 100%;
      outline-offset: -2px;
    }

    & > option {
      margin: 3px;
      padding: 6px 8px;
      text-shadow: none;
      background: #f2f2f2;
      border-radius: 3px;
      cursor: pointer;
    }
  }
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style: none;
  margin-bottom: 30px;

  @media (min-width: 1430px) {
    grid-gap: 10px;
  }

  @media (max-width: 950px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 530px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
