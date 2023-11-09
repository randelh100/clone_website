import Carousel from 'react-bootstrap/Carousel';

function Caption({ title, description, actionLabel, subtitle, button }) {
  return (
    <div className='absolute bottom-0 left-9 flex flex-col justify-start ml-6 max-w-sm'>
      <h1 className='text-white text-sm'>{title}</h1>
      <h2 className='text-white'>{description}</h2>
      {/* <button className='border-2 rounded-lg text-white'>{button}</button> */}
      <button className='bg-blue-500 text-white text-sm rounded-full px-2 py-2 max-w-[120px] overflow-hidden truncate'>
        {actionLabel}
      </button>
      <div className='mt-10 -mb-3'>
        <p className='text-gray-300 text-xs'>{subtitle}</p>
      </div>
    </div>

  );
}


export default Caption;

