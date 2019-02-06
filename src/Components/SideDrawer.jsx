import React from "react";

export default function SideDrawer(props) {
  return (
    <nav className="sideDrawer">
      <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        <li>ARCHIVE</li>
        <li>ABOUT</li>
        <li>SUBSCRIBE</li>
        <li>LOGIN</li>
        <li></li>
        <li></li>
        <li></li>
        <li className="closeDrawer" onClick={props.toggleDrawer}>
          X
        </li>
      </ul>
    </nav>
  );
}
