import { useRecoilValue } from 'recoil';
import { charCountState } from '@src/recoil/counter/selectors';

export const CharacterCount = () => {
  const count = useRecoilValue(charCountState);
  return <>Character Count: {count}</>;
};
