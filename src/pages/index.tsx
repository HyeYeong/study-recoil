import Head from 'next/head';
import { CharacterCounter } from '@src/components/organisms/CharacterCounter';
import { ShowData } from '@src/components/molecules/ShowData';
import { useColorMode } from '@chakra-ui/color-mode';
import { Heading, Box, Center, AbsoluteCenter, Container, Flex } from '@chakra-ui/layout';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/button';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Head>
        <title>study-recoil</title>
      </Head>
      <main>
        <Heading> Dark Mode toggle using Chakra UI and Next.js </Heading>
        <IconButton onClick={toggleColorMode} aria-label="Toggle Mode" mt={4}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </IconButton>

        <hr />
        <Container bg={'#eee'} w={'100%'} p={[2, 3]} color={'#3e3e3e'}>
          <Box position='relative' bg={'#fff'} m={[2, 3]} p={[3, 3]} borderRadius={'10px'} alignItems={'center'} display={'flex'} color={'red.600'}>
            <Center width={'300px'} as='p'>
              <span>with next js</span>
              <br />
            </Center>
            <CharacterCounter />
            <AbsoluteCenter bg='tomato' p='4' color='white' axis='both'>
              <ShowData />
            </AbsoluteCenter>
          </Box>
        </Container>
        <Container>
          <Flex>
          {/* https://chakra-ui.com/docs/components/flex */}
          </Flex>
        </Container>
      </main>
    </div>
  );
}
