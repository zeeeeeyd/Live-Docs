import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = ({ children }: HeaderProps ) => {
  return (
    <div className='header'>
        <Link className='md:flex-1' href='/'>
            <Image 
            src='/assets/icons/logo.svg'
            alt='Logo'
            width={120}
            height={32}
            className='hidden md:block'
            />
            <Image 
            src='/assets/icons/logo-icon.svg'
            alt='Logo'
            width={32}
            height={32}
            className='mr-2 md:hidden'
            />
        </Link>
        {children}
    </div>
  )
}

export default Header