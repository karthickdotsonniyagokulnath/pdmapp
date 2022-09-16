import React from 'react'
import PropTypes from 'prop-types'
import Autocomplete  from "react-autocomplete"
import { FormControl } from 'react-bootstrap'

function AutoComplete({value, setFruit, list}) {

    return (
        <Autocomplete
            renderInput={props => <FormControl type="text" {...props} />}
            getItemValue={(item) => item.value}
            items={list.filter(item => item.value.includes(value))}
            renderItem={(item, isHighlighted) =>
                <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                    {item.label}
                </div>
            }
            value={value}
            onChange={e => setFruit(e.target.value)}
            onSelect={value => setFruit(value)}
        />
    )
}

AutoComplete.propTypes = {
    list: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired,
    setFruit: PropTypes.func.isRequired
}

export default AutoComplete
