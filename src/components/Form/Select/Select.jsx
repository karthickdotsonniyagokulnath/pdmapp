import React from 'react'
import PropTypes from 'prop-types'
import Dropdown from "react-select"

function Select(props) {

    const { list, value, onChange, isMulti } = props

    return (
        <Dropdown
            options={list}
            value={value}
            onChange={onChange}
            isMulti={isMulti}
            {...props}
        />
    )
}

Select.propTypes = {
    list: PropTypes.array.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    isMulti: PropTypes.bool
}

export default Select
