import React from 'react'
import banner from "../../public/img.avif"

function Banner() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
                <div className=' order-2 w-full md:w-1/2 mt-12 md:mt-32'>
                    <div className='space-y-12'>
                        <h1 className='text-4xl font-bold'>Hello , welcomes here to learn something <span className='text-purple-500'>new everything!!</span>
                        </h1>
                        <p className='text-xl font-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non dolorum vel fuga eius ex quod optio nostrum ut! Dolorem cumque eius deleniti repellat officiis, numquam ex quod ipsa.</p>
                        <label className="input input-bordered flex items-center gap-2">
                        Email
                        <input type="text" className="grow" placeholder="daisy@site.com" />
                    </label>
                    </div>
                    <button className="btn mt-6 btn-secondary">Secondary</button>
                </div>
                <div className=' order-1 w-full md:w-1/2'>
                <img src={banner} className='w-92 h-92' alt=""/>
                </div>
            </div>
        </>
    )
}

export default Banner
