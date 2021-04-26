import styled from 'styled-components';
import Header from './components/header/Header';

const AppStyle = styled.div`
  display: flex;
  width: 1260px;
  margin: 16px auto;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`;

function App() {
  return (
    <AppStyle>
      <Header />
    </AppStyle>
  );
}

export default App;
