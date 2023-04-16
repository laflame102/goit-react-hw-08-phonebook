import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 24px;
  text-decoration: none;

  &.active {
    color: #064fd6;
  }
`;
