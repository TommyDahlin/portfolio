import React, { useEffect, useState } from 'react'
import Button from './Button'
import Text from './Text'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const Header = () => {
    const { t, i18n } = useTranslation();
    
    // Initialize theme once from localStorage
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark';
    });
    
    // This effect runs when theme changes in state
    useEffect(() => {
        // Update localStorage and DOM when theme state changes
        localStorage.setItem('theme', theme);
        document.body.dataset.theme = theme;
    }, [theme]);
    
    // This effect runs when language changes
    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            setTheme(currentTheme);
            document.body.dataset.theme = currentTheme;
        }
    }, [i18n.language]);

    const toggleTheme = () => {
        setTheme(prevTheme => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return newTheme;
          });
    }
    
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    
    return (
      <Wrapper className="header" theme-data={theme}>
        <Text text={t('header.title')} size="4rem" hover={3}/>
        <ButtonHolder>
        <Button 
          text={t('header.toggleTheme')} 
          onClick={toggleTheme} 
        />
        <div className="language-selector">
          <Button text={t('header.changeLanguage')} onClick={() => changeLanguage(t("header.lang"))} />
        </div>
        </ButtonHolder>
      </Wrapper>
    )
}

export default Header

const ButtonHolder = styled.div`
display: flex;
justify-content: space-between;
min-width: 12vw;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
