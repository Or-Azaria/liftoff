import React from "react";
import { Accordion, Avatar } from "flowbite-react";
import { useNavigate } from "react-router";

export default function MentorHelp() {
    const navigate = useNavigate();
  return (
    <div className="w-3/4 m-auto mt-32">
        <div>
        <h3>Volunteer & and help juniors to improve themselves</h3>
        </div>
      <Accordion alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title>
            <div className="flex flex-wrap gap-2 items-center">
              <Avatar rounded={true} />
              <div className="ml-2">
                <p className="text-sm">Naharia</p>
                <p className="font-bold"> Moshe Levi</p>
                <p> Full Stack developer</p>
              </div>
            </div>
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Hey, I need help with a project I am working on with react and
              nodeJS.
            </p>
            <button
              className="bg-green-400 text-white p-1"
              onClick={()=>navigate('/chat')}
            >
              Send a message
            </button>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            <div className="flex flex-wrap gap-2 items-center">
              <Avatar rounded={true} />
              <div className="ml-2">
                <p className="text-sm">Eilat</p>
                <p className="font-bold"> Dana Cohen</p>
                <p> QA Automation</p>
              </div>
            </div>
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Hey, I need HR that can help me with an interview simulation.
            </p>
            <button className="bg-green-400 text-white p-1">
              Send a message
            </button>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            <div className="flex flex-wrap gap-2 items-center">
              <Avatar rounded={true} />
              <div className="ml-2">
                <p className="text-sm">Tel-Aviv</p>
                <p className="font-bold"> Oren Chen</p>
                <p> Frontend Developer</p>
              </div>
            </div>
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Hey, I need to rewrite my resume, think you can help me with that?
            </p>
            <button className="bg-green-400 text-white p-1">
              Send a message
            </button>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
