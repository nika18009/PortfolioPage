import { styled } from "styled-components";
import { Link } from "react-router-dom";
import BackgroundImage from "../../assets/wa.png";
import { FiArrowRight } from "react-icons/fi";

export const StyledMainPage = styled.div`
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
`;
export const StyledHeroSection = styled.div`
  margin-top: 2rem;
  height: 22rem;
  background: url(${BackgroundImage});

  text-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  transform: translateY(20px);
`;
export const StyledHeroText = styled.h1``;
export const StyledMainPageTextSection = styled.div``;
export const StyledMainPageText = styled.p`
  font-size: 1.3rem;
  line-height: 1.6;
  margin: 1em 0 1em 0;
`;
export const StyledMainPageLink = styled(Link)`
  font-size: 1.3rem;
  line-height: 1.6;
  text-decoration: none;
  display: flex;
  align-items: center;
  &:hover {
    text-shadow: 0 0 1px gray;
  }
`;

export const StyledArrowIcon = styled(FiArrowRight)`
  color: #161e40;
  font-size: 24px;
  margin-left: 5px;
`;
