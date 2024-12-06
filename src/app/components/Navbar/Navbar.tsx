import Cart from '@/app/assets/cart/Cart'
import Hamburger from '@/app/assets/hamburger/Hamburger'
import Logo from '@/app/assets/logo/Logo'
import Search from '@/app/assets/search/Search'
import User from '@/app/assets/user/User'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Navbar: React.FC<any> = () => {
    return (
        <div className='fixed top-0 w-full bg-black'>
            <div className='flex justify-between items-center text-[.625em] font-bold uppercase'>
                <div className='block pl-2 md:hidden'>
                    <Hamburger className='text-white text-[20px]' />
                </div>
                <div className='hidden md:block md:tracking-[-.025rem] pl-3'>
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
            <div className='hidden md:flex h-[50px] justify-center items-center text-[11px] font-semibold uppercase'>
                <div className='p-2 relative cursor-pointer group'>
                    <span className='text-white'>Electric</span>
                    <div className='absolute bottom-[-6px] left-[50%] text-white hidden group-hover:md:block'>
                        <FontAwesomeIcon icon={faCaretUp} />
                    </div>
                    <div className='absolute bottom-0 w-[80%] hidden group-hover:md:block bg-white h-[2px]'></div>
                </div>
                <div className='p-2 relative cursor-pointer group'>
                    <span className='text-white'>Acoustic</span>
                    <div className='absolute bottom-[-6px] left-[50%] text-white hidden group-hover:md:block'>
                        <FontAwesomeIcon icon={faCaretUp} />
                    </div>
                    <div className='absolute bottom-0 w-[80%] hidden group-hover:md:block bg-white h-[2px]'></div>
                </div>
                <div className='p-2 relative cursor-pointer group'>
                    <span className='text-white'>Gibson Custom</span>
                    <div className='absolute bottom-[-6px] left-[50%] text-white hidden group-hover:md:block'>
                        <FontAwesomeIcon icon={faCaretUp} />
                    </div>
                    <div className='absolute bottom-0 w-[90%] hidden group-hover:md:block bg-white h-[2px]'></div>
                </div>
                <div className='p-2 relative cursor-pointer group'>
                    <span className='text-white'>Amps & Effects</span>
                    <div className='absolute bottom-[-6px] left-[50%] text-white hidden group-hover:md:block'>
                        <FontAwesomeIcon icon={faCaretUp} />
                    </div>
                    <div className='absolute bottom-0 w-[90%] hidden group-hover:md:block bg-white h-[2px]'></div>
                </div>
                <div className='p-2 relative cursor-pointer group'>
                    <span className='text-white'>Parts & Pickups</span>
                    <div className='absolute bottom-[-6px] left-[50%] text-white hidden group-hover:md:block'>
                        <FontAwesomeIcon icon={faCaretUp} />
                    </div>
                    <div className='absolute bottom-0 w-[90%] hidden group-hover:md:block bg-white h-[2px]'></div>
                </div>
                <div className='p-2 relative cursor-pointer group'>
                    <span className='text-white'>Accessories</span>
                    <div className='absolute bottom-[-6px] left-[50%] text-white hidden group-hover:md:block'>
                        <FontAwesomeIcon icon={faCaretUp} />
                    </div>
                    <div className='absolute bottom-0 w-[85%] hidden group-hover:md:block bg-white h-[2px]'></div>
                </div>
                <div className='p-2 relative cursor-pointer group'>
                    <span className='text-white'>Lifestyle</span>
                    <div className='absolute bottom-[-6px] left-[50%] text-white hidden group-hover:md:block'>
                        <FontAwesomeIcon icon={faCaretUp} />
                    </div>
                    <div className='absolute bottom-0 w-[80%] hidden group-hover:md:block bg-white h-[2px]'></div>
                </div>
                <div className='p-2 relative cursor-pointer group'>
                    <span className='text-white'>Support</span>
                    <div className='absolute bottom-[-6px] left-[50%] text-white hidden group-hover:md:block'>
                        <FontAwesomeIcon icon={faCaretUp} />
                    </div>
                    <div className='absolute bottom-0 w-[80%] hidden group-hover:md:block bg-white h-[2px]'></div>
                </div>
                <div className='p-2 relative cursor-pointer group'>
                    <span className='text-white'>Discover</span>
                    <div className='absolute bottom-[-6px] left-[50%] text-white hidden group-hover:md:block'>
                        <FontAwesomeIcon icon={faCaretUp} />
                    </div>
                    <div className='absolute bottom-0 w-[80%] hidden group-hover:md:block bg-white h-[2px]'></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
