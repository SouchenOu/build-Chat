"use client"
import {useMemo} from "react"
import React from 'react'
import {HiChat} from "react-icons/hi"
import { HiHome } from "react-icons/hi";
import {GiBeachBall} from "react-icons/gi"
import {HiArrowLeftOnRectangle, HiUsers} from "react-icons/hi2"
import {IoIosPerson} from "react-icons/io"
import {signOut} from "next-auth/react"
import {usePathname} from "next/navigation"
import useConversation from "../../hookes/useConversation"
import MobileItem from "./MobileItem"
import styles from "./MobileSideBar.module.css"

const MobileSideBar = () => {
    const pathname = usePathname()
    const {ConversationId, isOpen} = useConversation();
    const Routes = useMemo(() => [
        {
            label: 'Home',
            href: '/',
            icon: HiHome,
            active: pathname === '/',
            
        },
        {
            label: 'Chat',
            href: '/chat',
            icon: HiChat,
            active: pathname === '/conversations' || !!ConversationId
        },
        {
            label: 'Game',
            href: '/Game',
            icon: GiBeachBall,
            active: pathname === '/conversations' || !!ConversationId
        },
        {
            label: 'Users',
            href: '/Users',
            icon: HiUsers,
            active: pathname === '/Users',

        },
        {
            label : 'Settings',
            href: '#',
            icon: HiArrowLeftOnRectangle,
        }
    ], [pathname, ConversationId])
    if(isOpen){
        return null;
    }
    return ( 
        <div className="fixed justify-between w-full bottom-0 z-40 flex items-center  text-gray-500  bg-violet-950/75 border-t-[1px] lg:hidden">
            {Routes.map((item) => (
                    <MobileItem key={item.label} href={item.href} icon={item.icon}/>
            ))}
        </div>
     );
}
 
export default MobileSideBar;