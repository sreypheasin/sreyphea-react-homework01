import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
export default function Feedback() {
  return (
    <div>
        <div className='flex flex-col items-center mb-10'>
          <FontAwesomeIcon icon={faComments} className='text-indigo-900 fa-5x'/>
          <h1 className='text-indigo-900 text-4xl font-serif pt-5'>Customer Feedback</h1>
          <p className='opacity-75 leading-10'>Thank you for taking time to provide feedback. We appreciate hearing from you and will reveiw you comment carefuly.</p>

          <form className='w-4/5 bg-white shadow-lg shadow-gray-200 mx-auto items-center p-5 mt-10 rounded-xl border-t-2'>
            <p>Would you recomment it to your friends and colleagues?</p>
              <div className='flex gap-10 mt-5'>
                <div className=''>
                  <input type='radio' name='recomment'></input>
                  <label className='ml-2'>Yes</label>
                </div>
                <div>
                  <input type='radio' name='recomment'></input>
                  <label className='ml-2'>No</label>
                </div>
              </div>
            <p className='mt-5'>Do you have any suggestion to improve our product and service?</p>
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
            <textarea id="message" rows="5" class="block p-2.5 w-full text-sm text-black bg-slate-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-300 bg-slate-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
            <button class="rounded-lg bg-indigo-900 pl-5 pr-5 p-1 text-white mt-5 items-end">Submit</button>
          </form>

        </div>
    </div>
  )
}
