import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Text from "./components/Text";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Photo from "./img/pfp.jpg";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const { t } = useTranslation();
  // Check for saved theme in local storage
    document.body.dataset.theme = localStorage.getItem("theme") || "dark";

  return (
    <>
      <Header />
      <TitleHolder>
        <Text text={t("app.major-title")} size={"4rem"} hover={2} />
      </TitleHolder>
      <Wrapper className="wrapper">
        <ul className="pointer-list">
          <Text text={t("app.title")} hover={3} size={"1.8rem"} />
          <Text text={t("app.description")} size={"1.5rem"} />
          <Projects />
          <Skills />
          <Contact />
          <BottomTextHolder>
            <Text
              text={t("app.contact.email") + ": TommyDahlin95@outlook.com"}
              size={"1.5rem"}
            />
            <Text text={t("app.regards.goodDay")} size={"1.5rem"} />
            <Text text={t("app.regards.regards")} size={"1.5rem"} />
          </BottomTextHolder>
        </ul>
        <ImgHolder>
          <StyledImg src={Photo} alt="Tommy Dahlin" />
        </ImgHolder>
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TitleHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10%; /* Use padding instead of margin */
  width: 90%; /* Adjust width to account for padding */
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
const ImgHolder = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4rem;
  width: calc(100% - 4rem);
  margin-left: 4rem;
  padding: 0;
  position: relative;
  top: 10;
  width: 100%;
  @media (max-width: 768px) {
    padding-left: 0;
    width: 100%;
  }
  img {
    transition: transform 0.35s ease-out;
  }
  img:hover {
    transform: scale(1.05);
    transition: transform 0.35s ease-out;
  }
`;

const StyledImg = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 40%;
  margin: 1rem;
  border: 3px solid #000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  :hover {
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
`;
