import React from "react";
import LeftSideBar from "../components/LeftSideBar";
import NavBar from "../components/NavBar";

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