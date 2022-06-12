import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { motion } from 'framer-motion'
export default function PropertyType() {
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
                    <h1 className="text-5xl font-medium">
                        Check out your listing!
                    </h1>
                    <p className="text-xl w-5/6 mt-5">Once you save, we&apos;ll ask you to confirm a few details before you can publish.</p>
                </div>
                <div className="w-2/4 bg-offWhite overflow-y-auto relative text-black min-h-screen ">
                    <div className="w-2/4 h-20 z-40 bg-offWhite fixed top-0 right-0 flex items-center justify-end gap-x-4 px-10">
                        <button className=" bg-offWhite2 text-xs px-2 py-1 rounded-full font-semibold">Help</button>
                        <button className=" bg-offWhite2 text-xs px-2 py-1 rounded-full font-semibold">Save and Exit</button>
                    </div>
                    <motion.div initial={{ opacity: 0, y: 200 }} animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1.2
                        }
                    }} className="flex items-center justify-center h-screen">
                        <div className="w-6/12 shadow-lg shadow-[#00000060] relative rounded-3xl p-5 flex flex-col justify-center h-2/3">
                            <div className="w-full items-center rounded-3xl flex flex-col overflow-y-auto border h-full">
                                <div className="w-full h-56 mb-5"><img className="rounded-t-3xl object-cover w-full h-full" src="../../product3.png" /></div>
                                <div className="border-b py-5 w-5/6">
                                    <h1 className="text-3xl font-semibold uppercase">title</h1>
                                </div>
                                <div className="border-b py-5 w-5/6">
                                    <h1 className="font-medium">Entire apartment hosted by Abhishek</h1>
                                </div>
                                <div className="border-b py-5 w-5/6">
                                    <h1 className="capitalize text-sm">4 guests · 1 bedroom · 1 bed · 1 bathroom</h1>
                                </div>
                                <div className="border-b py-5 w-5/6">
                                    <h1 className="text-sm">Bring the whole family to this great place with lots of room for fun.</h1>
                                </div>
                                <div className="py-5 w-5/6">
                                    <h1 className="capitalize font-medium">Amenities</h1>
                                    <ul className="text-sm space-y-2 mt-5">
                                        <li className="border-b py-2">Pool</li>
                                        <li className="border-b py-2">Hot tub</li>
                                        <li className="border-b py-2">Patio</li>
                                        <li className="border-b py-2">BBQ grill</li>
                                        <li className="border-b py-2">Fire pit</li>
                                    </ul>
                                </div>
                                <div className="border-b pb-5 text-justify w-5/6">
                                    <h1 className="capitalize font-medium">Location</h1>
                                    <h2 className="capitalize text-sm mt-5">Chandigarh Rd, Kharar, Punjab, भारत</h2>
                                    <p className="text-xs text-offGray mt-1">We&apos;ll only share your address with guests who are booked as outlined in our Privacy Policy.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <div className="w-2/4 z-40 bg-offWhite fixed bottom-0 right-0">
                        <div className="w-[100%] h-[2px] bg-dark"></div>
                        <div className="flex items-center justify-between px-10 py-3">
                            <button className="underline underline-offset-4 font-semibold">Back</button>
                            <Link href="./publish-celebration"><button className=" text-white btn-booking px-8 rounded-lg py-3">
                                Save Your Listings</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </ >
    )
}

