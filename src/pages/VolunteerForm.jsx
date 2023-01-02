import React from 'react'

export default function VolunteerForm() {
  return (
    <div className="flex flex-col p-3 w-3/4  m-auto">
      <label className='m-2' htmlFor="Experience">
        Experience:
        <input type="text" id="Experience" placeholder="Location" />
      </label>
      <div><button className="border-black border-2 	w-20	">Node</button> <button className="border-black border-2 	w-20	">phyton</button> <button className="border-black border-2 	w-20	">JavaScript</button> <button className="border-black border-2	w-20	">React</button></div>
      <label className='m-2' htmlFor="Knowledge">
        Knowledge:
        <input type="text" id="Knowledge" placeholder="Location" />
      </label>

      <label className='m-2' htmlFor="Specializes">
        Specializes in:
        <input type="text" id="Specializes" placeholder="Location" />
      </label>
      <div>
        <label className='m-2' htmlFor="Country">
          Country:
          <input type="text" id="Country" placeholder="country" />
        </label>
        <label className='m-2' htmlFor="Specializes">
          City:
          <input type="text" id="Specializes" placeholder="Specializes" />
        </label>
        <label className='m-2' htmlFor="Age">
          Age:
          <input type="text" id="Age" placeholder="Age" />
        </label>
       
      </div>
      <label className='m-2' htmlFor="About">
          About me:
          <input type="text" id="About" placeholder="" />
        </label>
        <button className="bg-lime-600 h-10 m-auto ">Save details</button>
    </div>
  )
}
