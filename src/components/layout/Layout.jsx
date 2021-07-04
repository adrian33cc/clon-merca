import React from "react";


import Header from "./Header";
import Sidebar from './Sidebar';


const Layout = (props) => {
  return (
    <>
      <div id='layoutComponent'>
        <Sidebar />
        <Header />
    </ div>
      {props.children}
    </>
  );
};

export default Layout;
