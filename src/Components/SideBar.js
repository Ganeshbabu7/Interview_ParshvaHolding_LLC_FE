import React from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="bg-[#4F46E5] w-[10em]">
      <ol className="">
        <li>
          <NavLink
            to="dashboard"
            style={({ isActive }) => ({
              background: isActive ? "#F3F3F6" : "",
              color: isActive ? "#16174F" : "#FFFFFF",
            })}
            className="flex items-center rounded-l-full p-4 pl-8"
          >
            <li>Dashboard</li>
          </NavLink>
          <NavLink
            to="addDocket"
            style={({ isActive }) => ({
              background: isActive ? "#F3F3F6" : "",
              color: isActive ? "#16174F" : "#FFFFFF",
            })}
            className="flex items-center rounded-l-full p-4 pl-8"
          >
            <li>Add Docket</li>
          </NavLink>
        </li>
      </ol>
    </div>
  );
}

export default SideBar;
