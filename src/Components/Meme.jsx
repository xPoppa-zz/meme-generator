import {
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import memesData from '../memesData';
import { useState } from 'react';

const Meme = () => {
  const [memeImage, setMemeImage] = useState({
    topText: '',
    bottomText: '',
    randomImage: '',
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const displayImage = () => {
    const getRandomInt = max => Math.floor(Math.random() * max);
    const memesArray = allMemeImages.data.memes;
    const { url } = memesArray[getRandomInt(memesArray.length)];
    setMemeImage(prevImage => {
      return {
        ...prevImage,
        randomImage: url,
      };
    });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setMemeImage(prevMemeImage => ({
      ...prevMemeImage,
      [name]: value,
    }));
  };

  return (
    <Flex p="36px">
      <VStack>
        <HStack>
          <Input
            placeholder="Top line"
            type="text"
            name="topText"
            onChange={handleChange}
          ></Input>
          <Input
            placeholder="Bottom line"
            type="text"
            name="bottomText"
            onChange={handleChange}
          ></Input>
        </HStack>
        <Button
          w="477px"
          h="40px"
          bgGradient="linear(to-l, #A626D3, #672280)"
          color="white"
          onClick={displayImage}
        >
          Get a new meme image 🖼
        </Button>
        <VStack position={'relative'}>
          <Text
            position={'absolute'}
            width="80%"
            left="50%"
            transform="translateX(-50%)"
            my="15px"
            px="5px"
            fontFamily="impact"
            fontSize="2.5em"
            textTransform="uppercase"
            color="white"
            letterSpacing="1px"
            textShadow={
              '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000,-2px 2px 0 #000,0 2px 0 #000,2px 0 0 #000,0 -2px 0 #000,-2px 0 0 #000,2px 2px 5px #000'
            }
            top="0"
            textAlign={'center'}
          >
            {memeImage.topText}
          </Text>
          <Image maxW={'60vw'} src={memeImage.randomImage} />
          <Text
            position={'absolute'}
            width="80%"
            left="50%"
            transform="translateX(-50%)"
            my="15px"
            px="5px"
            fontFamily="impact"
            fontSize="2.5em"
            textTransform="uppercase"
            color="white"
            letterSpacing="1px"
            textShadow={
              '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000,-2px 2px 0 #000,0 2px 0 #000,2px 0 0 #000,0 -2px 0 #000,-2px 0 0 #000,2px 2px 5px #000'
            }
            bottom="0"
            textAlign={'center'}
          >
            {memeImage.bottomText}
          </Text>
        </VStack>
      </VStack>
    </Flex>
  );
};

export default Meme;
