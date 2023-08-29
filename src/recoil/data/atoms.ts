import { atom } from 'recoil';

export const dataState = atom<string[]>({
  key: 'dataState',
  default: [],
});

