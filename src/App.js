import styled from 'styled-components';
import Header from './components/Header';
import FrontPage from './components/FrontPage';

const App = () => {
  return (
    <AppStyled>
      <Header/>
      <FrontPage/>
    </AppStyled>
  );
}

export default App;

const AppStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;