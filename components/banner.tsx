import { IBanner } from '@/types';

interface BannerProps {
  data: IBanner;
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  return (
    <div className='p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden'>
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className='rounded-xl relative aspect-square md:aspect-[2.4/1] bg-cover bg-center overflow-hidden'
      >
        <div className='h-full w-full flex flex-col justify-center items-center text-center gap-y-8 bg-black bg-opacity-20'>
          <div className='font-bold text-white lg:leading-tight md:leading-tight sm:leading-tight tracking-wider drop-shadow-lg text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs'>
            {data?.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
