import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Text from "./components/Text";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ChangeableTitle from "./components/ChangeableTitle";
import ImgHolder from "./components/ImgHolder";

function App() {
  const { t } = useTranslation();
    document.body.dataset.theme = localStorage.getItem("theme") || "dark";

  return (
    <>
      <Header />
      <TitleHolder className="title-holder">
        <Text text={t("app.major-title")} size={4} />
        <ChangeableTitle />   
      </TitleHolder>
      <Wrapper>
        <ul className="pointer-list">
          <Text text={t("app.title")} hover={3} size={"1.8"} />
          <Text text={t("app.description")} size={"1.5"} />
          <ImgHolder />
          <Projects />
          <Skills />
          <Contact />
          <BottomTextHolder>
            <Text
              text={t("app.contact.email") + ": TommyDahlin95@outlook.com"}
              size={"1.5"}
            />
            <Text text={t("app.regards.goodDay")} size={"1.5"} />
            <Text text={t("app.regards.regards")} size={"1.5"} />
          </BottomTextHolder>
        </ul>
        </Wrapper>
      <Footer />
    </>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 30vw;
  margin: 0;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 100%;
  }
`;

const TitleHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 90%; 
  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 4rem;
  }
`;

const BottomTextHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
  position: relative;
  bottom: 0;
  left: 0;
`;