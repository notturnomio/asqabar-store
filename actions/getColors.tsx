import { IColor } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<IColor[]> => {
  const res = await fetch(URL);
  const data = await res.json();

  return data;
};

export default getColors;
