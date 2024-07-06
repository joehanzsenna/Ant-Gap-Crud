import React from "react";
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/create"}>
          <li>Create Post</li>
        </Link>
      </div>
    </div>
  );
}
