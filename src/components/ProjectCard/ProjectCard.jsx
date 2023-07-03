import PropTypes from "prop-types";
import { StyledArrowIcon } from "../../pages/Main/style";
import {
  StyledProjectCardSection,
  StyledProjectCardTitle,
  StyledProjectCardContent,
  StyledProjectCardPageLink,
  StyledProjectCardTextSection,
} from "./Style";
import "./Project.css";

const ProjectCard = ({ title, content, link, src }) => {
  return (
    <StyledProjectCardSection>
      <img src={src} alt="" />
      <StyledProjectCardTextSection>
        <StyledProjectCardTitle>{title}</StyledProjectCardTitle>
        <StyledProjectCardContent>{content}</StyledProjectCardContent>
        <StyledProjectCardPageLink to={link}>
          Read more <StyledArrowIcon />
        </StyledProjectCardPageLink>
      </StyledProjectCardTextSection>
    </StyledProjectCardSection>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
