import React from 'react'
import AddtoCartBtn from './AddtoCartBtn'

export default function ProductCard(props) {
  return (
        <div className='card bg-white p-3 rounded-lg shadow-lg w-60 mb-10 mt-10 '>
            <img className='rounded-lg' src={props.image}></img>
            <div class="description pt-2 ">
                <div className='h-12 line-clamp-2'>
                    <p className='opacity-75'>{props.title}</p>
                </div>
                <div className='flex mx-auto pt-3 items-end'>
                    <p className='opacity-75 grow'>{props.price}</p>
                    <AddtoCartBtn className='grow'/>
                </div>
            </div>
        </div> 
  )
}
