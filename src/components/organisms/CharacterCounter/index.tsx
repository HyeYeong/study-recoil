import { useRecoilState } from 'recoil';
import { textState } from '@src/recoil/counter/atoms';
import { TextInput } from '@src/components/atoms/TextInput';
import { CharacterCount } from '@src/components/atoms/CharacterCount';

export const CharacterCounter = () => {
  const [text] = useRecoilState(textState);

  return (
    <article>
      <TextInput />
      <p>
        Echo: {text}
        <br />
        <CharacterCount />
      </p>
    </article>
  );
};
