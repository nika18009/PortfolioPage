import PropTypes from "prop-types";

import {
  StyledExperienceSection,
  StyledExperienceTitle,
  StyledExperienceContent,
  StyledExperienceTitleName,
} from "./style";

const ExperienceItem = ({ title, year, content }) => {
  return (
    <StyledExperienceSection>
      <StyledExperienceTitle>
        <StyledExperienceTitleName>{title} </StyledExperienceTitleName>
        {year}
      </StyledExperienceTitle>
      <StyledExperienceContent>{content}</StyledExperienceContent>
    </StyledExperienceSection>
  );
};

ExperienceItem.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ExperienceItem;
