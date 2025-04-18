import Text from "./Text";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const ChangeableTitle = () => {
  const { t } = useTranslation();

  const [selectedOption, setSelectedOption] = useState("title1");
  const [titleColor, setTitleColor] = useState("#ffffff");
  const [titleSize, setTitleSize] = useState(2.0);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const renderInputOptions = () => {
    switch (selectedOption) {
      case "title1": // Color
        return (
          <InputContainer>
            <label htmlFor="colorPicker">Choose Title Color:</label>
            <input
              type="color"
              id="colorPicker"
              value={titleColor}
              onChange={(e) => setTitleColor(e.target.value)}
            />
          </InputContainer>
        );
      case "title2": // Size
        return (
          <InputContainer>
            <label htmlFor="sizeRange">Adjust Title Size: {titleSize}rem</label>
            <input
              type="range"
              id="sizeRange"
              min="1"
              max="8"
              step="0.1"
              value={titleSize}
              onChange={(e) => setTitleSize(parseFloat(e.target.value))}
            />
          </InputContainer>
        );
     

      default:
        return null;
    }
  };

  return (
    <>
        <Holder>
      <Wrapper>
        <label htmlFor="selectable">{t("changeableTitle.label")}</label>
        <Text text="Title" size={titleSize} color={titleColor} />
        </Wrapper>
        <Wrapper>
        <select
          name="selectable"
          id="selectable"
          className="selectable"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          {" "}
          <option value="title1" >Color</option>
          <option value="title2">Size</option>
        </select>
        {renderInputOptions()}
        <Text text={t("changeableTitle.description")} size={"1.5rem"} />
        </Wrapper>
        </Holder>
    </>
  );
};

export default ChangeableTitle;

const Holder = styled.div`
max-width: 20rem;
max-height: 20rem;
min-width: 20rem;
min-height: 20rem;
border: 2px solid black;
border-radius: 10px;
`;

const Wrapper = styled.div`
max-height: 10rem;
min-height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;

  .selectable {
    margin-top: 1rem;
    padding: 0.5rem;
    font-size: 1.5rem;
    border-radius: 5px;
    border: none;
    color: black;
    background-color: white;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        color: white;
        background-color: black;
    }
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  width: 100%;
  max-width: 300px;
  
  label {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }
  
  input, select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1.2rem;
    border-radius: 5px;
    border: none;
    background-color: inherit;
    color: black;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  input[type="color"] {
    height: 40px;
  }
  
  input[type="range"] {
    height: 10px;
    background: #000000;
    outline: none;
    border-radius: 5px;
    
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 20px;
      height: 20px;
      background: #646cff;
      cursor: pointer;
      border-radius: 50%;
    }
    
    &::-moz-range-thumb {
      width: 20px;
      height: 20px;
      background: #646cff;
      cursor: pointer;
      border-radius: 50%;
    }
  }
`;
