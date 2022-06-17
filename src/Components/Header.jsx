import { Box, Heading, HStack, Image, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box
      w="100vw"
      h="65px"
      bgGradient="linear(to-l, #A626D3, #672280)"
      p="20px"
    >
      <HStack>
        <Image src="./images/troll.png" h="30px" w="30px" mr="6px" />
        <Heading variant={'memeHeader'} pr="50vw">
          Meme Generator
        </Heading>
        <Text variant={'memeHeader'}>React Course - Project 3</Text>
      </HStack>
    </Box>
  );
};

export default Header;
