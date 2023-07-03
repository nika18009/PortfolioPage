import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const StyledProjectCardSection = styled.div`
  display: flex;
  margin-bottom: 1em;
  height: 10rem;
`;
export const StyledProjectCardTextSection = styled.div`
  width: 20rem;
  margin-left: 1em;
  font-size: 1rem;
`;
export const StyledProjectCardTitle = styled.h3``;
export const StyledProjectCardContent = styled.p`
  line-height: 1.6;
  font-size: 1rem;
  margin: 1em 0;
`;
export const StyledProjectCardPageLink = styled(Link)`
  line-height: 1.6;
  text-decoration: none;
  display: flex;
  align-items: center;
  &:hover {
    color: #9d87e6;
  }
`;
