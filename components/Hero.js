import React from 'react'
import LocationSearchBar from './LocationSearchBar'
import GuestSearchBar from './GuestSearchBar'
import ServicesSearchBar from './ServicesSearchBar'
function Hero(props) {

    return (
        <section className="bg-black min-h-screen flex">
            <div className="relative w-full">
                {
                    props.data == 'experiences' ? <>
                        <div className="text-black text-left bg-white mt-40 mx-auto search-shadow pl-8 pr-5 w-4/6 h-24 rounded-full flex items-center justify-between">
                            <button className="rounded-full text-left cursor-pointer w-5/12 ml-5 ">
                                <h1 className="font-bold text-xs">Location</h1>
                                <h3 className="text-offGray">Where are you going?</h3>
                            </button>
                            <div className="h-5/6 w-[1px] bg-black opacity-20"></div>
                            <button className="rounded-full text-left cursor-pointer w-4/12">
                                <h1 className="font-bold text-xs">Date</h1>
                                <h3 className="text-offGray">Add when you want to go</h3>
                            </button>

                            <button>
                                <img className="cursor-pointer" width="60" src="../searchButton.png" />
                            </button>
                        </div>
                    </> :
                        <>
                            <div className="text-black text-left bg-white mt-40 mx-auto search-shadow pl-8 w-4/6 h-24 rounded-full flex items-center justify-evenly ">
                                <button className="rounded-full text-left cursor-pointer w-3/12 ">
                                    <h1 className="font-bold  text-xs">Location</h1>
                                    <h3 className="text-offGray">Where are you going?</h3>
                                </button>
                                <div className="h-5/6 w-[1px] bg-black opacity-20"></div>
                                <button className="rounded-full text-left cursor-pointer w-2/12">
                                    <h1 className="font-bold  text-xs">Travel dates</h1>
                                    <h3 className="text-offGray">Add dates</h3>
                                </button>
                                <div className="h-5/6 w-[1px] bg-black opacity-20"></div>
                                <button className="rounded-full text-left cursor-pointer w-2/12 ">
                                    <h1 className="font-bold  text-xs">Services</h1>
                                    <h3 className="text-offGray">Selected services</h3>
                                </button>
                                <div className="h-5/6 w-[1px] bg-black opacity-20"></div>
                                <button className="rounded-full text-left cursor-pointer w-2/12">
                                    <h1 className="font-bold  text-xs">Guests</h1>
                                    <h3 className="text-offGray">Add guests</h3>
                                </button>
                                <button>
                                    <img className="cursor-pointer" width="60" src="../searchButton.png" />
                                </button>
                            </div>
                        </>
                }
                {/* <LocationSearchBar /> */}
                {/* <GuestSearchBar /> */}
                {/* <ServicesSearchBar /> */}

            </div>
            <div className="absolute px-10 bottom-0 top-[60vh]">
                <div className="relative">
                    <img className="mx-auto" src="../hero.png" />
                    <div className="absolute top-24 text-center w-full">
                        <h1 className="heading-gradient">Let your curiosity do the booking</h1>
                        <button className="mt-10 w-[13%] py-3 rounded-full text-2xl bg-black text-offWhite">Let's Go</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero