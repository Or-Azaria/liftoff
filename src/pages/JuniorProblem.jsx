import React from "react";
import { Textarea, Card } from "flowbite-react";

export default function JuniorProblem() {
  return (
    <div className="p-6 w-full mt-10">
      <div className="mb-10">
        <p className="text-2xl mb-5">How can a volunteer help you?</p>
        <p className="mb-1">
          Post your problem and wait for a volunteer to send a message
        </p>
        <Textarea />
        <button className="bg-yellow-300 w-[5rem] rounded-sm text-white font-bold p-1 mt-3">
          post
        </button>
      </div>
      <div className="flex flex-wrap justify-around">
        <div className="max-w-sm mb-3">
          <Card>
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              25.12.2022
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card className="bg-green-300">
            <div className="flex">
              <h5 className="text-xl line-through font-bold tracking-tight text-gray-900 dark:text-white">
                1.11.2022
              </h5>
              <span className="ml-3 text-red-600 font-bold text-xl">
                {" "}
                Answered
              </span>
            </div>

            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card className="bg-green-300">
            <div className="flex">
              <h5 className="text-xl  font-bold tracking-tight text-gray-900 dark:text-white line-through">
                12.09.2022
              </h5>
              <span className="ml-3 text-red-600 font-bold text-xl">
                {" "}
                Answered
              </span>
            </div>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card className="bg-green-300">
            <div className="flex">
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white line-through">
                23.07.2022
              </h5>
              <span className="ml-3 text-red-600 font-bold text-xl">
                {" "}
                Answered
              </span>
            </div>

            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
