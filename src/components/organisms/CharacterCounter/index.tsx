import { useRecoilState, useRecoilValue } from 'recoil';
import { ChangeEvent } from 'react';
import { textState } from '@src/recoil/counter/atoms';
import { charCountState } from '@src/recoil/counter/selectors';
import { TextInput } from '@src/components/atoms/TextInput';
import { CharacterCount } from '@src/components/atoms/CharacterCount';

export const CharacterCounter = () => {
  const [text] = useRecoilState(textState);
  const count = useRecoilValue(charCountState);

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
