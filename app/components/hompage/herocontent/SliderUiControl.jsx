import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import PlayPause from './PlayPause';
import SlideIndicator from './SlideIndicator';

const SliderUiControl = ({ isPlaying, duration, startTime, nextSlideTime, onPrevClick, onNextClick, togglePlayPause, currentSlide }) => {



  return (
    <div className="relative flex items-center justify-center space-x-4">
      <SlideIndicator
        currentSlide={currentSlide}
        totalSlides={3}
      />
      <PlayPause
        togglePlayPause={togglePlayPause}
        isPlaying={isPlaying}
        duration={duration}
        startTime={startTime}
        nextSlideTime={nextSlideTime}
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
