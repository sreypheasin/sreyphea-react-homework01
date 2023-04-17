import React from 'react'

export default function Header() {
  return (
    <div className='container-fluid mx-auto flex  bg-indigo-900 p-4 text-white'>
        <h1 className='logo text-2xl grow font-semibold'>ODINN</h1>
        <ul className='flex grow mx-auto justify-evenly font-medium '>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/products'>Products</a>
            </li>
            <li>
                <a href='/about'>About</a>
            </li>
            <li>
                <a href='/feedback'>Feedback</a>
            </li>
        </ul>
        
    </div>
  )
}
