import React from "react";
import LeftSideBar from "./LeftSideBar";
import NavBar from "./NavBar";

import "./style.css"

export default function({children}){
    return (
        <div>
            <NavBar />
            <LeftSideBar />
            <section className="main">
                {children}
            </section>
        </div>
    )
}