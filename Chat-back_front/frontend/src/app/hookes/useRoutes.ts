"use client"
import {useMemo} from "react"
import {usePathname} from "next/navigation"
import React from 'react'
import {HiChat} from "react-icons/hi"
import {HiArrowLeftOnRectangle, HiUsers} from "react-icons/hi2"
import {signOut} from "next-auth/react"
import useConversation from "./useConversation"
const useRoutes = () => {
        const pathname = usePathname()
        const {ConversationId} = useConversation();
        const Routes = useMemo(() => [
            {
                label: 'Chat',
                href: '/chat',
                icon: HiChat,
                active: pathname === '/conversations' || !!ConversationId
            },
            {
                label: 'Users',
                href: '/Users',
                icon: HiUsers,
                active: pathname === '/Users',

            },
            // {
            //     label : 'Logout',
            //     href: '#',
            //     icon: HiArrowLeftOnRectangle,
            // }
        ], [pathname, ConversationId])
}

export default useRoutes
