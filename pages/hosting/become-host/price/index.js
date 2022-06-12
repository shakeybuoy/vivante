import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { motion } from 'framer-motion'
export default function PropertyType() {
    const min = 781;
    const max = 780620;
    const [value, setValue] = useState(null)
    const [show, setShow] = useState(false)
    const changeHandle = (e) => {
        var price = e.target.value
        setValue(price)
        price < min || price > max ? setShow(true) : setShow(false)
    }
    const incPrice = () => {
        value != null && value <= max ? setValue(parseInt(value) + 100) : setValue(781)
    }
    const decPrice = () => {
        value != null && value >= min + 100 ? setValue(parseInt(value) - 100) : null
    }
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
                    <motion.h1 initial={{ opacity: 0, x: -200 }} animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1
                        }
                    }} className="text-5xl font-medium">
                        Now for the fun part - set your price
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
                        <div className="w-10/12 flex gap-y-4 flex-col justify-center items-center">
                            <div className="flex items-center w-4/6 justify-center">
                                <button onClick={decPrice} className="border h-12 w-12 rounded-full text-xl font-semibold text-offGray border-offGray bg-offWhite">-</button>
                                <input placeholder="₹00" value={value} onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }} autoComplete="off" required onChange={changeHandle} className="border border-offGray rounded-xl w-2/3 mx-5 py-3 text-center text-5xl bg-transparent font-semibold" type="text" />
                                <button onClick={incPrice} className="border h-12 w-12 rounded-full text-xl font-semibold text-offGray border-offGray bg-offWhite">+</button>
                            </div>
                            <h3>per night</h3>
                            {show === true ?
                                <h4 className="h-10 text-red-500 text-sm">
                                    Please enter a base price between ₹781 and ₹7,80,620.
                                </h4> :
                                <h4 className="h-10"></h4>
                            }
                            <h2 className="text-xl text-center font-medium w-3/6">Keep in mind that places like yours usually range from ₹2,052 to ₹3,420.</h2>
                        </div>
                    </motion.div>
                    <div className="w-2/4 z-40 bg-offWhite fixed bottom-0 right-0">
                        <div className="w-[80%] h-[2px] bg-dark"></div>
                        <div className="flex items-center justify-between px-10 py-3">
                            <button className="underline underline-offset-4 font-semibold">Back</button>
                            <Link href="./legal" className="btn-booking px-8 rounded-lg py-3"><button className=" text-white bg-black px-8 rounded-lg py-3">
                                Next</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </ >
    )
}

