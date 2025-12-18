import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm flex">
      <div className="px-5">
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/users">Users</Link>
      </div>
    </div>
  );
};

export default NavBar;
