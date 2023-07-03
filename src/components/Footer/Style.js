import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export const StyledFooter = styled.footer`
display:flex;
flex-direction: column;
align-items: center;
`;

export const StyledFooterLink = styled(Link)`
  font-size: 1rem;
  line-height: 1.6;
  text-decoration: none;
  margin-right: 1em;
`;

export const StyledFooterLinks = styled.div`
`;

export const StyledFooterFbIcon = styled(FaFacebook)`
  line-height: 1.6;
  text-decoration: none;
  margin-right: 1em;
`;

export const StyledFooterInIcon = styled(FaTwitter)`
  line-height: 1.6;
  text-decoration: none;
  margin-right: 1em;
`;

export const StyledFooterTwIcon = styled(FaInstagram)`
  line-height: 1.6;
  text-decoration: none;
  margin-right: 1em;
`;
