const CustomSlideIndicators = ({ currentSlide, totalSlides }) => {
    return (
      <div className="flex space-x-2 mt-10 ">
        {Array.from({ length: totalSlides }, (_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    );
  };
  
  export default CustomSlideIndicators;
  