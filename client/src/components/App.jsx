import React from 'react';
import Button from './styled/Button.styled';
import FlexContainer from './styled/FlexContainer.styled';
import Avatar from './styled/Avatar.styled';

const App = () => {
  console.log('hello world');

  return (
    <div>
      <FlexContainer direction="column" gap="5em">
        Hello World!
        <Button>Click Me</Button>
        <Avatar />
      </FlexContainer>
    </div>
  );
};

export default App;
