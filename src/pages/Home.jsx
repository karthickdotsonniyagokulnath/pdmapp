import React from "react";
import { Button, Form, FormGroup, FormLabel } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import AutoComplete from "../components/Form/AutoComplete";
import Select from "../components/Form/Select";

export default function () {

    const fruitList = ["apple", "banana", "orange", "grape"].map(d => ({ value: d, label: d.toUpperCase() }))
    const brandList = ["IPhone", "Samsung", "Moto", "Xiomi", "Oppo"].map(d => ({ value: d, label: d.toUpperCase() }))

    const defaultValues = {
        fruit: "",
        brand: []
    }

    const { control, reset, handleSubmit } = useForm({ defaultValues })

    const afterSubmit = data => {
        debugger
    }

    return (
        <Form onSubmit={handleSubmit(afterSubmit)}>
            <div className="row p-10">
                <div className="col-lg">
                    <FormGroup>
                        <FormLabel>Fruit:</FormLabel>
                        {/* <AutoComplete value={fruit} setValue={setFruit}  /> */}
                        <Controller
                            list={fruitList}
                            name="fruit"
                            control={control}
                            render={({field}) => {
                                return <AutoComplete value={field.value} setValue={field.onChange} list={fruitList} inputProps={{placeholder: "Select Fruit"}} />
                            }}
                        />
                    </FormGroup>
                </div>
                <div className="col-lg">
                    <FormGroup>
                        <FormLabel>Brand:</FormLabel>
                        {/* <Select list={brandList} value={brand} setValue={setBrand} isMulti={true} closeMenuOnSelect={false} placeholder="Select Brand" /> */}
                        <Controller
                            list={fruitList}
                            name="brand"
                            control={control}
                            render={({field}) => {
                                return <Select value={field.value} list={brandList} setValue={field.onChange} placeholder="Select Brand" isMulti={true} closeMenuOnSelect={false} />
                            }}
                        />
                    </FormGroup>
                </div>
            </div>
            <div className="row p-10">
                <div className="col-lg">
                    <Button type="submit" variant="success">Submit</Button>
                    <Button type="button" className="ml-5" variant="warning" onClick={() => reset(defaultValues)}>Reset</Button>
                </div>
            </div>
        </Form>
    )
}