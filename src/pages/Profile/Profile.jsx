import {
  StyledProfileSection,
  StyledProfileTitle,
  StyledProfileParagraph,
  StyledProfileSubsection,
  StyledProfileExperienceTitle,
  StyledProfileHeader,
  StyledProfileButton,
} from "./style";
import ExperienceItem from "../../components/ExperienceSectionItem/ExperienceItem";
import Footer from "../../components/Footer/Footer";

const Profile = () => {
  const onButtonClick = () => {
    // Using JavaScript method to get PDF file
    fetch("Profile.pdf")
      .then((response) => response.blob())
      .then((blob) => {
        // Creating a new object URL for the PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Opening the PDF file in a new window
        window.open(fileURL, "_blank");
      });
  };

  return (
    <StyledProfileSection>
      <StyledProfileSubsection>
        <StyledProfileHeader>
          <StyledProfileTitle>Profile</StyledProfileTitle>
          <StyledProfileButton onClick={onButtonClick}>
            View CV
          </StyledProfileButton>
        </StyledProfileHeader>

        <StyledProfileParagraph>👋Lorem, ipsum.</StyledProfileParagraph>
        <StyledProfileParagraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          explicabo debitis nihil tempore delectus impedit.
        </StyledProfileParagraph>
        <StyledProfileParagraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          explicabo debitis nihil tempore delectus impedit.
        </StyledProfileParagraph>
        <StyledProfileParagraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, fugit!
        </StyledProfileParagraph>
      </StyledProfileSubsection>
      <StyledProfileSubsection>
        <StyledProfileExperienceTitle>Experience</StyledProfileExperienceTitle>
        <ExperienceItem
          title="Lorem"
          year="YYYY-YYYY"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis repellendus, ut possimus esse pariatur autem!"
        />
        <ExperienceItem
          title="Lorem"
          year="YYYY-YYYY"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis repellendus, ut possimus esse pariatur autem!"
        />
        <ExperienceItem
          title="Lorem"
          year="YYYY-YYYY"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis repellendus, ut possimus esse pariatur autem!"
        />
        <ExperienceItem
          title="Lorem"
          year="YYYY-YYYY"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis repellendus, ut possimus esse pariatur autem!"
        />
      </StyledProfileSubsection>
      <Footer />
    </StyledProfileSection>
  );
};

export default Profile;
