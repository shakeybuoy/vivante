import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

export default function Card({ i }) {

    return (
        <>
            <div className="flex flex-col gap-3 justify-center h-96">
                <div className="h-2/3 relative">
                    <a href="../product-page" >

                        <Swiper
                            cssMode={true}
                            navigation={true}
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Navigation, Pagination]}
                            className="rounded-xl "
                        >
                            <SwiperSlide className="relative">
                                <div className="overlay absolute w-full h-full object-cover top-0 left-0"></div>
                                <img className="h-full w-full shadow-lg object-cover" loading="lazy" src={`https://source.unsplash.com/720x480/?mountains/?${i}`} />
                            </SwiperSlide>
                            <SwiperSlide className="relative">
                                <div className="overlay absolute w-full h-full object-cover top-0 left-0"></div>
                                <img className=" h-full w-full shadow-lg object-cover" loading="lazy" src={`https://source.unsplash.com/720x480/?mountains/?${i * 3}`} />
                            </SwiperSlide>
                            <SwiperSlide className="relative">
                                <div className="overlay absolute w-full h-full object-cover top-0 left-0"></div>
                                <img className=" h-full w-full shadow-lg object-cover" loading="lazy" src={`https://source.unsplash.com/720x480/?mountains/?${i * 4}`} />
                            </SwiperSlide>
                            <SwiperSlide className="relative">
                                <div className="overlay absolute w-full h-full object-cover top-0 left-0"></div>
                                <img className=" h-full w-full shadow-lg object-cover" loading="lazy" src={`https://source.unsplash.com/720x480/?mountains/?${i * 5}`} />
                            </SwiperSlide>
                            <SwiperSlide className="relative">
                                <div className="overlay absolute w-full h-full object-cover top-0 left-0"></div>
                                <img className=" h-full w-full shadow-lg object-cover" loading="lazy" src={`https://source.unsplash.com/720x480/?mountains/?${i * 6}`} />
                            </SwiperSlide>
                            <SwiperSlide className="relative">
                                <div className="overlay absolute w-full h-full object-cover top-0 left-0"></div>
                                <img className=" h-full w-full shadow-lg object-cover" loading="lazy" src={`https://source.unsplash.com/720x480/?mountains/?${i * 8}`} />
                            </SwiperSlide>
                            <SwiperSlide className="relative">
                                <div className="overlay absolute w-full h-full object-cover top-0 left-0"></div>
                                <img className=" h-full w-full shadow-lg object-cover" loading="lazy" src={`https://source.unsplash.com/720x480/?mountains/?${i * 10}`} />
                            </SwiperSlide>

                        </Swiper>
                    </a>
                    <button className="z-20 absolute hearts top-3 right-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" className="hearts" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 3C4.239 3 2 5.216 2 7.95C2 10.157 2.875 15.395 11.488 20.69C11.6423 20.7839 11.8194 20.8335 12 20.8335C12.1806 20.8335 12.3577 20.7839 12.512 20.69C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3C14.239 3 12 6 12 6C12 6 9.761 3 7 3Z" fill="black" fillOpacity="0.37" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="text-greyTone2 text-sm flex items-center justify-between">
                    <div>
                        <h3 className="text-black font-medium">Jibhi, Himachal Pradesh</h3>
                        <span>1,000 kms away</span>
                    </div>
                    <div className="text-right">
                        <h3 className="text-black">₹5,660 night</h3>
                        <span>11-18 Jul</span>
                    </div>
                </div>
            </div>
        </>
    )
}
