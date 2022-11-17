import {Header, Nav, NavItems } from './AppBar.styled'


const navItems = [
  { href: 'home', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];
 
export const AppBar = () => {
  return (
    <Header>
      <Nav>
        {navItems.map(({ href, text }) => (
          <NavItems to={href} key={href}>
            {text}
          </NavItems>
        ))}
      </Nav>
    </Header>
      )
}