import React from "react";
import { AppBar, Toolbar, Typography,styled } from "@mui/material";
import {NavLink} from 'react-router-dom';

const Header = styled(AppBar)`
background: #111111;
`;

const Tabs = styled(NavLink)`
font-size: larger;
margin-right: 25px;
cursor: pointer;
color: inherit;
text-decoration: none;
`

const Navbar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/">Crud App</Tabs>
        <Tabs to="/all">All Users</Tabs>
        <Tabs to="/add">Add Users</Tabs>
      </Toolbar>
    </Header>
  );
};

export default Navbar;
