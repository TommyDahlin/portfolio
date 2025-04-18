import styled from "styled-components";

const Text = ({ text, size, link, backgroundColor, color }) => {
  return (
    <TextWrapper backgroundColor={backgroundColor}>
      <StyledText className="text" color={color} size={size}>
        {link ? <a href={link}>{text}</a> : text}
      </StyledText>
    </TextWrapper>
  );
};

export default Text;

const StyledText = styled.p`
  font-size: ${(props) => props.size + "rem" || "1rem"};
  transition: transform 0.35s ease-out;
  color: ${(props) => (props.color ? props.color : "inherit")} !important;
`;
const TextWrapper = styled.div`
  margin: 0;
  padding: 0;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
`;
