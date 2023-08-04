'use client';

import Gallery from '@/components/gallery';
import Modal from '@/components/ui/modal';
import usePreviewModal from '@/hooks/usePreviewModal';
import { useEffect, useState } from 'react';
import ProductInfo from './productInfo';

const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  if (!product) return null;

  return (
    <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
      <div className='w-full grid grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8'>
        <div className='sm:col-span-4 lg:col-span-5'>
          <Gallery images={product.images} />
        </div>
        <div className='sm:col-span-8 lg:col-span-7'>
          <ProductInfo data={product} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
