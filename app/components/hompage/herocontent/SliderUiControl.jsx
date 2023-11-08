import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import PlayPause from './PlayPause';
import SlideIndicator from './SlideIndicator';
import Test from './PlayPause';
import Prev from './Prev';
import Next from './Next';

const SliderUiControl = ({ isPlaying, duration, startTime, nextSlideTime, onPrevClick, onNextClick, setIsPlaying, currentSlide, togglePlayPause, setStartTime, keyForPlayPause }) => {

  return (
    <div className="relative flex items-center justify-center space-x-4 mr-16">
      <Test
        key={keyForPlayPause}
        isPlaying={isPlaying}
        duration={duration}
        setPaused={setIsPlaying}
        togglePlayPause={togglePlayPause}
        setStartTime={setStartTime}
        startTime={startTime}
      />
      <Prev onPrevClick={onPrevClick} />
      <Next onNextClick={onNextClick} />
    </div>
  );
};

export default SliderUiControl;