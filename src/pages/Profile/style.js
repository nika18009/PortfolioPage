import { styled } from "styled-components";

export const StyledProfileSection = styled.div`
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
`;

export const StyledProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledProfileButton = styled.a`
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #9d87e6;
  }
`;

export const StyledProfileTitle = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: -0.15rem;
  line-height: 1.15;
  margin: 1em 0;
`;
export const StyledProfileParagraph = styled.p`
  margin: 1em 0;
`;

export const StyledProfileSubsection = styled.div`
  border-bottom: 1px solid grey;
  margin-bottom: 1em;
`;

export const StyledProfileExperienceTitle = styled.h2`
  font-size: 1.5em;
  margin: 0.83em 0;
`;
