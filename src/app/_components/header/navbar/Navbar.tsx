import Button from './button/Button';

const Navbar = () => {
  return (
    <div className='absolute w-full flex justify-between items-center'>
      <h1 className=' text-white font-bold text-2xl z-20 cursor-pointer fixed top-[25px] left-[25px]'>
        ArshvinW5.
      </h1>
      <div className='fixed top-[20px] right-[25px] '>
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
