'use client'

import Cart from '@/app/assets/cart/Cart'
import Hamburger from '@/app/assets/hamburger/Hamburger'
import Logo from '@/app/assets/logo/Logo'
import Search from '@/app/assets/search/Search'
import User from '@/app/assets/user/User'
import { accessoriesDropdown, acousticDropdown, ampsAndEffectsDropdown, discoverDropdown, DropdownContents, electricDropdown, gibsonCustomDropdown, lifestyleDropdown, partsAndPickupsDropdown, supportDropdown } from '@/lib/dropdownData'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useState } from 'react'
import Grid from '../Grid/Grid'

const Navbar: React.FC<any> = () => {
    const [isHover, setIsHover] = useState(false)
    const [isDisplayDropdown, setDisplayDropdown] = useState(false)
    const [dropdownValues, setDropdownValues] = useState<DropdownContents>()
    const [gridCols, setGridCols] = useState<number | undefined>();

    console.log("grid cols", gridCols)

    return (
        <div className='fixed top-0 w-full bg-black'>
            <div className='flex justify-between items-center text-[.625em] font-bold uppercase'>
                <div className='block pl-2 md:hidden'>
                    <Hamburger className='text-white text-[20px]' />
                </div>
                <div className='hidden md:block md:tracking-[-.025rem] pl-3'>
                    <span className='px-2 text-white cursor-pointer'>Gibson Garage</span>
                    <span className='px-2 text-white cursor-pointer'>Gibson App</span>
                    <span className='px-2 text-white cursor-pointer'>Find A Dealer</span>
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
            <div className='hidden relative md:flex h-[50px] justify-center items-center text-[12px] font-semibold uppercase'>
                <div className='p-2 relative cursor-pointer group'
                    onMouseEnter={() => {
                        setIsHover(true)
                        setDropdownValues(electricDropdown)
                        setGridCols(electricDropdown?.image ? electricDropdown?.collections.length + 1 : electricDropdown?.collections.length)
                    }}
                    onMouseLeave={() => {
                        setIsHover(false)
                    }
                    }>
                    <span className='text-white'>Electric</span>
                    <div className='absolute bottom-[-12px] left-[50%] text-white hidden group-hover:md:block'>
                        <FontAwesomeIcon icon={faCaretUp} />
                    </div>
                    <div className='absolute bottom-[-5px] w-[80%] hidden group-hover:md:block bg-white h-[2px]'></div>
                </div>
                <div className='p-2 relative cursor-pointer group'
                    onMouseEnter={() => {
                        setIsHover(true)
                        setDropdownValues(acousticDropdown)
                        setGridCols(acousticDropdown?.image ? acousticDropdown?.collections.length + 1 : acousticDropdown?.collections.length)
                    }}
                    onMouseLeave={() => {
                        setIsHover(false)
                    }
                    }>
                    <span className='text-white'>Acoustic</span>
                    <div className='absolute bottom-[-12px] left-[50%] text-white hidden group-hover:md:block'>
                        <FontAwesomeIcon icon={faCaretUp} />
                    </div>
                    <div className='absolute bottom-[-5px] w-[80%] hidden group-hover:md:block bg-white h-[2px]'></div>
                </div>
                <div className='p-2 relative cursor-pointer group'
                    onMouseEnter={() => {
                        setIsHover(true)
                        setDropdownValues(gibsonCustomDropdown)
                        setGridCols(gibsonCustomDropdown?.image ? gibsonCustomDropdown?.collections.length + 1 : gibsonCustomDropdown?.collections.length)
                    }}
                    onMouseLeave={() => {
                        setIsHover(false)
                    }
                    }>
                    <span className='text-white'>Gibson Custom</span>
                    <div className='absolute bottom-[-12px] left-[50%] text-white hidden group-hover:md:block'>
                        <FontAwesomeIcon icon={faCaretUp} />
                    </div>
                    <div className='absolute bottom-[-5px] w-[90%] hidden group-hover:md:block bg-white h-[2px]'></div>
                </div>
                <div className='p-2 relative cursor-pointer group'
                    onMouseEnter={() => {
                        setIsHover(true)
                        setDropdownValues(ampsAndEffectsDropdown)
                        setGridCols(ampsAndEffectsDropdown?.image ? ampsAndEffectsDropdown?.collections.length + 1 : ampsAndEffectsDropdown?.collections.length)
                    }}
                    onMouseLeave={() => {
                        setIsHover(false)
                    }
                    }>
                    <span className='text-white'>Amps & Effects</span>
                    <div className='absolute bottom-[-12px] left-[50%] text-white hidden group-hover:md:block'>
                        <FontAwesomeIcon icon={faCaretUp} />
                    </div>
                    <div className='absolute bottom-[-5px] w-[90%] hidden group-hover:md:block bg-white h-[2px]'></div>
                </div>
                <div className='p-2 relative cursor-pointer group'
                    onMouseEnter={() => {
                        setIsHover(true)
                        setDropdownValues(partsAndPickupsDropdown)
                        setGridCols(partsAndPickupsDropdown?.image ? partsAndPickupsDropdown?.collections.length + 1 : partsAndPickupsDropdown?.collections.length)
                    }}
                    onMouseLeave={() => {
                        setIsHover(false)
                    }
                    }>
                    <span className='text-white'>Parts & Pickups</span>
                    <div className='absolute bottom-[-12px] left-[50%] text-white hidden group-hover:md:block'>
                        <FontAwesomeIcon icon={faCaretUp} />
                    </div>
                    <div className='absolute bottom-[-5px] w-[90%] hidden group-hover:md:block bg-white h-[2px]'></div>
                </div>
                <div className='p-2 relative cursor-pointer group'
                    onMouseEnter={() => {
                        setIsHover(true)
                        setDropdownValues(accessoriesDropdown)
                        setGridCols(accessoriesDropdown?.image ? accessoriesDropdown?.collections.length + 1 : accessoriesDropdown?.collections.length)
                    }}
                    onMouseLeave={() => {
                        setIsHover(false)
                    }
                    }>
                    <span className='text-white'>Accessories</span>
                    <div className='absolute bottom-[-12px] left-[50%] text-white hidden group-hover:md:block'>
                        <FontAwesomeIcon icon={faCaretUp} />
                    </div>
                    <div className='absolute bottom-[-5px] w-[85%] hidden group-hover:md:block bg-white h-[2px]'></div>
                </div>
                <div className='p-2 relative cursor-pointer group'
                    onMouseEnter={() => {
                        setIsHover(true)
                        setDropdownValues(lifestyleDropdown)
                        setGridCols(lifestyleDropdown?.image ? lifestyleDropdown?.collections.length + 1 : lifestyleDropdown?.collections.length)
                    }}
                    onMouseLeave={() => {
                        setIsHover(false)
                    }
                    }>
                    <span className='text-white'>Lifestyle</span>
                    <div className='absolute bottom-[-12px] left-[50%] text-white hidden group-hover:md:block'>
                        <FontAwesomeIcon icon={faCaretUp} />
                    </div>
                    <div className='absolute bottom-[-5px] w-[80%] hidden group-hover:md:block bg-white h-[2px]'></div>
                </div>
                <div className='p-2 relative cursor-pointer group'
                    onMouseEnter={() => {
                        setIsHover(true)
                        setDropdownValues(supportDropdown)
                        setGridCols(supportDropdown?.image ? supportDropdown?.collections.length + 1 : supportDropdown?.collections.length)
                    }}
                    onMouseLeave={() => {
                        setIsHover(false)
                    }
                    }>
                    <span className='text-white'>Support</span>
                    <div className='absolute bottom-[-12px] left-[50%] text-white hidden group-hover:md:block'>
                        <FontAwesomeIcon icon={faCaretUp} />
                    </div>
                    <div className='absolute bottom-[-5px] w-[80%] hidden group-hover:md:block bg-white h-[2px]'></div>
                </div>
                <div className='p-2 relative cursor-pointer group'
                    onMouseEnter={() => {
                        setIsHover(true)
                        setDropdownValues(discoverDropdown)
                        setGridCols(discoverDropdown?.image ? discoverDropdown?.collections.length + 1 : discoverDropdown?.collections.length)
                    }}
                    onMouseLeave={() => {
                        setIsHover(false)
                    }
                    }>
                    <span className='text-white'>Discover</span>
                    <div className='absolute bottom-[-12px] left-[50%] text-white hidden group-hover:md:block'>
                        <FontAwesomeIcon icon={faCaretUp} />
                    </div>
                    <div className='absolute bottom-[-5px] w-[80%] hidden group-hover:md:block bg-white h-[2px]'></div>
                </div>
                {
                    isHover || isDisplayDropdown
                        ?
                        <div className='absolute p-4 top-[55px] w-full shadow-lg bg-white'
                            onMouseEnter={() => setDisplayDropdown(true)}
                            onMouseLeave={() => setDisplayDropdown(false)}>
                            <div className='px-[15px] mx-auto'>
                                <Grid gridCols={gridCols}>
                                    {dropdownValues?.collections.map((row, rowIndex) => {
                                        return (
                                            <div key={rowIndex} className='px-[15px]'>
                                                {row.strings.map((cell, cellIndex) => {
                                                    if (cellIndex === 0) {
                                                        return (
                                                            <div key={cellIndex} className='uppercase text-[15px] mb-1 font-bold'>{cell}</div>
                                                        )
                                                    }
                                                    return (
                                                        <p key={cellIndex} className='capitalize font-black mb-[1rem] hover:underline cursor-pointer'>{cell}</p>
                                                    )
                                                })}
                                            </div>
                                        )
                                    })}
                                    {dropdownValues?.image && <div className='px-[15px]'>
                                        {Object.keys(dropdownValues?.image).map((key, imageIndex) => {
                                            const value = (dropdownValues?.image as any)[key];
                                            if (key === 'label') {
                                                return (
                                                    <div key={imageIndex} className='uppercase text-[15px] mb-1 font-bold'>{value}</div>
                                                )
                                            }
                                            else if (key === 'url') {
                                                return (
                                                    <Image
                                                        key={imageIndex}
                                                        src={value}
                                                        width={500}
                                                        height={500}
                                                        alt='picture'
                                                    />
                                                )
                                            }
                                            return <p key={imageIndex} className='capitalize font-black mb-[1rem] hover:underline cursor-pointer'>{value}</p>
                                        })}
                                    </div>}
                                </Grid>
                            </div>
                        </div>
                        :
                        null
                }
            </div>
        </div>
    )
}

export default Navbar
