import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { generatePath } from "react-router-dom";
import { PROJECT_ROUTE } from "../../routes/const";
import {
  StyledProjectTitle,
  StyledProjectSection,
  StyledProjectParagraph,
  StyledProjectSubSection,
} from "./style";
import { projects } from "../../utils/project";

const Projects = () => {
  return (
    <StyledProjectSection>
      <StyledProjectSubSection>
        <StyledProjectTitle>Projects</StyledProjectTitle>
        <StyledProjectParagraph>
          A selection of recent and past projects
        </StyledProjectParagraph>
      </StyledProjectSubSection>
      <StyledProjectSubSection></StyledProjectSubSection>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          content={project.content}
          src={project.src}
          link={generatePath(PROJECT_ROUTE, { id: project.id })}
        />
      ))}
    </StyledProjectSection>
  );
};

export default Projects;
