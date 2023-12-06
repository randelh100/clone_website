import Image from 'next/image'
import Link from 'next/link'

const CardList = ({ list }) => {
    return (
        <div className='flex overflow-x-auto md:overflow-hidden w-full gap-4 mt-4'>
            {list.map((card, index) => (
                <div key={index} className="relative bg-white rounded-sm shadow-md hover:shadow-lg transition-shadow flex-none md:flex-grow-0 md:flex-shrink h-[40rem] w-[70%] md:w-1/2">
                    {card.image && (
                        <div className="relative h-full">
                            <Image
                                className='hover:scale-105'
                                src={card.image}
                                alt={`${card.title} ${card.description}`}
                                layout="fill"
                                objectFit="cover"
                            />
                            <div className="absolute inset-0 flex flex-col justify-between">
                                <div className="p-2">
                                    <h2 className="text-white text-sm">{card.title}</h2>
                                    <h3 className="text-white text-xl">{card.description}</h3>
                                </div>
                                {card.url && (
                                    <div className="absolute bottom-0 left-0 p-2">
                                        <Link href={card.url}>
                                            <span className=" text-white text-xs font-bold inline-block rounded cursor-pointer p-2">
                                                {card.buttonText || 'Click Here'}
                                            </span>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default CardList



