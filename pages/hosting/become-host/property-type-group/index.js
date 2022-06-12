import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from "framer-motion"
export default function PropertyType() {
    const [activeButton, setActiveButton] = useState(' ')
    const button_Data = [
        {
            "name": "Flat",
            "value": "Flat",
            "img": "https://a0.muscache.com/im/pictures/eadbcbdb-d57d-44d9-9a76-665a7a4d1cd7.jpg?im_w=240"
        },
        {
            "name": "House",
            "value": "House",
            "img": "https://a0.muscache.com/im/pictures/d1af74db-58eb-46bf-b3f5-e42b6c9892db.jpg?im_w=240"
        },
        {
            "name": "Secondary Unit",
            "value": "Secondary Unit",
            "img": "https://a0.muscache.com/im/pictures/eadbcbdb-d57d-44d9-9a76-665a7a4d1cd7.jpg?im_w=240"
        },
        {
            "name": "Unique Space",
            "value": "Unique Space",
            "img": "https://a0.muscache.com/im/pictures/eadbcbdb-d57d-44d9-9a76-665a7a4d1cd7.jpg?im_w=240"
        },
        {
            "name": "Boutique Hotel",
            "value": "Boutique Hotel",
            "img": "https://a0.muscache.com/im/pictures/eadbcbdb-d57d-44d9-9a76-665a7a4d1cd7.jpg?im_w=240"
        },
        {
            "name": "Bed and Breakfast",
            "value": "Bed and Breakfast",
            "img": "https://a0.muscache.com/im/pictures/eadbcbdb-d57d-44d9-9a76-665a7a4d1cd7.jpg?im_w=240"
        },
    ]
    // useEffect(() => {
    //     console.log(button_Data[activeButton].value)
    // })

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
                    <motion.h1 initial={{ opacity: 0, y: 200 }} animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1
                        }
                    }}
                        className="text-5xl font-medium">What kind of place will <br />you host?</motion.h1>
                </div>
                <div className="w-2/4 bg-offWhite overflow-y-auto relative text-black min-h-screen ">
                    <div className="w-2/4 h-20 z-40 border-b bg-offWhite fixed top-0 right-0 flex items-center justify-end gap-x-4 px-10">
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
                            <button key={item.index} value={item.value} onClick={() => { setActiveButton(index) }}
                                className={activeButton === index ? `w-7/12 border border-[#00000060] bg-black text-white flex px-5 justify-between items-center rounded-2xl py-4 duration-200`
                                    :
                                    `w-7/12 border border-[#00000060] hover:bg-black hover:text-white duration-200 flex px-5 justify-between items-center rounded-2xl py-4 bg-none text-black`} >
                                <h1 className="text-lg font-medium capitalize">{item.name}</h1>
                                <img className="object-cover h-16 w-16 rounded-lg" src={item.img} />
                            </button >
                        ))}
                    </motion.div>
                    <div className="w-2/4 z-40 bg-offWhite fixed bottom-0 right-0">
                        <div className="w-[8%] h-[2px] bg-dark"></div>
                        <div className="flex items-center justify-between px-10 py-3">
                            <button className="underline underline-offset-4 font-semibold">Back</button>
                            <Link href="./property-type" className="btn-booking px-8 rounded-lg py-3"><button className=" text-white bg-black px-8 rounded-lg py-3">
                                Next</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </ >
    )
}

