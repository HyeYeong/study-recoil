import { useRecoilState } from 'recoil';
import { ChangeEvent } from 'react';
import { textState } from '@src/recoil/counter/atoms';

export const TextInput = () => {
  const [text, setText] = useRecoilState(textState);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => setText(event.target.value);

  return <input type="text" value={text} onChange={onChange} />;
};
