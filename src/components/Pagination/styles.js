import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Paginator = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  li + li {
    margin-left: 10px;
  }

  li {
    cursor: pointer;
    transition: 0.2s;
  }
`;

export const PagePrev = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;

  color: #333;
  background-color: ${props => (props.disabled ? '#ddd' : '#f0f3ff')};

  pointer-events: ${props => props.disabled && 'none'};
  opacity: ${props => props.disabled && 0.5};

  &:hover {
    background-color: #ee4d64;
    color: #fff;
  }
`;

export const PageItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 12px;

  color: ${props => (props.active ? '#fff' : '#333')};
  background-color: ${props => (props.active ? '#83a484' : '#fff')};

  &:hover {
    background-color: #83a484;
    color: #fff;
  }
`;

export const PageNext = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;

  color: #333;
  background-color: ${props => (props.disabled ? '#ddd' : '#f0f3ff')};

  pointer-events: ${props => props.disabled && 'none'};
  opacity: ${props => props.disabled && 0.5};

  &:hover {
    background-color: ${'#83a484'};
    color: #fff;
  }
`;

export const PaginatorInfo = styled.div`
  color: #666;
`;
