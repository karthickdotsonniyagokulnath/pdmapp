import React from "react";
import LeftSideBar from "../components/LeftSideBar";
import NavBar from "../components/NavBar";

export default function({children}){
    return (
        <div>
            <LeftSideBar />
            <NavBar />
            {children}
        </div>
    )
}