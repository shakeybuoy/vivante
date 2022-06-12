import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
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
                <div className="w-2/4 h-screen text-white flex flex-col items-start justify-center">
                    <img className="object-cover w-full h-screen" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                </div>
                <div className="w-2/4 text-offWhite relative bg-black min-h-screen ">
                    <div className="flex items-center justify-center h-screen">
                        <div className="w-5/6 flex gap-y-4 flex-col justify-center items-center">
                            <h1 className="text-5xl font-semibold">Welcome, Abhishek !</h1>
                            <p className="mt-10 w-4/6 text-center">
                                Hosts are at the heart of everything we do,and we&apos;re excited for you to experience the magic of hosting.
                            </p>
                            <p className="mt-1 text-center font-semibold">- CEO</p>
                        </div>

                    </div>
                    <div className="w-2/4 h-20 z-40 border-t border-offGray fixed bottom-0 right-0 flex items-center justify-end gap-x-4 px-10">
                        <Link href="/host-dashboard" className="btn-booking px-8 rounded-lg py-3"><button className=" text-white btn-booking px-8 rounded-lg py-3">
                            Next
                        </button></Link>
                    </div>
                </div>
            </div>
        </ >
    )
}

