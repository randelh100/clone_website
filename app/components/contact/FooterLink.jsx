import Link from "next/link";

const FooterLink = ({href, text}) => {
    return (
       <li>
        <Link href={href} className="text-white">{text}</Link>
       </li>
    );
}

export default FooterLink;