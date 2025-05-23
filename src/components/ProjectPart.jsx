import React, { useState } from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next";

export const ProjectPart = ({ title,
    description,
    descriptionList,
    img,
    functionList,
    linkList,
    linkNamesList }) => {
  const { t } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dataTheme = document.body.dataset.theme || "dark";
  
  // Handle both single description or array of descriptions
  const descriptions = descriptionList || (description ? [description] : []);
  const functions = functionList || (functionList ? [functionList] : []);
  const links = linkList || (linkList ? [linkList] : []);
  const linkNames = linkNamesList || (linkNamesList ? [linkNamesList] : []);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper isCollapsed={isCollapsed} data-theme={dataTheme}>
      <TitleArea >
        <ProjectTitle>{title}</ProjectTitle>
        <CollapseButton onClick={toggleCollapse}>
          {isCollapsed ? "+" : "-"}
        </CollapseButton>
      </TitleArea>
      {!isCollapsed && (
          <ContentArea>
          {links.map((link, index) => (
              <a href={link} key={index}>{linkNames[index]}</a>
            ))}
          <DescriptionArea>
            <h3>{description}</h3>
            <h3>{t("projects.learned")}</h3>
            {descriptions.map((desc, index) => (
              <DescriptionItem key={index}>{desc}</DescriptionItem>
            ))}
          </DescriptionArea>
          <DescriptionArea>
            <h3>{t("projects.functions")}</h3>
            {functions.map((func, index) => (
              <DescriptionItem key={index}>{func}</DescriptionItem>
            ))}
          </DescriptionArea>
          <ProjectIMG onClick={openModal}>
            <img src={img} alt={title} />
            <ClickInstruction>Click to enlarge</ClickInstruction>
          </ProjectIMG>
        </ContentArea>
      )}
      
      {isModalOpen && (
        <Modal>
          <ModalOverlay onClick={closeModal} />
          <ModalContent>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <ModalImage src={img} alt={title} />
          </ModalContent>
        </Modal>
      )}
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: ${props => props.isCollapsed ? '80px' : '400px'};
  max-height: ${props => props.isCollapsed ? '80px' : 'auto'};
  width: 100%;
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  border: 2px solid var(--border-color);
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  margin-bottom: 2rem;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    min-height: ${props => props.isCollapsed ? '70px' : '300px'};
  }
`;

const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0 20px;
  box-sizing: border-box;
  border-bottom: ${props => props.isCollapsed ? 'none' : '1px solid var(--border-color)'};
`;

const ProjectTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: var(--text-primary);
`;

const CollapseButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 7px;
  background-color: var(--button-bg);
  color: var(--button-text);
  border: 1px solid var(--border-color);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const DescriptionArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
`;

const DescriptionItem = styled.p`
  line-height: 1.6;
  font-size: 1rem;
  color: var(--text-secondary);
  margin: 0.5rem 0;
  position: relative;
  padding-left: 20px;
  
  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: var(--text-primary);
  }
`;

const ProjectIMG = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  cursor: pointer;
  position: relative;
  
  img {
    max-width: 100%;
    max-height: 200px;
    border-radius: 8px;
    object-fit: contain;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.02);
  }
`;

const ClickInstruction = styled.span`
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-top: 5px;
  opacity: 0.7;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ModalContent = styled.div`
  position: relative;
  z-index: 1001;
  max-width: 90%;
  max-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 90vh;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -35px;
  right: -35px;
  width: 40px;
  height: 40px;
  border-radius: 7px;
  background-color: var(--button-bg);
  color: var(--button-text);
  border: none;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    top: -30px;
    right: 0;
    width: 30px;
    height: 30px;
    font-size: 18px;
  }
`;
