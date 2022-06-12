import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { motion } from 'framer-motion'
export default function PropertyType() {
    const [activeButton, setActiveButton] = useState(' ')
    const button_Data = [
        {
            "name": "Kezhan",
            "value": "Kezhan",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            "name": "Serviced apartment",
            "value": "Serviced apartment",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            "name": "Flat",
            "value": "Flat",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            "name": "Botique Hotel",
            "value": "Botique Hotel",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            "name": "Nature Lodge",
            "value": "Nature Lodge",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            "name": "Resort",
            "value": "Resort",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },

        {
            "name": "Hostel",
            "value": "Hostel",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },

        {
            "name": "Hotel",
            "value": "Hotel",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
    ]
    return (
        <>
            <Head>
                <title>Vivante</title>
                {/* <meta name="description" content="" /> */}
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <Link href="/hosting">
                <img src="../../VivanteLogo.png" className="fixed top-10 left-10 h-10" />
            </Link>
            <div className="overflow-hidden flex h-screen w-full">
                <div className="w-2/4 btn-booking text-white flex flex-col items-start px-10 justify-center">
                    <motion.h1 initial={{ opacity: 0, y: -200 }} animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1
                        }
                    }} className="text-5xl font-medium">
                        Which of these best<br /> describes your place?
                    </motion.h1>
                </div>
                <div className="w-2/4 bg-offWhite overflow-y-auto relative text-black min-h-screen ">
                    <div className="w-2/4 h-20 z-40 border-b border-offGray bg-offWhite fixed top-0 right-0 flex items-center justify-end gap-x-4 px-10">
                        <button className=" bg-offWhite2 text-xs px-2 py-1 rounded-full font-semibold">Help</button>
                        <button className=" bg-offWhite2 text-xs px-2 py-1 rounded-full font-semibold">Save and Exit</button>
                    </div>
                    <motion.div initial={{ opacity: 0, x: 200 }} animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1
                        }
                    }} className="flex gap-y-5 flex-col items-center justify-center my-24">
                        {button_Data.map((item, index) => (
                            <button value={item.value} key={item.index} onClick={() => { setActiveButton(index) }}
                                className={activeButton === index ? `w-7/12 border border-[#00000060] text-left bg-black text-white duration-200 flex flex-col px-5 rounded-2xl py-4`
                                    :
                                    `w-7/12 border border-[#00000060] text-left hover:bg-black hover:text-white duration-200 flex flex-col px-5 rounded-2xl py-4`} >
                                <h1 className="text-lg font-medium capitalize">{item.name}</h1>
                                <p className="text-greyTone1">{item.text}</p>

                            </button >
                        ))}
                    </motion.div>
                    <div className="w-2/4 z-40 bg-offWhite fixed bottom-0 right-0">
                        <div className="w-[16%] h-[2px] bg-dark"></div>
                        <div className="flex items-center justify-between px-10 py-3">
                            <button className="underline underline-offset-4 font-semibold">Back</button>
                            <Link href="./privacy-type" className="btn-booking px-8 rounded-lg py-3"><button className=" text-white bg-black px-8 rounded-lg py-3">
                                Next</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </ >
    )
}