'use client';

import Button from '@/components/ui/button';
import Currency from '@/components/ui/currency';
import { IProduct } from '@/types';
import { ShoppingCart } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ProductInfoProps {
  data: IProduct;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <h1 className='text-3xl font-bold text-gray-900'>{data.name}</h1>
      <div className='mt-3 flex items-end justify-between'>
        <div className='text-2xl font-bold text-gray-900'>
          <Currency value={data?.price} />
        </div>
      </div>
      <hr className='my-4' />
      <div className='flex flex-col gap-y-6'>
        <div className='flex items-center gap-x-4'>
          <h3 className='font-semibold text-black'>Description:</h3>
          <div>{data?.description}</div>
        </div>
        <div className='flex items-center gap-x-4'>
          <h3 className='font-semibold text-black'>Size:</h3>
          <div>
            {data?.size?.name} ({data?.size?.value})
          </div>
        </div>
        <div className='flex items-center gap-x-4'>
          <h3 className='font-semibold text-black'>Color:</h3>
          <div>{data?.color?.name}</div>
          <div
            className='h-6 w-6 rounded-full border-0'
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className='mt-10 flex items-center gap-x-3'>
        <Button className='flex items-center gap-x-2'>
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
