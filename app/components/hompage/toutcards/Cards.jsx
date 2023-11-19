import CardImage1 from '../../../../public/card_photos/CardImage1.jpg'
import CardImage2 from '../../../../public/card_photos/CardImage2.jpg'
import CardList from './CardList'

const Cards = () => {
    const shopCertified = [
        {
            image: CardImage1,
            title: 'HondaTrue',
            description: 'Find your Certified Pre-Owned Vehicle.',
            url: '/link-for-card-1',
            buttonText: 'SHOP CERTIFIED'
        }
    ];

    const learnMore = [
        {
            image: CardImage2,
            title: 'MyGarage for Owners',
            description: 'Manuals, warrenty info, and more.',
            url: '/link-for-card-2',
            buttonText: 'LEARN MORE'
        }
    ];

    return (
       <div> 
        <CardList list={[...shopCertified, ...learnMore]}/>
       </div>
    );
}

export default Cards