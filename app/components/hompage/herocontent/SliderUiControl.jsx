import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import PlayPause from './PlayPause';
import SlideIndicator from './SlideIndicator';
import Test from './PlayPause';

const SliderUiControl = ({ isPlaying, duration, startTime, nextSlideTime, onPrevClick, onNextClick, setIsPlaying, currentSlide, togglePlayPause, setStartTime }) => {



  return (
    <div className="relative flex items-center justify-center space-x-4">
      <Test 
      isPlaying={isPlaying}
      duration={duration}
      setPaused={setIsPlaying}
      togglePlayPause={togglePlayPause}
      setStartTime={setStartTime}
      startTime={startTime}
      />
      <button
        className="bg-black w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
        onClick={onPrevClick}
      >
        <IoIosArrowBack className="text-white text-2xl" />
      </button>

      <button
        className="bg-black w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
        onClick={onNextClick}
      >
        <IoIosArrowForward className="text-white text-2xl" />
      </button>
    </div>
  );
};

export default SliderUiControl;
