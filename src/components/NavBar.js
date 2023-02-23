import React from "react";
import { NavLink } from "react-router-dom";

const styleLink = {
  padding: ".75em",
  background: "black",
  marginRight: "1em",
  color: "white",
  borderRadius: ".5em",
};

const activeLink = { background: "#4F4F4F" };

function NavBar() {
  return (
    <div style={{ marginTop: "1.5em" }}>
      <NavLink exact to="/" style={styleLink} activeStyle={activeLink}>
        Home
      </NavLink>
      <NavLink to="/movies" style={styleLink} activeStyle={activeLink}>
        Movies
      </NavLink>
      <NavLink to="/directors" style={styleLink} activeStyle={activeLink}>
        Directors
      </NavLink>
      <NavLink to="/actors" style={styleLink} activeStyle={activeLink}>
        Actors
      </NavLink>
    </div>
  );
}

export default NavBar;
