import React from 'react'
import PropTypes from 'prop-types'
import Autocomplete  from "react-autocomplete"
import { FormControl } from 'react-bootstrap'

function AutoComplete(props) {

    const { value, setValue, list } = props

    return (
        <Autocomplete
            wrapperStyle={{
                display: "block"
            }}
            renderInput={props => <FormControl type="text" {...props} />}
            getItemValue={(item) => item.value}
            items={list.filter(item => item.value.includes(value))}
            renderItem={(item, isHighlighted) =>
                <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                    {item.label}
                </div>
            }
            value={value}
            onChange={e => setValue(e.target.value)}
            onSelect={value => setValue(value)}
            {...props}
        />
    )
}

AutoComplete.propTypes = {
    list: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired
}

export default AutoComplete
