import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-[#F3F4F6] h-[5em]">
      <div className="flex flex-row justify-start ml-5">
        <NavLink to="/dashboard">
          <h1 className="text-[#16174F] text-xl text-center font-bold pt-5 text-[30px]">
            Parshva Holdings
          </h1>
        </NavLink>
        <div className="pt-4 text-[#16174F] ml-10">
          <ol className="">
            <li className="flex flex-row">
              <NavLink
                to="/dashboard"
                style={({ isActive }) => ({
                  height: "2.5em",
                  margin: "0 1em 0 0",
                  borderRadius: "5px",
                  padding: "0 0.75em 0 0.75em",
                  background: isActive ? "#16174F" : "",
                  color: isActive ? "#FFFFFF" : "#16174F",
                })}
                className="flex items-center p-4 pl-8"
              >
                <li>Dashboard</li>
              </NavLink>
              <NavLink
                to="/addDocket"
                style={({ isActive }) => ({
                  height: "2.5em",
                  borderRadius: "5px",
                  padding: "0 0.75em 0 0.75em",
                  background: isActive ? "#16174F" : "",
                  color: isActive ? "#FFFFFF" : "#16174F",
                })}
                className="flex items-center"
              >
                <li>Add Docket</li>
              </NavLink>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

// F3F3F6
