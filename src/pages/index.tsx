import Head from 'next/head';
import { CharacterCounter } from '@src/components/organisms/CharacterCounter';
import { ShowData } from '@src/components/molecules/ShowData';
export default function Home() {
  return (
    <div>
      <Head>
        <title>study-recoil</title>
      </Head>
      <main>
        <h1>study recoil</h1>
        <p>with next js</p>
        <br />
        <CharacterCounter />
        <ShowData />
      </main>
    </div>
  );
}
