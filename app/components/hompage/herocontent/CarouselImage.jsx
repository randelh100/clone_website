import Image from 'next/image';

function CarouselImage({ src, alt, width = 3000, height = 200 }) {
  return (
    <div className="relative h-[580px]">
      <Image src={src} alt={alt} layout="fill" objectFit="cover" objectPosition="center" />
    </div>
  );
}

export default CarouselImage;
