import React from 'react'

function LocationSearchBar() {
    return (
        <>
            <div className="bg-offWhite searchBox py-8 px-8 w-[24%] z-30 absolute left-[20vw] mt-2 rounded-2xl">
                <h1>Go anywhere, anytime</h1>
                <div className="mt-5 bg-brightBlue cursor-pointer text-offWhite flex justify-between items-center px-5 w-full rounded-full py-2">
                    <h1 className="text-lg">
                        I wanna explore
                    </h1>
                    <div>
                        <svg width="60" height="16" viewBox="0 0 82 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M60.5147 1.39345L70.0607 10.9394C70.6464 11.5252 70.6464 12.4749 70.0607 13.0607L60.5147 22.6067C59.9289 23.1924 58.9792 23.1924 58.3934 22.6067C57.8076 22.0209 57.8076 21.0711 58.3934 20.4853L65.3787 13.5L1.5 13.5C0.671572 13.5 -1.03809e-06 12.8285 -9.65667e-07 12C-8.93244e-07 11.1716 0.671568 10.5 1.5 10.5L65.3787 10.5L58.3934 3.51477C57.8076 2.92898 57.8076 1.97923 58.3934 1.39345C58.9792 0.80766 59.9289 0.80766 60.5147 1.39345Z" fill="#F7FCFF" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="bg-offWhite searchBox text-black p-5 w-[25%] z-30 absolute left-[20vw] mt-2 rounded-2xl">
                <ul className="text-base">
                    <li className="pb-4 flex gap-x-4 items-center">
                        <img src="./location.png" width="40" />
                        <h3>Assam</h3>
                    </li>
                    <li className="flex gap-x-4 py-4 border-t-2 border-t-gray-200 items-center">
                        <img src="./location.png" width="40" />
                        <h3>Ashvem Beach, Goa</h3>
                    </li>
                    <li className="flex gap-x-4 py-4 border-t-2 border-t-gray-200 items-center">
                        <img src="./location.png" width="40" />
                        <h3>Assagao, Goa</h3>
                    </li>
                    <li className="flex gap-x-4 py-4 border-t-2 border-t-gray-200 items-center">
                        <img src="./location.png" width="40" />
                        <h3>Ashwem Beach, Mandrem</h3>
                    </li>
                    <li className="flex gap-x-4 py-4 border-t-2 border-t-gray-200 items-center">
                        <img src="./location.png" width="40" />
                        <h3>Assam, Sikkim</h3>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default LocationSearchBar