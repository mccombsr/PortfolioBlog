import React from "react";

export default function SideDrawer(props) {
  let drawerClasses = ["sideDrawer"];
  if (props.show) {
    drawerClasses = ["sideDrawer open"];
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li />
        <li />
        <li />
        <li />
        <li>ARCHIVE</li>
        <li>ABOUT</li>
        <li>SUBSCRIBE</li>
        <li>LOGIN</li>
        <li />
        <li />
        <li />
        <li className="closeDrawer" onClick={props.toggleDrawer}>
          X
        </li>
      </ul>
    </nav>
  );
}
