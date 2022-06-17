import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import HeroContainer from './Components/HeroContainer';
import overrides from "./theme"

function App() {
  return (
    <ChakraProvider theme={overrides}>
      <HeroContainer bg="whiteAlpha.500" />
    </ChakraProvider>
  );
}

export default App;
