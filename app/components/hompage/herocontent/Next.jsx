import { IoIosArrowForward } from 'react-icons/io';

const NextButton = ({ onNextClick }) => {
  return (
    <button
      className="bg-black w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
      onClick={onNextClick}
    >
      <IoIosArrowForward className="text-white text-2xl" />
    </button>
  );
};

export default NextButton;
