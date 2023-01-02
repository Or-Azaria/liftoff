import React from 'react'

export default function JuniorForm() {
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

    <div>
      <label htmlFor="CV">
        Upload CV:
        <input type="text" id="CV" placeholder="CV" />
      </label>
      <label htmlFor="git">
        Github link:
        <input type="text" id="git" placeholder="github link" />
      </label>
      <label htmlFor="Country">
        Country:
        <input type="text" id="Country" placeholder="Country" />
      </label>
      <label htmlFor="City">
        City:
        <input type="text" id="City" placeholder="city" />
      </label>
      <label htmlFor="Age">
        City:
        <input type="text" id="Age" placeholder="Age" />
      </label>
    </div>
    <label htmlFor="About">
        About me:
        <input type="text" id="About" placeholder="" />
      </label>
      <button className="bg-lime-600">Save details</button>
  </div>
  )
}
