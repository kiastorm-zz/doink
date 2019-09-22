/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from '@emotion/styled'
import {Box, Flex, Link, Grid} from './atoms';

const Sidebar = styled(Box)`
  flex: 0 0 auto;
  z-index: 1;
`;

const NavLink = styled(Link)`
  text-decoration: none;

  &:hover {
    color: tomato;
  }
`;


const GridCtn = styled(Grid)`
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: [logo] auto [navlinks] 1fr [bottom] auto;
  grid-gap: 4;
  height: 100%;
  align-items: center;
`;

const Logo = styled(props => <Link as="li" {...props} />)`
display: block;
  grid-area: logo;
  text-decoration: none;
  font-weight: 700;
`;

const LogoCtn = styled(Box)`
  grid-column: span 4;
`;

const Bottom = styled(Box)`
  grid-area: bottom;
  grid-column: span 4;
`;
const NavLinks = styled(props => <Flex as="ul" {...props} />)`
  grid-area: navlinks;
  flex-direction: column;
  align-self: start;
  grid-column: span 4;
`;

const SiteSidebar = props => {
  return (
    <Sidebar p={6}>
      <GridCtn p={0}>
          <LogoCtn>
            <Logo to="/" variant="h3" color="primary">doink</Logo>
          </LogoCtn>

          <NavLinks>
            <NavLink to="/sights">sights</NavLink>
            <NavLink to="/sounds">sounds</NavLink>
            <NavLink to="/thoughts">thoughts</NavLink>
            <NavLink to="/wiki">wiki</NavLink>
          </NavLinks>

          <Bottom mt="auto">
            <NavLink to="/playground">go to playground</NavLink>
          </Bottom>
      </GridCtn>
    </Sidebar>
  )
}

export default SiteSidebar
