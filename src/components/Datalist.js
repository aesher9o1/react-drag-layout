import React, { useState, useEffect } from 'react'
import './Datalist.css'
import { capitalizeFirstLetter } from '../config/utils'

function Datalist(props) {
    const [filteredOptions, setFilteredOptions] = useState(props.options)
    const [inputValue, setInputValue] = useState('')
    const [isListVisible, setIsListVisible] = useState(false)

    useEffect(() => { }, [props.options])

    const updateFilter = (e) => {
        let filteredOptions = []

        for (let i = 0; i < props.options.length; i++) {
            const item = props.options[i]
            if (item.name.startsWith(e.target.value.toLowerCase()))
                filteredOptions.push(item)
        }

        setFilteredOptions(filteredOptions)
        setInputValue(e.target.value)

        if (filteredOptions.length === props.options.length)
            setIsListVisible(false)
        else if (filteredOptions.length === 0)
            filteredOptions.push({
                name: e.target.value
            })
        else
            setIsListVisible(true)
    }

    const handleItemClick = (option) => {
        setIsListVisible(false)
        props.handleDropdownChange(option)
        setInputValue('')
    }

    return (
        <div style={{ position: 'absolute' }}>
            <input type="text" value={inputValue} onChange={updateFilter} placeholder="Add your skill here" />
            {(isListVisible) ?
                <div className="wrapper">
                    {
                        filteredOptions.map((option, index) => {
                            return (<div key={option.name} onClick={() => handleItemClick(option)} className="listItem">{capitalizeFirstLetter(option.name)}</div>)
                        })
                    }
                </div>
                : <div></div>
            }
        </div>
    )
}

export default React.memo(Datalist)