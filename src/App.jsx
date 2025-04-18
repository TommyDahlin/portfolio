import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Text from "./components/Text";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Photo from "../public/475845946_10162492645418184_7553713412501506310_n.jpg";

function App() {
  const { t } = useTranslation();
  // Check for saved theme in local storage
  document.body.dataset.theme = localStorage.getItem("theme") || "dark";
  return (
    <>
      <Header />
      <Wrapper className="wrapper" >
        <TextHolder>
        <Text text={t('app.major-title')} size={"4rem"} hover={2}/>
        <ul className="pointer-list">
          <TextHolder>
          <Text
          text={t('app.title')}
          hover={3} 
          size={"1.8rem"} />
          <Text
            text={t('app.description')}
            size={"1.5rem"} />
            </TextHolder>
            <TextHolder>
          <Text
            text={t('app.projects.title')}
            hover={3}
            size={"1.8rem"} />
          <Text 
          text={t('app.projects.description')}
          size={"1.5rem"} />
            </TextHolder>
            <TextHolder>
          <Text
            text={t('app.skills.title')}
            hover={3}
            size={"1.8rem"} />
          <Text 
          text={t('app.skills.description')}
          size={"1.5rem"} />
            </TextHolder>
          <TextHolder>
          <Text
            text={t('app.contact.title')}
            hover={3}
            size={"1.8rem"} />
          <LinkHolders>
            <Text text = {t('app.contact.description')}
            size={"1.5rem"} />
            <Text text = "LinkedIn" size={"1.5rem"} link={"https://www.linkedin.com/in/tommy-dahlin-5171a72aa/"}/>
            <Text
            text=" or "
            size={"1.5rem"} />
            <Text text = "GitHub" size={"1.5rem"} link={"https://github.com/TommyDahlin"}/>  
            </LinkHolders>
            </TextHolder>
            <BottomTextHolder>
          <Text 
          text={t('app.contact.email') + ": TommyDahlin95@outlook.com"}
          size={"1.5rem"} />
          <Text 
          text="Have a great day!" 
          size={"1.5rem"} />
          <Text 
          text="Best regards, Tommy Dahlin" 
          size={"1.5rem"} />
          </BottomTextHolder>
        </ul>
        </TextHolder>
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

`;
const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
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
  flex-direction: column;
  justify-items: flex-end;
  margin-left: 4rem;
  padding: 0;
  width: 100%;
  img {
    transition: transform .35s ease-out;
  }
  img:hover {
    transform: scale(1.05);
    transition: transform .35s ease-out;
  }
`;
const LinkHolders = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  gap: 0.5rem;
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