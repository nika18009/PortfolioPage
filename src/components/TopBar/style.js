import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { FiSun } from "react-icons/fi";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 640px;
  /* background-color: plum; */
  margin: 0 auto;
`;

export const StyledNavItem = styled.div`
  margin: 0.5rem;
  display: flex;
  align-items: center;
`;

export const StyledNavLink = styled(Link)`
  text-decoration: none;
  margin-right: 0.5rem;
  font-size: 18px;
  &:hover {
    text-shadow: 0 0 1px gray;
  }
`;
export const StyledSunIcon = styled(FiSun)`
  font-size: 24px;
  background-color: #ededed;
  border-radius: 5px;
  padding: 3px;
`;
