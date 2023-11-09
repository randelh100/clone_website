const SlideIndicator = ({ currentSlide, totalSlides }) => {
  const adjustedSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Adjust the current slide index

  return (
    <div className="flex space-x-2 mt-10">
      {Array.from({ length: totalSlides }, (_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full ${index === adjustedSlide ? 'bg-white' : 'bg-gray-400'
            }`}
        ></div>
      ))}
    </div>
  );
};

export default SlideIndicator;
