import getBanner from '@/actions/getBanner';
import getProducts from '@/actions/getProducts';
import Banner from '@/components/banner';
import ProductList from '@/components/productList';
import Container from '@/components/ui/container';

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const banner = await getBanner('edab10dd-a3fd-4209-8026-50fc88e5f89c');

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Banner data={banner} />
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title='Featured Products' items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
