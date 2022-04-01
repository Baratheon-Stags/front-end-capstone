import React from 'react';
import FlexContainer from './styled/FlexContainer.styled';
import Navbar from './styled/Navbar.styled';
import ProductDisplay from './ProductDisplay';
import AppContainer from './styled/AppContainer.styled';

const App = () => {
  console.log('hello world');

  return (
    <>
      <Navbar />
      <AppContainer>
        <FlexContainer direction="column" gap="5em">
          <ProductDisplay />
          <h1>Widget 2</h1>
          <h1>Widget 3</h1>
          <h1>Widget 4</h1>
        </FlexContainer>
      </AppContainer>
    </>
  );
};

export default App;
