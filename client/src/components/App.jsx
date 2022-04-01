import React from 'react';
import FlexContainer from './styled/FlexContainer.styled';
import Navbar from './styled/Navbar.styled';
import ProductDisplay from './ProductDisplay';

const App = () => {
  console.log('hello world');

  return (
    <>
      <Navbar />
      {/* flex container of the app, gap between main components */}
      <FlexContainer direction="column" gap="2em">
        <ProductDisplay />
        <h1>Widget 2</h1>
        <h1>Widget 3</h1>
        <h1>Widget 4</h1>
      </FlexContainer>
    </>
  );
};

export default App;
