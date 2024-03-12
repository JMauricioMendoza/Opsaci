import { useState } from 'react';
import styled, { css } from 'styled-components';
import ApplyOpacity from './ApplyOpacity';
import {darkBlue, lightBlue, white,
        blackFont, blueFont,
        smaLength2, smaLength3,
        medLength1, medLength2, medLength3,
        smaFont, medFont } from '../utils/stylesRules';

const Header = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  return(<>
    <ApplyOpacity
      onClick={() => setMenuActive(false)}
      isMenuActive={isMenuActive}/>      
    <StyledNav $isMenuActive={isMenuActive}>
      <Link>Inicio </Link>
      <Link>Acerca de Nosotros</Link>
      <Link>Productos y Servicios</Link>
      <Link>Blog o Noticias</Link>
      <Link>Sucursales</Link>
    </StyledNav>
    <StyledHeader $isMenuActive={isMenuActive}>
      <ButtonLinkContainer>
        <MenuButton
          onClick={() => setMenuActive(!isMenuActive)}
          $isMenuActive={isMenuActive}>
            <ButtonLine $line1 $isMenuActive={isMenuActive}/>
            <ButtonLine $line2 $isMenuActive={isMenuActive}/>
        </MenuButton>
        <LinkContainer>
          <LinkHeader $isMenuActive={isMenuActive}>Acerca de Nosotros</LinkHeader>
          <LinkHeader $isMenuActive={isMenuActive}>Productos y Servicios</LinkHeader>
          <LinkHeader $isMenuActive={isMenuActive}>Sucursales</LinkHeader>
        </LinkContainer>
      </ButtonLinkContainer>
    </StyledHeader>
  </>);
};

export default Header;

const StyledHeader = styled.header`
  align-items: center;
  background-color: ${({ $isMenuActive }) => $isMenuActive ? `${darkBlue}` : `${white}`};;
  display: flex;
  height: ${medLength3};
  justify-content: space-between;
  padding: 0 ${medLength2};
  position: fixed;
  width: 100%;
`;

const StyledNav = styled.nav`
  align-items: flex-start;
  background-color: ${white};
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: ${smaLength3};
  height: calc(100vh - ${medLength3});
  justify-content: center;
  left: ${({ $isMenuActive }) => $isMenuActive ? '0' : '-500px'};
  max-width: 350px;
  padding-left: ${medLength2};
  position: fixed;
  transition: left .3s;
  width: 100%;
  z-index: 40;
`;

const MenuButton = styled.div`
  align-items: center;
  border: 2px solid ${({ $isMenuActive }) => !$isMenuActive ? `${darkBlue}` : `${white}`};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: ${medLength1};
  justify-content: center;
  transition: border .3s;
  width: ${medLength1};
`;

const ButtonLine = styled.span`
  background-color: ${({ $isMenuActive }) => !$isMenuActive ? `${darkBlue}` : `${white}`};
  border-radius: 10px;
  display: block;
  height: 2px;
  position: absolute;
  width: ${smaLength2};

  ${({ $line1 }) => $line1 && css`
    transform: rotate(${({ $isMenuActive }) => !$isMenuActive ? '90deg' : '0'});
    transform-origin: 50%;
    transition: transform .4s ease-in-out, background .3s;
  `};

  ${({ $line2 }) => $line2 && css`
    transform: scaleY(${({ $isMenuActive }) => $isMenuActive ? '0' : '100%'});
    transition: transform .2s ease-in-out;
  `};
`;

const ButtonLinkContainer = styled.div`
  align-items: center;
  display: flex;
  gap: ${smaLength3};
`;

const LinkContainer = styled.div`
  display: flex;
  gap: ${smaLength3};

  @media (max-width: 700px) {
    display: none;
  };
`;

const LinkHeader = styled.a`
  color: ${({ $isMenuActive }) => $isMenuActive ? `${white}` : `${blueFont}`};
  cursor: pointer;
  font-size: ${smaFont};
  transition: transform .3s, color .3s;

  &:hover {
    transform: scale(105%);
  };
`;

const Link = styled.a`
  color:${blackFont};
  cursor: pointer;
  font-size: ${medFont};
  padding: ${smaLength2} ${medLength1};
  position: relative;
  transition: color .3s ease;

  &:hover {
    color: #FFFFFF;
  };

  &::before {  
    transform: scaleX(0);
    transform-origin: bottom right;
  };

  &:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  };

  &::before {
    background: ${lightBlue};
    border-radius: 30px;
    bottom: 0;
    content: " ";
    display: block;
    inset: 0 0 0 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: transform .3s ease;
    z-index: -1;
  };
`;