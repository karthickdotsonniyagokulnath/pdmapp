import React from "react";
import NavBar from "./NavBar";
import SiderBar from "./SiderBar";


export default function({children}){
    return (
        <>
            <SiderBar />
            <div class="container-fluid" id="main-area">
                <NavBar />
                {children}
            </div>
        </>
    )
}