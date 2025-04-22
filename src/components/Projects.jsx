import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { ProjectPart } from "./ProjectPart";
import Celemo from "../assets/Celemo.png";
import Claims from "../assets/Claims.png"
import Schackeriet from "../assets/Schackeriet.png"

const Projects = () => {
  const { t } = useTranslation();
  return (
    <Holder>
      <h2>Projects</h2>
      <ProjectPart 
        title={t("projects.project1.title")}
        description={t("projects.project1.description")}
        functionList={t("projects.project1.functionList",
        { returnObjects: true })}
        descriptionList={t("projects.project1.descriptionList",
        { returnObjects: true })} 
        img={Celemo}
        linkList = {t("projects.project1.linkList",
          { returnObjects: true })}
          linkNamesList = {t("projects.project1.linkNames",
          { returnObjects: true })}
        
      />
      <ProjectPart 
        title={t("projects.project2.title")} 
        description={t("projects.project2.description")}
        descriptionList={t("projects.project2.descriptionList",
        { returnObjects: true })}
        functionList={t("projects.project2.functionList",
        { returnObjects: true })}
        img={Claims} 
      />
      <ProjectPart 
        title={t("projects.project3.title")} 
        description={t("projects.project3.description")}
        descriptionList={t("projects.project3.descriptionList",
        { returnObjects: true })} 
        functionList={t("projects.project3.functionList",
        { returnObjects: true })}
        img={Schackeriet} 
        linkList = {t("projects.project3.linkList",
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
