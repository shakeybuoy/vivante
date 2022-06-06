import React from 'react'

function ServicesSearchBar() {
    return (
        <>
            <div className="bg-offWhite text-black text-xs searchBox py-4 px-8 w-[20%] z-30 absolute right-[30vw] mt-2 rounded-2xl">
                <div className="flex flex-col">
                    <div className="flex items-center py-4 justify-between">
                        <h4 className="text-sm font-semibold ">Service Option 1</h4>
                    </div>
                    <div className="flex items-center py-4 border-t-2 border-t-gray-200 justify-between">
                        <h4 className="text-sm font-semibold ">Service Option 2</h4>
                    </div>
                    <div className="flex items-center py-4 border-t-2 border-t-gray-200 justify-between">
                        <h4 className="text-sm font-semibold ">Service Option 3</h4>
                    </div>
                    <div className="flex items-center py-4 border-t-2 border-t-gray-200 justify-between">
                        <h4 className="text-sm font-semibold ">Service Option 4</h4>                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesSearchBar