import { IoIosArrowBack } from 'react-icons/io';

const PrevButton = ({ onPrevClick }) => {
  return (
    <button
      className="bg-black w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
      onClick={onPrevClick}
    >
      <IoIosArrowBack className="text-white text-2xl" />
    </button>
  );
};

export default PrevButton;
