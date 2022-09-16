import React from "react";
import { useState } from "react";
import AutoComplete from "../components/Form/AutoComplete";

export default function () {

    const [fruit, setFruit] = useState("apple")
    const fruitList = ["apple", "banana", "orange", "grape"].map(d => ({value: d, label: d.toUpperCase()}))

    return (
        <>
            <div className="row p-10">
                <div className="col-lg">
                    <AutoComplete value={fruit} setFruit={setFruit} list={fruitList} />
                </div>
            </div>
        </>
    )
}