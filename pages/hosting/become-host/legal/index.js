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
                        Just a few last questions...
                    </h1>
                </div>
                <div className="w-2/4 bg-offWhite overflow-y-auto relative text-black min-h-screen ">
                    <div className="w-2/4 h-20 z-40 border-b border-offGray bg-offWhite fixed top-0 right-0 flex items-center justify-end gap-x-4 px-10">
                        <button className=" bg-offWhite2 text-xs px-2 py-1 rounded-full font-semibold">Help</button>
                        <button className=" bg-offWhite2 text-xs px-2 py-1 rounded-full font-semibold">Save and Exit</button>
                    </div>
                    <motion.div initial={{ opacity: 0, x: 150 }} animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1
                        }
                    }} className="flex items-center justify-center h-screen">
                        <div className="w-10/12 flex gap-y-4 flex-col justify-center ">
                            <h2 className="text-2xl font-semibold">Do you have any of these at your place?</h2>
                            <div className="flex items-center justify-between legal">
                                <label htmlFor="security">Security Camera(s)</label>
                                <input type="checkbox" id="security" name="security" value="cams" />
                            </div>
                            <div className="flex items-center justify-between legal">
                                <label htmlFor="weapons">Weapons</label>
                                <input type="checkbox" id="weapons" name="weapons" value="weapons" />
                            </div>
                            <div className="flex items-center justify-between legal">
                                <label htmlFor="dangerous">Dangerous Animals</label>
                                <input type="checkbox" id="dangerous" name="dangerous" value="dangerous-animal" />
                            </div>
                            <div className="mt-10 space-y-4">
                                <h2 className="text-lg font-semibold">Some important things to know</h2>
                                <p>Be sure to comply with your <span className="font-medium underline underline-offset-2">local laws</span> and review Vivante&apos;s <span className="font-medium underline underline-offset-2">nondiscrimination</span> policy and <span className="font-medium underline underline-offset-2">guest and Host fees</span>. Update your <span className="font-medium underline underline-offset-2">cancellation policy</span> after you publish.</p>
                            </div>
                        </div>
                    </motion.div>
                    <div className="w-2/4 z-40 bg-offWhite fixed bottom-0 right-0">
                        <div className="w-[90%] h-[2px] bg-dark"></div>
                        <div className="flex items-center justify-between px-10 py-3">
                            <button className="underline underline-offset-4 font-semibold">Back</button>
                            <Link href="./preview" className="btn-booking px-8 rounded-lg py-3"><button className=" text-white bg-black px-8 rounded-lg py-3">
                                Review your listing</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </ >
    )
}

