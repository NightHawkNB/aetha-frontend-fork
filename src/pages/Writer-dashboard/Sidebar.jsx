import React, { useContext, createContext, useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-900 shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          {/* Wrap the logo with Link */}
          <Link to="/">
            <img
              src="images/logo.png"
              className={`overflow-hidden transition-all ${
                expanded ? "w-10" : "w-0"
              }`}
              alt="Logo"
            />
          </Link>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {expanded ? <ChevronFirst className="text-gray-900 dark:text-white" /> : <ChevronLast className="text-gray-900 dark:text-white" />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        {/* <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600 dark:text-gray-400">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} className="text-gray-900 dark:text-white" />
          </div>
        </div> */}
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert, linkTo }) {
  const { expanded } = useContext(SidebarContext);

  return (
      <Link to={linkTo}>
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 dark:from-indigo-600 dark:to-indigo-500 dark:text-white"
            : "hover:bg-indigo-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 dark:bg-indigo-600 text-indigo-800 dark:text-white text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
      </Link>
  );
}
