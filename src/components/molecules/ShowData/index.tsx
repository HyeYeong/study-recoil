import { useRecoilState } from 'recoil';
import { dataState } from '@src/recoil/data/atoms';

export const ShowData = () => {
  const [data, setData] = useRecoilState<string[]>(dataState);

  const changeData = () => {
    const newList = [...data, '"test", '];
    setData(newList);
  };

  return (
    <article>
      <button onClick={() => changeData()}>[USE ME]</button>
      {data}
    </article>
  );
};
