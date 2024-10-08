import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-slate-700 text-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Shopping</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <details>
                <summary>Details</summary>
                <ul className="bg-slate-700 rounded-t-none p-2">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
