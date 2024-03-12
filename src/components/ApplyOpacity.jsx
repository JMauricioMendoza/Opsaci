import styled from 'styled-components';
import { lightBlue, white,
        blackFont, blueFont,
        smaLength2, smaLength3,
        medLength1, medLength2, medLength3,
        smaFont, medFont } from '../utils/stylesRules';

const ApplyOpacity = ({ onClick, isMenuActive }) => {
  return(
    <Opacity
      onClick={onClick}
      $isMenuActive={isMenuActive}/>
  );
};

export default ApplyOpacity;

const Opacity = styled.div`
  backdrop-filter: blur(3px);
  background-color: rgba(32, 32, 32, 0.5);
  bottom: 0;
  height: calc(100vh - ${medLength3});
  opacity: ${({ $isMenuActive }) => $isMenuActive ? '1' : '0'};
  position: fixed;
  transform: scale(${({ $isMenuActive }) => $isMenuActive ? '100%' : '0'});
  transition: opacity .3s;
  width: 100vw;
  z-index: 40;
`;