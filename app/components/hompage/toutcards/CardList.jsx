import Image from 'next/image'
import Link from 'next/link'

const CardList = ({ list }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-full pl-10 pr-10 gap-2 mt-4'>
            {list.map((card, index) => (
                <div key={index} className="relative bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow m-2">
                    {card.image && (
                        <div className="relative">
                            <Image
                            className='hover:scale-105'
                                objectFit="cover"
                                src={card.image}
                                alt={`${card.title} ${card.description}`}
                                width={500}
                                height={300}
                                layout="responsive"
                            />
                            <div className="absolute inset-0 flex flex-col justify-between">
                                <div className="p-2">
                                    <h2 className="text-white text-sm">{card.title}</h2>
                                    <h3 className="text-white text-xl">{card.description}</h3>
                                </div>
                                {card.url && (
                                    <div className="absolute bottom-0 left-0 p-2">
                                        <Link href={card.url}>
                                            <span className=" text-white text-xs font-bold inline-block rounded cursor-pointer px-2 py-2">
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



