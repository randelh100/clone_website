import Link from "next/link";
import Image from "next/image";


const FooterImage = ({ src, href, alt }) => {
    return (
        <li className='hidden md:block'>
            <Link href={href}>
                <Image
                    src={src}
                    alt={alt}
                    className='h-12 white-logo'
                    width={80}
                    height={300}
                />
            </Link>
        </li>

    );
}

export default FooterImage;