import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { motion } from 'framer-motion'

export default function PropertyType() {
    const [count, setCount] = React.useState(0);
    const max = 50;
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
                    <motion.h1 initial={{ opacity: 0, x: 200 }} animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1
                        }
                    }} className="text-5xl font-medium capitalize">
                        let&apos;s  give your place a name
                    </motion.h1>
                </div>
                <div className="w-2/4 bg-offWhite overflow-y-auto relative text-black min-h-screen ">
                    <div className="w-2/4 h-20 z-40 border-b border-offGray bg-offWhite fixed top-0 right-0 flex items-center justify-end gap-x-4 px-10">
                        <button className=" bg-offWhite2 text-xs px-2 py-1 rounded-full font-semibold">Help</button>
                        <button className=" bg-offWhite2 text-xs px-2 py-1 rounded-full font-semibold">Save and Exit</button>
                    </div>
                    <motion.div initial={{ opacity: 0, x: -200 }} animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1
                        }
                    }} className="flex items-center justify-center h-screen">
                        <div className="w-8/12 flex gap-y-8 flex-col justify-center ">
                            <h1 className="font-semibold text-2xl">Create your title</h1>
                            <div>
                                <textarea className="border bg-none text-black font-medium text-3xl border-offGray w-full p-5 min-h-full rounded-xl" maxLength={max} placeholder='Lovely 1- Bedroom condo with pool' onChange={e => setCount(e.target.value.length)} rows={3} ></textarea>
                                <h3 className="text-offGray font-semibold text-sm mt-4">{count}/{max}</h3>
                            </div>
                        </div>
                    </motion.div>
                    <div className="w-2/4 z-40 bg-offWhite fixed bottom-0 right-0">
                        <div className="w-[50%] h-[2px] bg-dark"></div>
                        <div className="flex items-center justify-between px-10 py-3">
                            <button className="underline underline-offset-4 font-semibold">Back</button>
                            <Link href="./description" className="btn-booking px-8 rounded-lg py-3"><button className=" text-white bg-black px-8 rounded-lg py-3">
                                Next</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </ >
    )
}

