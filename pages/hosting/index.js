import React, { useState } from 'react'
import Head from 'next/head'
import Footer from '../../components/Footer'
import Link from 'next/link'
export default function Home() {
    return (
        <div>
            <Head>
                <title>Vivante</title>
                {/* <meta name="description" content="" /> */}
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <div className="h-[70vh] relative bg-[#000]">
                <img src="./VivanteLogo.png" className="absolute top-10 left-10 h-10" />
                <div className="flex w-full justify-center items-center h-full">
                    <div className="w-3/6 flex flex-col justify-center items-center h-full">
                        <h1 className="text-6xl text-center text-white text-bold">Open your door<br /> to hosting</h1>
                        <Link href="./hosting/become-host">
                            <button className="text-md text-center btn-booking rounded-xl px-10 py-3 text-offWhite font-semibold mt-20">
                                Try Hosting
                            </button>
                        </Link>
                    </div>
                    <div className="w-3/6 h-full" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
                    </div>
                </div>

            </div>
            <div className="my-40 flex flex-col w-full">
                <h1 className="text-5xl text-center font-semibold">
                    Find out what you could earn as a Host
                </h1>
                <div className="flex w-full justify-center my-20">
                    <div className="flex w-4/6 gap-x-7">
                        <div className="bg-offGray2 py-5 rounded-2xl drop-shadow-lg flex flex-col justify-center px-5 w-2/6">
                            <h3 className="text-sm text-[#848484]">Hosts in your area earn an average of*</h3>
                            <h2 className="text-4xl text-left  mt-2 font-semibold text-brightBlue">₹79,211<span className="text-xl font-medium px-2">/month</span></h2>
                        </div>
                        <div className="bg-offGray2 py-5 rounded-2xl drop-shadow-lg flex flex-col justify-center px-5 w-2/6">
                            <h3 className="text-sm text-[#848484]">They earn</h3>
                            <h2 className="text-4xl text-left  mt-2 font-semibold text-black">₹3,961<span className="text-xl font-medium px-2">/night</span></h2>
                        </div>
                        <div className="bg-offGray2 py-5 rounded-2xl drop-shadow-lg flex flex-col justify-center px-5 w-2/6">
                            <h3 className="text-sm text-[#848484]">They&apos;re booked</h3>
                            <h2 className="text-4xl text-left  mt-2 font-semibold text-black">20<span className="text-xl font-medium px-2">nights/month</span></h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full px-10">
                <div className="bg-hosting flex flex-col justify-center items-center gap-y-20 rounded-3xl w-full h-screen">
                    <h1 className="text-6xl text-center text-white font-medium">Questions about hosting?<br />Ask a Superhost.</h1>
                    <button className="bg-white text-black rounded-lg py-3 px-10 text-lg ">Learn More</button>
                </div>
            </div>
            <Footer />
        </div >
    )
}
