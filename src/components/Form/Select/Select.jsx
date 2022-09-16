import React from 'react'
import PropTypes from 'prop-types'
import Dropdown from "react-select"

function Select(props) {

    const { list, value, setValue, isMulti } = props

    return (
        <Dropdown
            options={list}
            value={value}
            onChange={v => {
                setValue(v)
            }}
            isMulti={isMulti}
            {...props}
        />
    )
}

Select.propTypes = {
    list: PropTypes.array.isRequired,
    value: PropTypes.any.isRequired,
    setValue: PropTypes.func.isRequired,
    isMulti: PropTypes.bool
}

export default Select
