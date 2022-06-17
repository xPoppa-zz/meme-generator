import { Image, VStack } from '@chakra-ui/react';
import Header from './Header';
import Meme from './Meme';

const HeroContainer = () => {
  return (
    <VStack>
      <Header />
      <Meme />
      <Image />
    </VStack>
  );
};

export default HeroContainer;
