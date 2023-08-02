import { IBanner } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/banners`;

const getBanner = async (id: string): Promise<IBanner> => {
  const res = await fetch(`${URL}/${id}`);
  const data = await res.json();

  return data;
};

export default getBanner;
