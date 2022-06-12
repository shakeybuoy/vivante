import React from 'react'
import Card from './Card'
import PersonalDesign from './PersonalDesign'

function CardContainer() {
    return (
        <>
            <div className="mt-[80vh] flex flex-col px-24 ">
                <h1 className="text-black text-4xl font-medium">Inspiration for your next trip</h1>
                <div className="flex gap-5 w-full mt-10 justify-center items-center ">
                    <Card location='Goa' color={'#956A3C'} distance='100' cardImage={'https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074'} />
                    <Card location='Nainital' color={'#046F74'} distance='300' cardImage={'https://images.unsplash.com/photo-1610715936287-6c2ad208cdbf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074'} />
                    <Card location='Manali' color={'#012347'} distance='1000' cardImage={'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735'} />
                    <Card location='Daman and Diu' color={'#5E2519'} distance='900' cardImage={'https://images.unsplash.com/photo-1588093184213-ccecd521ecf9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687'} />
                </div>
            </div>
            <PersonalDesign />
            <div className="mt-20 px-24 py-5">
                <h1 className="text-black text-4xl font-medium">Inspiration for your next trip</h1>
                <div className="grid grid-cols-2 mt-10 gap-10">
                    <div style={{ background: "linear-gradient(133.95deg, #000000 0%, rgba(0, 0, 0, 0) 41.49%),url('../1.png')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="col-span-1 h-[80vh] shadow-xl relative rounded-xl" >
                        <div className="absolute top-10 left-10">
                            <h2 className="text-5xl text-white w-4/6 font-medium">Things to do from home</h2>
                            <div className="mt-10 cursor-pointer btn-type-one w-2/6 py-2 flex justify-center text-center items-center ">
                                <h3>
                                    Online Experiences
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div style={{ background: "linear-gradient(133.95deg, #000000 0%, rgba(0, 0, 0, 0) 41.49%),url('../2.png')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="col-span-1 h-[80vh] shadow-xl relative rounded-xl" >
                        <div className="absolute top-10 left-10">
                            <h2 className="text-5xl text-white w-4/6 pr-10 font-medium">Things to do on your trip</h2>
                            <div className="mt-10 cursor-pointer btn-type-one w-3/12 py-2 flex justify-center text-center items-center ">
                                <h3>
                                    Experiences
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div style={{ background: "linear-gradient(109.36deg, #000000 2.85%, rgba(0, 0, 0, 0) 39.43%),url('../3.png')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="col-span-2 h-[80vh] shadow-xl relative rounded-xl" >
                        <div className="absolute top-10 left-24">
                            <h2 className="text-8xl text-white w-3/6 pr-10 ">Questions about hosting?</h2>
                        </div>
                        <div className="absolute bottom-20 left-24 cursor-pointer btn-type-one px-8 py-2 flex justify-center text-center items-center ">
                            <h3>
                                Experiences
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardContainer