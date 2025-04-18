import Text from "./Text"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
const Skills = () => {
    const { t } = useTranslation();
  return (
    <>
      <Text text={t("skills.skillsHeader")} size={"4rem"} />
      <StyledUl>
        <li>{t("skills.skillsList.skill1")}</li>
        <li>{t("skills.skillsList.skill2")}</li>
        <li>{t("skills.skillsList.skill3")}</li>
        <li>{t("skills.skillsList.skill4")}</li>
        <li>{t("skills.skillsList.skill5")}</li>
      </StyledUl>
      <Text text={t("skills.learningHeader")} size={"2rem"} />
      <StyledUl>
        <li>{t("skills.learningList.learning1")}</li>
        <li>{t("skills.learningList.learning2")}</li>
        <li>{t("skills.learningList.learning3")}</li>
        <li>{t("skills.learningList.learning4")}</li>
        <li>{t("skills.learningList.learning5")}</li>
        <li>{t("skills.learningList.learning6")}</li>
        <li>{t("skills.learningList.learning7")}</li>
        <li>{t("skills.learningList.learning8")}</li>
        <li>{t("skills.learningList.learning9")}</li>
        <li>{t("skills.learningList.learning10")}</li>
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
  justify-content: center;
`;
