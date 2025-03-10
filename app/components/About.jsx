"use client"
import { assets, infoList, frontendData, toolsData, backendData, databaseData, toolData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const About = ({ isDarkMode }) => {
  const [imageSrc, setImageSrc] = useState(assets.maskgroup2);

  return (
    <motion.div className='w-full px-[12%] py-10 scroll-mt-20' id='about'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'>About me</motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className=' w-full flex flex-col lg:flex-row items-center gap-20 my-20'>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}

          className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={imageSrc} alt='user_image' className='w-full rounded-3xl ' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='flex-1'>
          <p className='mb-10 max-w-2xl font-Ovo'>
            I am <span
              className=" cursor-pointer underline decoration-yellow-400"
              onMouseEnter={() => setImageSrc(assets.maskgroup2)}
            >Raj Singh
            </span> a full-stack web developer currently pursuing B.Tech in Computer Science and Engineering from <span
              className="cursor-pointer underline decoration-yellow-400"
              onMouseEnter={() => setImageSrc(assets.college_pic)}
            >
              Raj Kumar Goel Institute of Technology, Ghaziabad (RKGIT)
            </span>.
            I also enjoy Competitive Programming, and you can find me on

            <a href="https://www.leetcode.com/rajsinghh_" target="_blank" rel="noopener noreferrer" className="text-blue-500 "> LeetCode</a>,
            <a href="https://www.hackerrank.com/profile/anjaypaliwal26" target="_blank" rel="noopener noreferrer" className="text-blue-500 "> HackerRank</a>,
            and
            <a href="https://www.codechef.com/users/rajsinghh" target="_blank" rel="noopener noreferrer" className="text-blue-500 "> CodeChef</a>.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li

                whileHover={{ scale: 1.05 }}

                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' key={index}>
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className='my-6 text-gray-700 font-Ovo dark:text-white/80'> Tools I use</motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map(({ name, icon }, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="relative flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 group"
                key={index}
              >
                <Image src={icon} alt={name} className="w-9 sm:w-7" />

                {/* Tooltip */}
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 whitespace-nowrap">
                  {name}
                </span>
              </motion.li>

            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
      {/* tech stack -add here with flex flex row each row two coloum i have list of frontend backend ddatabase and tools which i populate i will show icons of them and also apply motion property */}
      <motion.h2

        className='text-center text-4xl font-Ovo my-10'>Technology Stack</motion.h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div>
          <motion.h4
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='text-2xl font-Ovo my-6'>Frontend</motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className='flex items-center gap-3 sm:gap-5'>
            {frontendData.map(({ name, icon }, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="relative flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 group"
                key={index}
              >
                <Image src={icon} alt={name} className="w-9 sm:w-7" />

                {/* Tooltip */}
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 whitespace-nowrap dark:invert">
                  {name}
                </span>
              </motion.li>

            ))}
          </motion.ul>
        </div>
        <div>
          <motion.h4
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='text-2xl font-Ovo my-6'>Backend</motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className='flex items-center gap-3 sm:gap-5'>
            {backendData.map(({ name, icon }, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="relative flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 group dark:invert"
                key={index}
              >
                <Image src={icon} alt={name} className="w-9 sm:w-7" />

                {/* Tooltip */}
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 whitespace-nowrap dark:invert">
                  {name}
                </span>
              </motion.li>

            ))}
          </motion.ul>
        </div>
        <div>
          <motion.h4
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='text-2xl font-Ovo my-6'>Database</motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className='flex items-center gap-3 sm:gap-5'>
            {databaseData.map(({ name, icon }, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="relative flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 group "
                key={index}
              >
                <Image src={icon} alt={name} className="w-9 sm:w-7" />

                {/* Tooltip */}
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 whitespace-nowrap dark:invert">
                  {name}
                </span>
              </motion.li>

            ))}
          </motion.ul>
        </div>
        <div>
          <motion.h4
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='text-2xl font-Ovo my-6'>Tools & Platforms</motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className='flex items-center gap-3 sm:gap-5'>
            {toolData.map(({ name, icon }, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="relative flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 group"
                key={index}
              >
                <Image src={icon} alt={name} className="w-9 sm:w-7" />

                {/* Tooltip */}
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 whitespace-nowrap">
                  {name}
                </span>
              </motion.li>

            ))}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  )
}

export default About