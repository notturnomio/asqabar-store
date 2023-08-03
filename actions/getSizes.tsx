import { ISize } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<ISize[]> => {
  const res = await fetch(URL);
  const data = await res.json();

  return data;
};

export default getSizes;
