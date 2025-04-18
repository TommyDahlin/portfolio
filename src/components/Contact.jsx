import Text from "./Text"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
const Contact = () => {
    const { t } = useTranslation()
  return (
    <>
        <Text text={t("app.contact.title")} hover={3} size={"1.8rem"} />
          <LinkHolders>
            <Text text={t("app.contact.description")} size={"1.5rem"} />
            <Text
              text="LinkedIn"
              size={"1.5rem"}
              link={"https://www.linkedin.com/in/tommy-dahlin-5171a72aa/"}
            />
            <Text text=" or " size={"1.5rem"} />
            <Text
              text="GitHub"
              size={"1.5rem"}
              link={"https://github.com/TommyDahlin"}
            />
          </LinkHolders>
    </>
  )
}

export default Contact

const LinkHolders = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  gap: 0.5rem;
`;