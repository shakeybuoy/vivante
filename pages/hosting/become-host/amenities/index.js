import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { motion } from 'framer-motion'

export default function PropertyType() {
    const [activeButton, setActiveButton] = useState(false)
    const arr = [];
    const data = [
        { value: 'Pool' },
        { value: 'Hot Tub' },
        { value: 'Patio' },
        { value: 'BBQ Grill' },
        { value: 'Fire Pit' },
        { value: 'Pool Table' },
        { value: 'Indoor Fireplace' },
        { value: 'Outdoor Dining Area' },
        { value: 'Exercise Equipment' },
    ]
    const favs = [
        { value: 'Wifi' },
        { value: 'Kitchen' },
        { value: 'TV' },
        { value: 'Washing Machine' },
        { value: 'Free Parking' },
        { value: 'Air Conditioning' },
        { value: 'Dedicated Workspace' },
        { value: 'Outdoor Shower' },
    ]
    const safety = [
        { value: 'Smoke Alarm' },
        { value: 'First Aid Kit' },
        { value: 'Carbon Monoxide Alarm' },
        { value: 'Fire Extinguisher' }
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
                    <motion.h1 initial={{ opacity: 0, y: 200 }} animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1
                        }
                    }} className="text-5xl font-medium">
                        Let guests know what your place has to offer
                    </motion.h1>
                </div>
                <div className="w-2/4 bg-offWhite overflow-y-auto relative text-black min-h-screen ">
                    <div className="w-2/4 h-20 z-40 border-b border-offGray bg-offWhite fixed top-0 right-0 flex items-center justify-end gap-x-4 px-10">
                        <button className=" bg-offWhite2 text-xs px-2 py-1 rounded-full font-semibold">Help</button>
                        <button className=" bg-offWhite2 text-xs px-2 py-1 rounded-full font-semibold">Save and Exit</button>
                    </div>
                    <motion.div initial={{ opacity: 0, y: 200 }} animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1
                        }
                    }} className="flex items-center justify-center h-screen">
                        <div className="w-10/12 flex gap-y-10 flex-col justify-center ">
                            <h1 className="font-semibold text-2xl">Do you have any standout amenities?</h1>
                            <div className="grid grid-cols-3 gap-5">
                                {data.map((item, index) => {
                                    return (
                                        <div key={index} className="container-ip">
                                            <input onClick={() => { arr.push(index) }} type="checkbox" id={item.value} />
                                            <label className="text-sm" htmlFor={item.value}>{item.value}</label>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 200 }} animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1
                        }
                    }} className="flex items-center justify-center mb-20">
                        <div className="w-10/12 flex gap-y-10 flex-col justify-center ">
                            <h1 className="font-semibold text-2xl">What about these guest favourites?</h1>
                            <div className="grid grid-cols-3 gap-5">
                                {favs.map((item, index) => {
                                    return (
                                        <div key={index} className="container-ip">
                                            <input type="checkbox" id={item.value} />
                                            <label className="text-sm" htmlFor={item.value}>{item.value}</label>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 200 }} animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1
                        }
                    }} className="flex items-center justify-center mb-40">
                        <div className="w-10/12 flex gap-y-10 flex-col justify-center ">
                            <h1 className="font-semibold text-2xl">Have any of these safety items?</h1>
                            <div className="grid grid-cols-3 gap-5">
                                {safety.map((item, index) => {
                                    return (
                                        <div key={index} className="container-ip">
                                            <input type="checkbox" id={item.value} />
                                            <label className="text-sm" htmlFor={item.value}>{item.value}</label>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </motion.div>
                    <div className="w-2/4 z-40 bg-offWhite fixed bottom-0 right-0">
                        <div className="w-[40%] h-[2px] bg-dark"></div>
                        <div className="flex items-center justify-between px-10 py-3">
                            <button className="underline underline-offset-4 font-semibold">Back</button>
                            <Link href="./title" className="btn-booking px-8 rounded-lg py-3"><button className=" text-white bg-black px-8 rounded-lg py-3">
                                Next</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </ >
    )
}

