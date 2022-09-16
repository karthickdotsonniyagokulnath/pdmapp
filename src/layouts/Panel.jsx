import React, { Suspense } from "react";
import Layouts from "./layout2";
import Routes from "./Routes";

export default function(){
    return (
        <Layouts>
            <Routes />
        </Layouts>
    )
}