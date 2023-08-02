'use client';

import Currency from '@/components/ui/currency';
import IconButton from '@/components/ui/iconButton';
import { IProduct } from '@/types';
import { Expand, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
  data: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className='bg-white group cursor-pointer rounded-xl border hover:shadow-lg p-3 space-y-3'>
      <div className='aspect-square rounded-xl bg-gray-100 relative'>
        <Image
          key={data.images[0].id}
          src={data?.images?.[0]?.url}
          alt={data.name}
          fill
          className='aspect-square object-cover rounded-md'
        />
        <div className='opacity-0 group-hover:opacity-90 transition absolute w-full px-6 bottom-5'>
          <div className='flex gap-x-6 justify-center'>
            <IconButton
              onClick={() => {
                console.log('Add to cart');
              }}
              icon={<Expand size={20} className='text-gray-600' />}
            />
            <IconButton
              onClick={() => {
                console.log('Add to cart');
              }}
              icon={<ShoppingCart size={20} className='text-gray-600' />}
            />
          </div>
        </div>
      </div>
      <div>
        <p className='font-semibold text-lg'>{data.name}</p>
        <p className='text-sm text-gray-500'>{data.category.name}</p>
      </div>
      <div className='flex items-center justify-between'>
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
