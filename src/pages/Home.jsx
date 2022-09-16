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
        reset(defaultValues)
    }

    return (
        <Form onSubmit={handleSubmit(afterSubmit)}>
            <div className="row p-10">
                <div className="col-lg">
                    <FormGroup>
                        <FormLabel>Fruit:</FormLabel>
                        <Controller
                            name="fruit"
                            control={control}
                            render={({field: { value, onChange }}) => <AutoComplete {...{value, onChange}} list={fruitList} inputProps={{placeholder: "Select Fruit"}} />}
                        />
                    </FormGroup>
                </div>
                <div className="col-lg">
                    <FormGroup>
                        <FormLabel>Brand:</FormLabel>
                        <Controller
                            name="brand"
                            control={control}
                            render={({field: { value, onChange }}) => <Select {...{value, onChange}} list={brandList} placeholder="Select Brand" isMulti={true} closeMenuOnSelect={false} />}
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