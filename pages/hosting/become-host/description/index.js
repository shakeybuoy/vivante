import React, { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { motion } from 'framer-motion'
export default function PropertyType() {
    function chkcontrol(j) {
        var total = 0;
        for (var i = 0; i < document.forms[0].ckb.length; i++) {
            if (document.forms[0].ckb[i].checked) {
                total = total + 1;
            }
            if (total > 2) {
                alert("Please Select only two")
                document.forms[0].ckb[j].checked = false;
                return false;
            }
        }
    }

    const data = [
        { value: 'Peaceful' },
        { value: 'Unique' },
        { value: 'Family-Friendly' },
        { value: 'Stylish' },
        { value: 'Central' },
        { value: 'Spacious' }
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
                        Now, let&apos;s describe your place
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
                        <div className="w-10/12 flex gap-y-10 flex-col justify-center ">
                            <h1 className="font-semibold text-2xl">Choose up to 2 highlights</h1>
                            <form className="grid grid-cols-3 gap-5">
                                {data.map((item, index) => {
                                    return (
                                        <div key={index} className="container-ip">
                                            <input name="ckb" onClick={() => chkcontrol(index)} type="checkbox" id={item.value} />
                                            <label className="text-sm" for={item.value}>{item.value}</label>
                                        </div>
                                    )
                                })}
                            </form>
                        </div>
                    </motion.div>
                    <div className="w-2/4 z-40 bg-offWhite fixed bottom-0 right-0">
                        <div className="w-[60%] h-[2px] bg-dark"></div>
                        <div className="flex items-center justify-between px-10 py-3">
                            <button className="underline underline-offset-4 font-semibold">Back</button>
                            <Link href="./create-description" className="btn-booking px-8 rounded-lg py-3"><button className=" text-white bg-black px-8 rounded-lg py-3">
                                Next</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </ >
    )
}

