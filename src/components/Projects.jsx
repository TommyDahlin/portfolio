import Text from "./Text";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Text text={t("projects.title")} size={"4rem"} />
      <ul>
        <ProjectHolder>
          <Text text={t("projects.project1.title")} size={"2rem"}></Text>
          <Text text={t("projects.project1.description")} size={"1.5rem"}></Text>
        </ProjectHolder>
        <ProjectHolder>
          <Text text={t("projects.project2.title")} size={"2rem"}></Text>
          <Text text={t("projects.project2.description")} size={"1.5rem"}></Text>
        </ProjectHolder>
        <ProjectHolder>
          <Text text={t("projects.project3.title")} size={"2rem"}></Text>
          <Text text={t("projects.project3.description")} size={"1.5rem"}></Text>
        </ProjectHolder>
      </ul>
    </div>
  );
};

export default Projects;

const ProjectHolder = styled.div`
  margin: 0;
  gap: 0.5rem;
  border: 3px solid black;
  border-radius: 10px;
  margin-bottom: 1rem;
  padding-left: 1rem;
`;
