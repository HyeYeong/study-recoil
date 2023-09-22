import Head from 'next/head';
import { CharacterCounter } from '@src/components/organisms/CharacterCounter';
import { ShowData } from '@src/components/molecules/ShowData';
import { useColorMode } from '@chakra-ui/color-mode';
import { Heading, Box, Center, AbsoluteCenter, Container, Flex, Spacer, Grid, GridItem } from '@chakra-ui/layout';
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
        <Container bg={'#eee'} w={'100%'} mb="30px" p={[2, 3]} color={'#3e3e3e'}>
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

        <Heading as='h2'>FLEX and Grid</Heading>
        <Container mb="30px">
          <Flex>
            <Box bg={'red'} color="white" p={'30px'}>box1</Box>
            <Spacer/>
            <Box bg={'red.300'} color="white" p={'30px'}>box2</Box>
          </Flex>
        </Container>
        <Container>
          <p>Flex and Spacer: Full width, equal Spacing</p>
          <Flex>
            <Box w='70px' h='10' bg='red.500' />
            <Spacer />
            <Box w='170px' h='10' bg='red.500' />
            <Spacer />
            <Box w='180px' h='10' bg='red.500' />
          </Flex>

          <p>Grid: The children start at the beginning, the 1/3 mark and 2/3 mark</p>
          <Grid templateColumns='repeat(3, 1fr)' gap={6}>
            <Box w='70px' h='10' bg='blue.500' />
            <Box w='170px' h='10' bg='blue.500' />
            <Box w='180px' h='10' bg='blue.500' />
          </Grid>
          <p>Template columns</p>
          <Grid templateColumns='repeat(5, 1fr)' gap={6}>
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
          </Grid>
          <p>Spanning columns</p>
          <Grid
            h='200px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}
          >
            <GridItem rowSpan={2} colSpan={1} bg='tomato' />
            <GridItem colSpan={2} bg='papayawhip' />
            <GridItem colSpan={2} bg='papayawhip' />
            <GridItem colSpan={4} bg='tomato' />
          </Grid>
        </Container>
      </main>
    </div>
  );
}
