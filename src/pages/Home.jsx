import React from "react";
import { useState } from "react";
import { FormGroup, FormLabel } from "react-bootstrap";
import AutoComplete from "../components/Form/AutoComplete";
import Select from "../components/Form/Select";

export default function () {

    const [fruit, setFruit] = useState("apple")
    const fruitList = ["apple", "banana", "orange", "grape"].map(d => ({value: d, label: d.toUpperCase()}))

    return (
        <>
            <div className="row p-10">
                <div className="col-lg">
                    <FormGroup>
                        <FormLabel>Fruit:</FormLabel>
                        <AutoComplete value={fruit} setValue={setFruit} list={fruitList} />
                    </FormGroup>
                </div>
                <div className="col-lg">
                    <Select />
                </div>
            </div>
        </>
    )
}