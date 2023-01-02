import React from 'react'

export default function VolunteerForm() {
  return (
    <div className="flex flex-col p-3 w-3/4  m-auto">
      <label htmlFor="Experience">
        Experience:
        <input type="text" id="Experience" placeholder="Location" />
      </label>
      <div>כפתור כפתור כפתור כפתור</div>
      <label htmlFor="Knowledge">
        Knowledge:
        <input type="text" id="Knowledge" placeholder="Location" />
      </label>

      <label htmlFor="Specializes">
        Specializes in:
        <input type="text" id="Specializes" placeholder="Location" />
      </label>
      <div>
        <label htmlFor="Country">
          Country:
          <input type="text" id="Country" placeholder="country" />
        </label>
        <label htmlFor="Specializes">
          City:
          <input type="text" id="Specializes" placeholder="Specializes" />
        </label>
        <label htmlFor="Age">
          Age:
          <input type="text" id="Age" placeholder="Age" />
        </label>
        <label htmlFor="About">
          About me:
          <input type="text" id="About" placeholder="" />
        </label>
        <button className="bg-lime-600 w-2/5 h-18">Save details</button>
      </div>
    </div>
  )
}
