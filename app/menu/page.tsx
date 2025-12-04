import React from 'react';
import { menu } from '@/data';
import Link from 'next/link';

const MenuPage = () => {
    return (
        <div className='p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] bg-amber-700 flex flex-col md:flex-row items-center'>
            {menu.map(category => (
                <Link href={category.slug} key={category.id} className='' style={{ backgroundImage: `url(${category.img})` }}>
                    <div>
                        <h1>{category.title}</h1>
                        <p>{category.desc}</p>
                        <button>Explore</button>
                    </div>
                </Link>
            ))}


        </div>

    )
}

export default MenuPage