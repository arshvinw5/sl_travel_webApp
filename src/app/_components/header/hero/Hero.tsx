import Image from 'next/image';

const Hero = () => {
  return (
    <div className='relative w-full h-screen'>
      <div>
        <Image
          src='/images/hero/Travel.jpg'
          alt='Hero_Image'
          fill={true}
          className='object-cover h-screen overflow-hidden'
        />
        <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      </div>
    </div>
  );
};

export default Hero;
