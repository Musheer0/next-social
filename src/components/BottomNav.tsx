"use client"
import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { FaUserFriends } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { MdManageAccounts } from "react-icons/md";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BottomNav = () => {
    const pathname= usePathname()
    const links = [
        {
            path:'/home',
            name:'home',
            icon: <GoHomeFill />
            ,
        },
        {
            path:'/friends',
            name:'friends',
            icon: <FaUserFriends />
            ,
        },
        {
            path:'/groups',
            name:'groups',
            icon: <MdGroups />
            ,
        },
        {
            path:'/stories',
            name:'stories',
            icon: <FiPlusCircle />
            ,
        },
        {
            path:'/account',
            name:'account',
            icon: <MdManageAccounts />
            ,
        },
    ]
  return (
    <nav className='flex sm:hidden items-center px-2 w-full justify-between'>
       {links.map((e,i)=>{
        return <Link key={i} href={e.path} className='flex flex-col gap-1 pb-2 pt-1 items-center leading-none text-[12px] capitalize'><span className={`text-lg  hover:bg-zinc-900 ${pathname===e.path && 'bg-zinc-900'} px-5 py-1 rounded-full`}>{e.icon}</span>{e.name}</Link>
       })}
    </nav>
  )
}

export default BottomNav