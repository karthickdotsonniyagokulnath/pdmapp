import React from "react";
import { SITE_LAYOUT } from "../contants";
import Layout1 from "./layout1";
import Layout2 from "./layout2";
import Routes from "./Routes";

const Layout = (layout => {
    switch (layout) {
        case 1:
            return Layout1
        case 2:
            return Layout2
        default:
            return Layout1
    }
})(SITE_LAYOUT)

export default function(){
    return (
        <Layout>
            <Routes />
        </Layout>
    )
}