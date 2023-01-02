import React from 'react'
import { Textarea } from 'flowbite-react'

export default function JuniorProblem() {
  return (
    <div className='p-6 rounded-lg shadow-xl mt-10'>
        <p className='text-2xl mb-5'>How can a volunteer help you?</p>
        <Textarea/>
        <button className='bg-yellow-300 w-[5rem] rounded-sm text-white font-bold p-1 mt-3'>post</button>
    </div>
  )
}
