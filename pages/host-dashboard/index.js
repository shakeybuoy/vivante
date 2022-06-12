import React, { useState } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from '../../components/Footer'
export default function Host() {
    return (
        <>
            <Head>
                <title>Vivante</title>
                {/* <meta name="description" content="" /> */}
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <Navbar />
            <div className="h-64 text-white btn-booking flex justify-center items-center w-full">
                <div className="w-5/6">
                    <h1 className="text-3xl font-semibold">Today</h1>
                    <div className="w-3/12 rounded-xl mt-8 p-5 bg-white text-black shadow-lg">
                        <h3>Confirm important details</h3>
                        <h4 className="text-xs text-offGray">Required to publish</h4>
                    </div>
                </div>
            </div>
            <div className="w-full flex my-16 items-center justify-center">
                <div className="w-5/6">
                    <h2 className="text-2xl font-semibold">Welcome!</h2>
                    <h3 className="text-offGray mt-2">
                        You&apos;re on your way to being an incredible Host - here&apos;s how to start.
                    </h3>
                    <div className="flex my-10 gap-x-5 self-start">
                        <Card img="https://a0.muscache.com/pictures/019ab911-67e4-449b-be7b-fa34ff7542eb.jpg" text="Get ready for your first guests" />
                        <Card img="https://a0.muscache.com/pictures/5214ec72-e7fc-4a31-92fb-8c74e797f5ab.jpg" text="Customise your calender and pricing" />
                        <Card img="https://a0.muscache.com/pictures/94e5e747-cb01-4a1c-aa4c-5f7e61fb551e.jpg" text="Confirm how guests can book" />
                    </div>
                </div>
            </div>
            <Footer />

        </ >
    )
}
const Card = ({ img, text }) => {
    return (
        <div className=" h-[60vh] w-3/12 shadow-xl">
            <img src={img} className="rounded-t-xl w-full h-5/6 object-cover" />
            <h2 className="w-full bg-black text-white h-1/6 flex items-center px-4 rounded-b-xl">{text}</h2>
        </div>
    )
}
