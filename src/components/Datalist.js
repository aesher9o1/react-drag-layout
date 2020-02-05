import React, { useState, useEffect } from 'react'
import './Datalist.css'

function Datalist(props) {
    const [filteredOptions, setFilteredOptions] = useState(props.options)
    const [inputValue, setInputValue] = useState('')
    const [isListVisible, setIsListVisible] = useState(false)

    useEffect(() => {

    }, [props.options])

    const updateFilter = (e) => {


        let filteredOptions = []

        for (let i = 0; i < props.options.length; i++) {
            const item = props.options[i]
            if (item.name.includes(e.target.value.toLowerCase()))
                filteredOptions.push(item)

        }

        setFilteredOptions(filteredOptions)
        setInputValue(e.target.value)

        if (filteredOptions.length === props.options.length)
            setIsListVisible(false)
        else
            setIsListVisible(true)
    }

    const handleItemClick = (option) => {
        setIsListVisible(false)
        setInputValue(option.name)
    }

    const handleVisibility = (e) => {

        if (e.target.value.length < 2)
            return
        setIsListVisible(!isListVisible)
    }

    return (
        <div style={{ position: 'relative' }}>
            <input type="text" value={inputValue} onChange={updateFilter} />
            {(isListVisible) ?
                <div className="wrapper">
                    {
                        filteredOptions.map((option, index) => {
                            return (<div key={option.name} onClick={() => handleItemClick(option)} className="listItem">{option.name}</div>)
                        })
                    }
                </div>
                : <div></div>
            }
        </div>
    )
}

export default Datalist