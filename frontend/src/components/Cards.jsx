import React from 'react'

function Cards({item}) {
    // console.log(item)
  return (
    <>
    <div className='mt-4 my-3'>
    <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
  <figure className="px-10 pt-10">
    <img src={item.image} alt="Shoes"/>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">
        {item.name}</h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
        <div className='badge badge-outline'>${item.price}</div>
        <div className=' bg-blue-500 cursor-pointer px-2 py-1 rounded-full  border-[2px] hover:bg-black hover:text-white duration-200'>Buy now</div>
      {/* <button className="btn btn-primary">Buy Now</button> */}
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards