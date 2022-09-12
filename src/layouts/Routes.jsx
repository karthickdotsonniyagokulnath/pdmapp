import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../components/Loader";

const Home = lazy(() => import("../pages/Home"));

export default function(){
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Suspense>
    )
}