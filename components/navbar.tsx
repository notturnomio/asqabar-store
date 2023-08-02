import getCategories from '@/actions/getCategories';
import MainNav from '@/components/mainNav';
import NavbarActions from '@/components/navbarActions';
import Container from '@/components/ui/container';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <header className='border-b'>
      <Container>
        <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
          <Link href='/' className='ml-4 flex lg:ml-0 gap-x-2'>
            {/* <p className='font-bold text-xl'>Asqabar</p> */}
            <Image
              src='/asqabar-logo-black.svg'
              alt='Asqabar Store'
              width={114}
              height={33}
            />
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
