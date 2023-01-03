import React from "react";
import { Outlet } from "react-router";
import { useNavigate } from "react-router-dom";

export default function CreateProfile() {
    const navigate = useNavigate();
  return (
    <div className=" bg-amber-400 flex flex-col text-center p-5">
    <p className="text-4xl font-bold	">create your profile</p>
    <div className="flex flex-row justify-center p-3 border-2 w-3/4 border-black m-auto rounded-2xl p-4 bg-amber-200 my-5">
      <div className="border-black border-2 rounded-4xl m-2">תמונה</div>
      <div className="m-2">
        <label htmlFor="personalinfo">
          Personal info:
          <input type="text" id="personalinfo" placeholder="Location" />
        </label>
      </div>
    </div>
    <div className="flex justify-center flex-col p-3 border-2 w-3/4 border-black m-auto bg-amber-200 rounded-2xl p-2 my-5">
<p className="m-2 text-2xl ">continue as a :</p>


    <div><button onClick={()=>navigate("/VolenteerForm")}  className="border-black border-2 focus:bg-lime-600	w-20	">volunteer</button>
    <button onClick={()=>navigate("/JuniorForm")}  className="border-black border-2 focus:bg-lime-600	w-20">junior</button></div>

    <Outlet />
    </div>
  </div>
  )
}
