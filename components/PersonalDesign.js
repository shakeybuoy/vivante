import React from 'react'

function PersonalDesign() {
    return (
        <div className="px-24 my-40">
            <div>
                <h1 className="text-black text-4xl font-medium">Personally designed trips</h1>
                <p className="text-2xl mt-10">When you book an Vivante home, you&apos;re connected with a dedicated trip designer who&apos;s there to craft your five-star stay.</p>
            </div>
            <div className="flex justify-center w-full">
                <div className="mt-10 grid grid-cols-3 w-4/6 gap-x-5 gap-y-10">
                    <Personal name="chef" link={'https://a0.muscache.com/im/pictures/f5c74860-615f-42a2-96b6-925b03ff531c.jpg?im_w=1200'} />
                    <Personal name="driver" link={'https://a0.muscache.com/im/pictures/b9e869d5-4b6c-4457-987b-68f8eb44bbee.jpg?im_w=1200'} />
                    <Personal name="equipment rental" link={'https://a0.muscache.com/im/pictures/88111a6b-c654-44d2-8295-f7aa27831c8a.jpg?im_w=1200'} />
                    <Personal name="childcare" link={'https://a0.muscache.com/im/pictures/89236252-5674-4379-908a-ec0882dbe843.jpg?im_w=1200'} />
                    <Personal name="butler" link={'https://a0.muscache.com/im/pictures/ccee648c-54b2-47d0-84d6-3c923bdc3912.jpg?im_w=1200'} />
                    <Personal name="massage" link={'https://a0.muscache.com/im/pictures/4e668d90-0d79-485a-978d-b412830e2d21.jpg?im_w=1200'} />
                </div>
            </div>
        </div>
    )
}
const Personal = ({ name, link }) => {
    return (
        <div className="flex flex-col">
            <img src={link} className="rounded-xl" />
            <h2 className="capitalize text-md mt-3 font-medium">{name}</h2>
        </div>
    )
}


export default PersonalDesign