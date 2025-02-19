import React from 'react';
import Cards from './Cards';
import list from "../../public/list.json";
import {Link} from "react-router-dom"

function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>
             "We're delighted to have you"
             <span className='text-blue-800'>Here!</span>
             </h1>
             <p className='mt-12'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aperiam vitae, quasi ipsum autem tempora tenetur reiciendis atque praesentium dolorem nulla necessitatibus ut in dolor inventore facere architecto facilis laudantium nisi quae eveniet soluta laborum alias. Eveniet assumenda aspernatur quos quibusdam dicta blanditiis atque impedit. Dolores ullam veniam sit reprehenderit?
             </p>
            <Link to="/">
            <button className='mt-6 bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-800 duration-300'>Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {list.map((item)=>(
                <Cards key={item.id} item={item}/>
            ))

            }
        </div>
    </div>
    </>
  )
}

export default Course