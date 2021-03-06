import React, { useState } from 'react'
import Head from 'next/head'
import Footer from '../../components/Footer'
import Link from 'next/link'
import Card from '../../components/Listings/Card'
export default function Listings() {
    let totalCards = 10;
    const cards = [];
    for (let i = 1; i <= totalCards; i++) {
        cards.push(
            <Card id={i} i={i} key={i} />
        );
    }
    return (
        <>
            <Head>
                <title>Vivante</title>
                {/* <meta name="description" content="" /> */}
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <nav className="bg-offWhite border-b-[1px] border-[#C4D1DB] h-16 flex justify-between px-10 items-center w-full text-black z-50">
                <div className="w-1/6">
                    <Link href="/">
                        <img className="cursor-pointer" alt="VIVANTE LOGO" src="./logoDark.png" width="150" />
                    </Link>
                </div>
                <div className="w-80 flex justify-end gap-x-10 items-center">
                    <Link href="/hosting">
                        <button className="font-[600]">Become a Host</button>
                    </Link>
                    <button>
                        <svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.6662 2.6665H12.444V7.11095H14.2218V4.44428H26.6662C27.1996 4.44428 27.5551 4.79984 27.5551 5.33317V15.1109C27.5551 15.6443 27.1996 15.9998 26.6662 15.9998H15.1107V22.2221H10.3996L7.11068 24.7998V22.2221H4.44401C3.91068 22.2221 3.55512 21.8665 3.55512 21.3332V11.5554C3.55512 11.0221 3.91068 10.6665 4.44401 10.6665H15.9996V8.88873H4.44401C2.9329 8.88873 1.77734 10.0443 1.77734 11.5554V21.3332C1.77734 22.8443 2.9329 23.9998 4.44401 23.9998H5.3329V28.5332L10.9329 23.9998H16.8885V17.7776H26.6662C28.1773 17.7776 29.3329 16.6221 29.3329 15.1109V5.33317C29.3329 3.82206 28.1773 2.6665 26.6662 2.6665Z" fill="#212629" />
                            <path d="M5.51172 20.3554H7.64505L8.17839 18.9332H10.9339L11.4673 20.3554H13.6006L10.5784 12.4443H8.44505L5.51172 20.3554ZM9.51172 14.6666L10.4006 17.4221H8.62283L9.51172 14.6666Z" fill="#212629" />
                            <path d="M17.7773 15.1113C18.7551 15.1113 20.0885 14.8446 21.3329 14.2224C22.5773 14.8446 23.9996 15.1113 24.8885 15.1113V13.3335C24.8885 13.3335 23.9996 13.3335 23.0218 12.9779C24.0885 11.9113 24.8885 10.3113 24.8885 8.00016V7.11127H22.2218V5.3335H20.444V7.11127H17.7773V8.88905H23.0218C22.844 10.4891 22.1329 11.4668 21.3329 12.0891C20.7996 11.6446 20.2662 11.0224 19.9107 10.2224H18.044C18.3996 11.3779 18.9329 12.2668 19.644 12.9779C18.7551 13.3335 17.9551 13.3335 17.7773 13.3335V15.1113Z" fill="#212629" />
                        </svg>
                    </button>
                    <button>
                        <svg width="80" height="48" viewBox="0 0 86 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M62 16C61.0111 16 60.0444 16.2932 59.2222 16.8427C58.3999 17.3921 57.759 18.173 57.3806 19.0866C57.0022 20.0002 56.9031 21.0055 57.0961 21.9755C57.289 22.9454 57.7652 23.8363 58.4645 24.5355C59.1637 25.2348 60.0546 25.711 61.0246 25.9039C61.9945 26.0969 62.9998 25.9978 63.9134 25.6194C64.8271 25.241 65.6079 24.6001 66.1574 23.7779C66.7068 22.9556 67 21.9889 67 21C67 19.6739 66.4732 18.4021 65.5355 17.4645C64.5979 16.5268 63.3261 16 62 16ZM62 24C61.4067 24 60.8266 23.8241 60.3333 23.4944C59.8399 23.1648 59.4554 22.6962 59.2284 22.148C59.0013 21.5999 58.9419 20.9967 59.0576 20.4147C59.1734 19.8328 59.4591 19.2982 59.8787 18.8787C60.2982 18.4591 60.8328 18.1734 61.4147 18.0576C61.9967 17.9419 62.5999 18.0013 63.1481 18.2284C63.6962 18.4554 64.1648 18.8399 64.4944 19.3333C64.8241 19.8266 65 20.4067 65 21C64.9992 21.7954 64.6829 22.558 64.1204 23.1204C63.558 23.6829 62.7954 23.9992 62 24Z" fill="#212629" />
                            <path d="M62 10C59.2311 10 56.5243 10.8211 54.222 12.3594C51.9197 13.8978 50.1253 16.0843 49.0657 18.6424C48.0061 21.2006 47.7288 24.0155 48.269 26.7313C48.8092 29.447 50.1426 31.9416 52.1005 33.8995C54.0584 35.8574 56.553 37.1908 59.2687 37.731C61.9845 38.2712 64.7994 37.9939 67.3576 36.9343C69.9157 35.8747 72.1022 34.0803 73.6406 31.778C75.1789 29.4757 76 26.7689 76 24C75.9958 20.2883 74.5194 16.7298 71.8948 14.1052C69.2702 11.4806 65.7117 10.0042 62 10ZM56 34.377V33C56.0008 32.2046 56.3171 31.442 56.8796 30.8796C57.442 30.3171 58.2046 30.0008 59 30H65C65.7954 30.0008 66.558 30.3171 67.1204 30.8796C67.6829 31.442 67.9992 32.2046 68 33V34.377C66.1792 35.4402 64.1085 36.0005 62 36.0005C59.8915 36.0005 57.8208 35.4402 56 34.377ZM69.992 32.926C69.9721 31.6143 69.4377 30.363 68.5039 29.4416C67.5702 28.5202 66.3118 28.0025 65 28H59C57.6882 28.0025 56.4298 28.5202 55.4961 29.4416C54.5623 30.363 54.0279 31.6143 54.008 32.926C52.1946 31.3068 50.9157 29.1749 50.3408 26.8127C49.7659 24.4505 49.9221 21.9693 50.7886 19.6979C51.6552 17.4264 53.1912 15.4717 55.1934 14.0926C57.1955 12.7135 59.5693 11.975 62.0005 11.975C64.4317 11.975 66.8055 12.7135 68.8076 14.0926C70.8098 15.4717 72.3458 17.4264 73.2124 19.6979C74.0789 21.9693 74.2351 24.4505 73.6602 26.8127C73.0853 29.1749 71.8064 31.3068 69.993 32.926H69.992Z" fill="#212629" />
                            <rect x="13" y="13.9165" width="22" height="3.66667" rx="1.83333" fill="#212629" />
                            <rect x="9.33203" y="22.1665" width="29.3333" height="3.66667" rx="1.83333" fill="#212629" />
                            <rect x="13" y="30.4165" width="22" height="3.66667" rx="1.83333" fill="#212629" />
                        </svg>
                    </button>
                </div>
            </nav>
            <div className="flex items-center justify-between px-20 text-greyTone1 py-5 ">
                <ul className="flex gap-x-6">
                    <li>Offbeat</li>
                    <li>Beachfront</li>
                    <li>Amazing Pool</li>
                    <li>Farms</li>
                    <li>Cabins</li>
                    <li>Tiny homes</li>
                    <li>Treehouses</li>
                    <li>A-frames</li>
                    <li>Containers</li>
                    <li>More</li>
                </ul>
                <div className="space-x-10 flex ">
                    <button className="flex justify-center items-center gap-2 border px-4 py-2 text-sm bg-offWhite2 text-black border-black rounded-full"><svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.03718 7.70711C1.64666 8.09763 1.0135 8.09763 0.622971 7.70711C0.232447 7.31658 0.232447 6.68342 0.622971 6.29289L2.03718 7.70711ZM6.33008 2L5.62297 1.29289L6.33008 0.585786L7.03718 1.29289L6.33008 2ZM12.0372 6.29289C12.4277 6.68342 12.4277 7.31658 12.0372 7.70711C11.6467 8.09763 11.0135 8.09763 10.623 7.70711L12.0372 6.29289ZM0.622971 6.29289L5.62297 1.29289L7.03718 2.70711L2.03718 7.70711L0.622971 6.29289ZM7.03718 1.29289L12.0372 6.29289L10.623 7.70711L5.62297 2.70711L7.03718 1.29289Z" fill="#212629" />
                    </svg> Anytime</button>
                    <button className="flex justify-center items-center gap-2 border px-4 py-2 text-sm bg-offWhite2 text-black border-black rounded-full"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H13V2.44L8.2 7.72V11.56L5.8 13V7.72L1 2.44V1Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>Filter</button>
                </div>
            </div>
            <div className="grid gap-5 mt-20 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 px-10">
                {cards}
            </div>
            <Footer />
        </ >
    )
}
