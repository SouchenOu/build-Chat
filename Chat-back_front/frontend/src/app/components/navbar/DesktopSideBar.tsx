"use client"
import useRoutes from "../../hookes/useRoutes";
import styles from "./DesktopSideBar.module.css"
import DesktopItem from "./DesktopItem";
import { useState } from "react";
import {useMemo} from "react"
import {usePathname} from "next/navigation"
import React from 'react'
import {HiChat} from "react-icons/hi"
import { HiHome } from "react-icons/hi";
import {GiBeachBall} from "react-icons/gi"
import {HiArrowLeftOnRectangle, HiUsers} from "react-icons/hi2"
import {IoIosPerson} from "react-icons/io"
import {signOut} from "next-auth/react"
import useConversation from "../../hookes/useConversation"

const DesktopSideBar = () => {
    const pathname = usePathname()
        const {ConversationId} = useConversation();
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
    // const Routes = useRoutes();
    const [isOpen, setIsOpen] = useState(false);
    return ( 
        <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-20 xl:px-6 lg:overflow-y-auto bg-violet-950/50	 lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between">
           <nav className="mt-4 flex flex-col justify-between">
                <ul role= "list" className="flex flex-col items-center space-y-1">
                        {Routes.map((elem) => (
                            <DesktopItem key={elem.label} href={elem.href} label={elem.label} icon={elem.icon} active={elem.active}/>
                        ))}
                </ul>
           </nav>
        </div>
     );
}
 
export default DesktopSideBar;