'use client';
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';

const links = [
    { id: 1, title: 'Homepage', url: '/' },
    { id: 2, title: 'Menu', url: '/menu' },
    { id: 3, title: 'Working Hours', url: '/' },
    { id: 4, title: 'Contact', url: '/' },

]

const Menu = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            {!open ? <Image src='/open.png' alt='' width={20} height={20} onClick={() => { setOpen(true) }} /> :
                <Image src='/close.png' alt='' width={20} height={20} onClick={() => { setOpen(false) }} />}


            {open && <div className='h-[calc(100vh-6rem)] w-full p-4 bg-red-500 text-white flex flex-col absolute left-0 top-24 items-center justify-center gap-8 text-3xl z-10'>  {
                links.map(item => (
                    <Link key={item.id} href={item.url}>{item.title}</Link>
                ))
            }</div>}

        </div>
    )
}

export default Menu