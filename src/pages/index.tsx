import Head from 'next/head';
import { CharacterCounter } from '@src/components/organisms/CharacterCounter';
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
      </main>
    </div>
  );
}
