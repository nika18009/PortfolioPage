import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const StyledOneProjecPicture = styled.img`
  width: 640px;
  height: 300px;
`;

export const StyledOneProjectTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5em;
`;

export const StyledOneProjecDescription = styled.div`
  margin: 1em 0;
`;
export const StyledOneProjecDescriptionItem = styled.p`
  font-size: 1.1rem;
  margin-top: 5px;
`;
export const StyledOneProjecPictures = styled.div`
  margin: 1em 0;
`;

export const StyledOneProjecLearnings = styled.div`
  margin: 1em 0;
`;

export const StyledBacktoProjectsLink = styled(Link)`
  font-size: 0.8rem;
  line-height: 1.6;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  &:hover {
    text-shadow: 0 0 1px gray;
  }
`;

export const StyledOneProjecLearning = styled.p`
  margin: 1em 0;
  font-size: 1.1rem;
`;
