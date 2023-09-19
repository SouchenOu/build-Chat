"use client"
import Link from "next/link"
import clsx from "clsx"
interface MobileItemsProps {
    href: string;
    icon: any;
    active?: boolean;
}
const MobileItem: React.FC<MobileItemsProps> = ({
    href,
    icon : Icon,
}) => {
    return (  
        <Link href={href} className={clsx(`group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-gray-500 hover:text-black hover:bg-gray-100`)}>
            <Icon className="h-6 w-6"/>
        </Link>
    );
}
 
export default MobileItem;