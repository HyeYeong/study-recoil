import Head from 'next/head';
import { CharacterCounter } from '@src/components/organisms/CharacterCounter';
import { ShowData } from '@src/components/molecules/ShowData';
import { useColorMode } from '@chakra-ui/color-mode';
import { Heading, Box } from '@chakra-ui/layout';
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
        <Box m={[2, 3]}>
          <h1>study recoil</h1>
          <p>with next js</p>
          <br />
          <CharacterCounter />
          <ShowData />
        </Box>
      </main>
    </div>
  );
}
