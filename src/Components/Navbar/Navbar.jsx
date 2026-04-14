import React from 'react'
import { NavLink } from 'react-router'
import "./Navbar.css"

export const Navbar = () => {
  return (
    <div className='shadow-md'>
      <div className='container mx-auto'>
        <div className="navbar">
          <div className="flex-1">
            <img src="/assets/logo.png" alt="" />
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal gap-4 px-1 font-semibold text-[#64748B]">
              <li>
                <NavLink to="/"> <i className="fa-regular fa-house"></i> Home</NavLink>
              </li>
              <li>
                <NavLink to="/timeline"> <i className="fa-regular fa-clock"></i> Timeline</NavLink>
              </li>
              <li>
                <NavLink to="/stats"> <i className="fa-solid fa-chart-line"></i> Stats</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
