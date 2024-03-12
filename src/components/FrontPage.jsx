import styled from 'styled-components';
import Animation from './Animation';
import {darkBlue, lightBlue, white,
        blackFont, blueFont, goldenFont,
        smaLength1, smaLength2, smaLength3,
        medLength1, medLength2, medLength3,
        larLength1, larLength2, larLength3,
        smaFont, medFont, larFont} from '../utils/stylesRules';

const FrontPage = () => {
  return(
    <StyledSection>
      <Titulos>
        <StyledH1>Bienvenido a <span>Cooperativa Opsaci</span></StyledH1>
        <StyledH2>Inversión, Crédito y Ahorro con valores.</StyledH2>
      </Titulos>
      <ImageContainer>
        <Animation/>
      </ImageContainer>
    </StyledSection>
  );
};

export default FrontPage;

const StyledSection = styled.section`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin-top: ${medLength3};
  width: 100%;

  @media (max-width: 1320px) {
    gap: ${medLength2};
    justify-content: center;
    max-width: 90%;
  };

  @media (max-width: 950px) {
    padding: ${medLength3} 0;
  };
`;

const Titulos = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${medLength1};
`;

const StyledH1 = styled.h1`
  color: ${darkBlue};
  display: flex;
  flex-direction: column;
  font-size: ${medLength2};
  gap: ${smaLength1};
  text-align: left;

  span {
    color: #006400;
  };

  @media (max-width: 465px) {
    font-size: ${medLength1};
  };

  @media (max-width: 405px) {
    font-size: ${medLength1};
  };
`;

const StyledH2 = styled.h2`
  color: ${blueFont};
  font-size: ${larFont};

  @media (max-width: 465px) {
    font-size: ${medFont};
  };

  @media (max-width: 405px) {
    font-size: ${medFont};
  };
`;

const ImageContainer = styled.div`
  min-width: 300px;
  width: 45%;
`;