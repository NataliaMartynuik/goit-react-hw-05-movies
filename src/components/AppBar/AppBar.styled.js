import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Header = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.secondary};
`
export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  
  
`;

export const NavItems = styled(NavLink)`
  color: ${({ theme: { colors } }) => colors.secondary};
  font-size: 25px;
  font-weight: 700;
  &.active,
  &:hover {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;