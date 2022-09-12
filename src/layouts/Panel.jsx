import React, { Suspense } from "react";
import Layouts from ".";
import Routes from "./Routes";

export default function(){
    return (
        <Layouts>
            <Routes />
        </Layouts>
    )
}