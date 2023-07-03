import { topbarNavigationItems } from "../../routes/const";

import {
  StyledFooter,
  StyledFooterFbIcon,
  StyledFooterTwIcon,
  StyledFooterInIcon,
  StyledFooterLink,
  StyledFooterLinks,
} from "./Style";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterLinks>
        {topbarNavigationItems.map((navItem) => (
          <StyledFooterLink to={navItem.route} key={navItem.title}>
            {navItem.title}
          </StyledFooterLink>
        ))}
      </StyledFooterLinks>
      <StyledFooterLink>
        <StyledFooterFbIcon />
        <StyledFooterTwIcon />
        <StyledFooterInIcon />
      </StyledFooterLink>
    </StyledFooter>
  );
};

export default Footer;
