import React from 'react'

function GuestSearchBar() {
    return (
        <>
            <div className="bg-offWhite text-black text-xs searchBox py-4 px-8 w-[30%] z-30 absolute right-[5vw] mt-2 rounded-2xl">
                <div className="flex flex-col">
                    <div className="flex items-center py-4 justify-between">
                        <div>
                            <h4 className="text-sm font-semibold ">Adults</h4>
                            <span className="text-greyTone2">Ages 13 or above</span>
                        </div>
                        <div>
                            Counter
                        </div>
                    </div>
                    <div className="flex items-center py-4 border-t-2 border-t-gray-200 justify-between">
                        <div>
                            <h4 className="text-sm font-semibold ">Children</h4>
                            <span className="text-greyTone2">Ages 2 - 12</span>
                        </div>
                        <div>
                            counter
                        </div>
                    </div>
                    <div className="flex items-center py-4 border-t-2 border-t-gray-200 justify-between">
                        <div>
                            <h4 className="text-sm font-semibold ">Infants</h4>
                            <span className="text-greyTone2">Under 2</span>
                        </div>
                        <div>
                            counter
                        </div>
                    </div>
                    <div className="flex items-center py-4 border-t-2 border-t-gray-200 justify-between">
                        <div>
                            <h4 className="text-sm font-semibold ">Pets</h4>
                            <span className="text-greyTone2">Bringing a service animal?</span>
                        </div>
                        <div>
                            counter
                        </div>
                    </div>
                    <h3 className="text-greyTone2 py-4 border-t-2 border-t-gray-200">
                        If you&apos;re lucky enough to have more than 2 pets with you, be sure to let your host know.
                    </h3>
                </div>
            </div>
        </>
    )
}

export default GuestSearchBar