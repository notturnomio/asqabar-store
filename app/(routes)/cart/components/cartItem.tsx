'use client';

import Currency from '@/components/ui/currency';
import IconButton from '@/components/ui/iconButton';
import useCart from '@/hooks/useCart';
import { IProduct } from '@/types';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface CartItemProps {
  data: IProduct;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <li className='flex py-6 border-b'>
      <div className='relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48'>
        <Image
          fill
          src={data.images[0].url}
          alt=''
          className='object-cover object-center'
        />
      </div>
      <div className='relative ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
        <div className='absolute z-10 right-0 top-0 ml-1'>
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className='relative pr-9 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:pr-0'>
          <div className='flex justify-between'>
            <p className='text-lg font-semibold text-black'>{data.name}</p>
          </div>

          <div className='mt-1 flex text-sm'>
            <p className='text-gray-500'>{data.color.name}</p>
            <p className='text-gray-500 ml-2 border-l border-gray-200 pl-2'>
              {data.size.name}
            </p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
