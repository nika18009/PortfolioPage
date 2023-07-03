/* eslint-disable react/no-unescaped-entities */
import {
  StyledMainPage,
  StyledHeroSection,
  StyledHeroText,
  StyledMainPageText,
  StyledMainPageLink,
  StyledMainPageTextSection,
  StyledArrowIcon,
} from "./style";
import { PROFILE_ROUTE } from "../../routes/const";

const Main = () => {
  return (
    <StyledMainPage>
      <StyledHeroSection>
        <StyledHeroText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
          ipsam?
        </StyledHeroText>
      </StyledHeroSection>
      <StyledMainPageTextSection>
        <StyledMainPageText>
          Welcome to my portfolio, where you'll find projects that I developed
          during my Front end learning journey
        </StyledMainPageText>
        <StyledMainPageLink to={PROFILE_ROUTE}>
          View Profile <StyledArrowIcon />
        </StyledMainPageLink>
      </StyledMainPageTextSection>
    </StyledMainPage>
  );
};

export default Main;
