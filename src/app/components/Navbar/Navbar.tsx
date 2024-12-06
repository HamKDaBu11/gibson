import Cart from '@/app/assets/cart/Cart'
import Hamburger from '@/app/assets/hamburger/Hamburger'
import Logo from '@/app/assets/logo/Logo'
import Search from '@/app/assets/search/Search'
import User from '@/app/assets/user/User'
import React from 'react'

const Navbar: React.FC<any> = () => {
    return (
        <div className='flex justify-between items-center fixed top-0 w-full bg-black text-[.625em] font-bold uppercase'>
            <div className='block pl-2 md:hidden'>
                <Hamburger className='text-white text-[20px]' />
            </div>
            <div className='hidden md:block pl-3'>
                <span className='px-2 text-white'>Gibson Garage</span>
                <span className='px-2 text-white'>Gibson App</span>
                <span className='px-2 text-white'>Find A Dealer</span>
            </div>
            <Logo className='font-[12px]' />
            <div className='flex'>
                <Search className='text-white text-[20px] px-[10px]' />
                <div className='hidden md:block'>
                    <User className='text-white text-[20px] px-[10px]' />
                </div>
                <Cart className='text-white text-[20px] px-[10px]' />
            </div>
        </div>
    )
}

export default Navbar
