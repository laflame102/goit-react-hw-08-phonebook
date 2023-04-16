import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  font-size: 24px;
  text-decoration: none;

  &.active {
    color: #064fd6;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 30px;
`;
