import styled from "styled-components"

const Text = ({ text, size, link, hover, backgroundColor }) => {
    return (
        <TextWrapper hover={hover} backgroundColor={backgroundColor}>
        <StyledText className="text" size={size}>{link ? <a href={link}>{text}</a> : text}</StyledText>
        </TextWrapper>
    )
}

export default Text

const StyledText = styled.p`
    font-size: ${props => props.size || '1rem'};
    transition: transform .35s ease-out;
`
const TextWrapper = styled.div`
margin: 0;
padding: 0;
background-color: ${props => props.backgroundColor ? props.backgroundColor : 'transparent'};
:hover {
    transform: scale(${props => props.hover ? '1' : '1'});
    transition: transform .35s ease-out;   
}
`