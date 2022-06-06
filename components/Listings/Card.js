import React from 'react'

export default function Card({ i }) {
    return (
        <>
            <div className="flex flex-col gap-3 justify-center h-80">
                <div className="h-2/3 relative">
                    <img className="rounded-xl h-full w-full shadow object-cover" loading="lazy" src={`https://source.unsplash.com/720x480/?mountains/?${i}`} />
                    <button>
                        <svg className="absolute hearts bottom-3 right-3" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" fill="black" fillOpacity="0.37" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLineJoin="round" />
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
