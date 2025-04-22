import Text from "./Text"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
const Skills = () => {
    const { t } = useTranslation();
    const skillsList = t("skills.skillsList", { returnObjects: true });
    const learningList = t("skills.learningList", { returnObjects: true });
    const dataTheme = localStorage.getItem("theme") || "dark";

  return (
    <>
      <Text text={t("skills.skillsHeader")} size={"4rem"} />
      <StyledUl className="ul-holder" data-theme={dataTheme}>
        {skillsList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </StyledUl>
      <Text text={t("skills.learningHeader")} size={"2rem"} />
      <StyledUl className="ul-holder" data-theme={dataTheme}>
        {learningList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </StyledUl>
    </>
  )
}

export default Skills

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  justify-content: center;
  max-width: 60vh;
  border-radius: 10px;
  `;
