import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
export default function Hosting() {
    return (
        <>
            <Head>
                <title>Vivante</title>
                {/* <meta name="description" content="" /> */}
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <Link href="/hosting">
                <img src="../VivanteLogo.png" className="fixed top-10 left-10 h-10" />
            </Link>
            <div className="overflow-hidden flex h-screen w-full">
                <div className="w-2/4 btn-booking flex flex-col items-center justify-center">
                    <img className="object-cover h-screen w-full" src="https://a0.muscache.com/im/pictures/a464d642-695e-4d2c-aa51-2302de067f45.jpg?im_w=1200" />
                </div>
                <div className="w-2/4 bg-black relative text-white flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-medium  text-center ">Become a Host in 10 <br /> easy steps</h1>
                    <p className=" mt-10">Join us. We&apos;ll help you every step of the way.</p>
                    <div className="absolute bottom-0 w-full flex flex-col items-end">
                        <div className="h-[1px] bg-white w-full"></div>
                        <div className="py-5 mx-8">
                            <Link href="./become-host/property-type-group" className="btn-booking px-8 rounded-lg py-3"><button className="btn-booking px-8 rounded-lg py-3">Let&apos;s go</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </ >
    )
}
