import { useParams } from "react-router-dom";
import { StyledProjectSection } from "../Projects/style";
import {
  StyledOneProjectTitle,
  StyledOneProjecDescription,
  StyledOneProjecPictures,
  StyledOneProjecLearnings,
  StyledBacktoProjectsLink,
  StyledOneProjecLearning,
  StyledOneProjecDescriptionItem,
  StyledOneProjecPicture,
} from "./style";
import { projects } from "../../utils/project";
import { PROJECTS_ROUTE } from "../../routes/const";
import { VscCircleSmall } from "react-icons/vsc";

const Project = () => {
  const { id } = useParams();

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  const {
    title,
    laguages,
    description,
    learnings,
    firstlearning,
    secondlearning,
    thirdlearning,
    fouthlearning,
    fivelearning,
    src,
    projectFirstImg,
    projectSecondImg,
    projectThirdImg,
  } = project;

  return (
    <StyledProjectSection>
      <div>
        <StyledOneProjecPicture src={src} alt="" />
      </div>
      <StyledOneProjectTitle>
        <div>
          <h2>{title}</h2>
          <h5>{laguages}</h5>
        </div>
      </StyledOneProjectTitle>
      <div>
        <StyledOneProjecDescription>
          <h3>Project description:</h3>
          {description ? (
            <StyledOneProjecDescriptionItem>
              {description}
            </StyledOneProjecDescriptionItem>
          ) : (
            <StyledOneProjecDescriptionItem>
              Project is not ready yet.
            </StyledOneProjecDescriptionItem>
          )}
        </StyledOneProjecDescription>
        <StyledOneProjecPictures>
          <h2>Additional Project pictures</h2>
          <StyledOneProjecPicture src={projectFirstImg} alt="" />
          <StyledOneProjecPicture src={projectSecondImg} alt="" />
          <StyledOneProjecPicture src={projectThirdImg} alt="" />
        </StyledOneProjecPictures>

        <StyledOneProjecLearnings>
          <h2>Learned Skills</h2>
          <StyledOneProjecLearning>{learnings}</StyledOneProjecLearning>

          <StyledOneProjecLearning>
            <VscCircleSmall />
            {firstlearning}
          </StyledOneProjecLearning>
          <StyledOneProjecLearning>
            <VscCircleSmall /> {secondlearning}
          </StyledOneProjecLearning>
          <StyledOneProjecLearning>
            <VscCircleSmall /> {thirdlearning}
          </StyledOneProjecLearning>
          <StyledOneProjecLearning>
            <VscCircleSmall /> {fouthlearning}
          </StyledOneProjecLearning>
          <StyledOneProjecLearning>
            <VscCircleSmall /> {fivelearning}
          </StyledOneProjecLearning>
        </StyledOneProjecLearnings>
      </div>
      <div>
        <StyledBacktoProjectsLink to={PROJECTS_ROUTE}>
          Back to all projects
        </StyledBacktoProjectsLink>
      </div>
    </StyledProjectSection>
  );
};

export default Project;
