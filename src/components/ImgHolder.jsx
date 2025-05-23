import React from 'react'
import styled from 'styled-components'
import Photo from "../img/pfp.jpg";

const ImgHolder = () => {
  return (
    <>
    <ImgHolderDiv>
        <StyledImg src={Photo} alt="Tommy Dahlin" />
    </ImgHolderDiv>
    </>
  )
}

export default ImgHolder

const ImgHolderDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4rem;
  width: calc(100% - 4rem);
  margin-left: 4rem;
  padding: 0;
  position: relative;
  top: 10;
  width: 100%;
  img {
    transition: transform 0.35s ease-out;
  }
  img:hover {
    transform: scale(1.05);
    transition: transform 0.35s ease-out;
  }
  @media (max-width: 768px) {
    padding-left: 0;
    margin-left: 0;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      margin: 0;
    }
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
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    margin: 0;
  }
`;