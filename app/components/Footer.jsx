import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={!isDarkMode ?assets.logo : assets.logo_dark} alt='logo' className='w-36 mx-auto mb-2'/>
            <a href={"mailto:rajsinghh314@gmail.com"}className='w-max flex items-center gap-2 mx-auto'>
                <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='mail' className='w-6'/>
                rajsinghh314@gmail.com
            </a>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>&copy; {new Date().getFullYear()} Raj Singh. All rights reserved.</p>
            <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://www.linkedin.com/in/rajsingh-/">LinkedIn</a></li>
                <li><a target='_blank' href="https://www.facebook.com/anjay.rajpaliwal">Facebook</a></li>
                <li><a target='_blank' href="https://github.com/raj-singhh">GitHub</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
