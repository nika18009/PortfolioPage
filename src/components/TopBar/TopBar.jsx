// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { UserContext } from "../../context/UserContext";
import { MAIN_ROUTE, topbarNavigationItems } from "../../routes/const";
import {
  StyledNav,
  StyledNavItem,
  StyledNavLink,
  StyledSunIcon,
} from "./style";
import "./TopBar.css";

// import { showUserFullName } from "../../utils/user";
// import { FaUserCircle } from "react-icons/fa";

const Topbar = () => {
  return (
    <StyledNav>
      <StyledNavItem>
        <StyledNavLink to={MAIN_ROUTE}>Veronika Tarasova</StyledNavLink>
      </StyledNavItem>
      <StyledNavItem>
        {topbarNavigationItems.map((navItem) => (
          <StyledNavLink to={navItem.route} key={navItem.title}>
            {navItem.title}
          </StyledNavLink>
        ))}
        <StyledSunIcon />
      </StyledNavItem>
    </StyledNav>
  );
};

export default Topbar;
