import Carousel from 'react-bootstrap/Carousel';

function Caption({ title, description, actionLabel }) {
    return (
      <div className='absolute bottom-10 left-0 z-50 flex flex-col justify-start p-4 space-y-2 ml-6 max-w-md'>
        <h1 className='text-white text-sm'>{title}</h1>
        <h2 className='text-white'>{description}</h2>
        <button className='bg-blue-500 text-white text-sm rounded-full px-2 py-2 max-w-[150px] overflow-hidden truncate'>
          {actionLabel}
        </button>
        <p></p>
      </div>
    );
  }
  

export default Caption;

  