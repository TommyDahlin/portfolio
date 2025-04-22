import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { ProjectPart } from "./ProjectPart";
import GithubWhite from "../img/github-mark-white.svg";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <Holder>
      <ProjectPart 
        title={t("projects.project1.title")}
        description={t("projects.project1.description")}
        functionList={t("projects.project1.functionList",
          { returnObjects: true })}
        descriptionList={t("projects.project1.descriptionList",
          { returnObjects: true })} 
        img={GithubWhite} 
        linkList={t("projects.project1.linkList",
          { returnObjects: true })}
        linkNamesList = {t("projects.project1.linkNames",
          { returnObjects: true })}
      ></ProjectPart >
      <ProjectPart 
        title={t("projects.project2.title")} 
        description={t("projects.project2.description")}
        descriptionList={t("projects.project2.descriptionList",
        { returnObjects: true })} 
        img={GithubWhite} 
      />
      <ProjectPart 
        title={t("projects.project3.title")} 
        description={t("projects.project3.description")}
        descriptionList={t("projects.project3.descriptionList",
        { returnObjects: true })} 
        img={GithubWhite} 
        linkList={t("projects.project3.linkList",
          { returnObjects: true })}
        linkNamesList = {t("projects.project3.linkNames",
          { returnObjects: true })}
      />
    </Holder>
  );
};

export default Projects;

const Holder = styled.div`
  margin: 0;
  padding: 0;
  max-width: 30vw;
  @media (max-width: 768px) {
    max-width: 80vw;
  }
`;
