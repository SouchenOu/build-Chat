"use client"

import clsx from "clsx"
import Link from "next/link"
import { IconType } from 'react-icons';

import React, { Component } from "react";


interface DesktopProps {
    label: string;
    icon: any;
    href: string;
    onClick?: () => void;
    active?: boolean;
}

const DesktopItem : React.FC<DesktopProps> = ({
    label,
    icon : Icon,
    href,
    onClick,
    active
}) => {
    const handleClick = () => {
        if(onClick) {
            return onClick();
        }
    }
    return (  
        <li onClick={handleClick}>
                <Link href={href} className={clsx(`group flex gap-x-4 rounded-lg p-8 text-lg leading-5 font-semibold text-gray-500 hover:text-black hover:bg-gray-100`, active && 'bg-gray-100 text-black')}>
                    <Icon className="h-6 w-6"/>
                    <span className="sr-only">{label}</span>
                </Link>
        </li>
    );
}
 
export default DesktopItem;