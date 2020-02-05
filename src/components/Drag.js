import React, { useState, useEffect } from 'react'
import './Drag.css'
import { getRandomKey, getArrFromFirebase, setArrToFirebase, capitalizeFirstLetter, swap } from '../config/utils'



function Drag(props) {

    const [options, setOptions] = useState([])
    const [items, setItems] = useState([])
    const [draggableItemOptions, setDraggableItemOptions] = useState({
        dragStartIndex: null,
        draggedOnIndex: null
    })
    const [dropdownValue, setdropdownValue] = useState('')

    const generateOptionsHTMLFromArr = (arr) => {
        let temp = []
        for (const tag of arr)
            temp.push(<option value={capitalizeFirstLetter(tag.name)} key={tag.name} />)
        return temp
    }



    useEffect(() => {
        if (props.options)
            setOptions(generateOptionsHTMLFromArr(props.options))

        getArrFromFirebase().then(arr => setItems(arr))
    }, [props.options])


    const onDragStart = (e, index) => {
        setDraggableItemOptions({ ...draggableItemOptions, dragStartIndex: index })

        e.dataTransfer.effectAllowed = "move"
        e.dataTransfer.setData("text/html", e.target.parentNode)
        e.dataTransfer.setDragImage(e.target.parentNode, 20, 20)
    }

    const onDragOver = (index) => {
        //hover on same place
        if (draggableItemOptions.draggedOnIndex === index)
            return

        setDraggableItemOptions({ ...draggableItemOptions, draggedOnIndex: index })
    }

    const onDragEnd = () => {
        if (!items[draggableItemOptions.draggedOnIndex].value)
            return

        const swappedArr = swap(items, draggableItemOptions.draggedOnIndex, draggableItemOptions.dragStartIndex)

        setArrToFirebase(swappedArr)
        setItems(swappedArr)

    }

    const handleDropdownChange = (e) => {
        const value = e.target.value
        setdropdownValue(value)

    }


    const renderOptionLayout = () => {

        return (
            <div>
                <input
                    name="datalist"
                    id="datalist"
                    list="skills"
                    placeholder="Add your skill here"
                    value={dropdownValue}
                    onChange={handleDropdownChange}
                />
                <datalist id="skills"> {options}</datalist>
            </div>
        )
    }

    const renderNormalLayout = (item, idx) => {
        return (
            <div
                className="drag"
                draggable
                onDragOver={e => onDragOver(idx)}
                onDragStart={e => onDragStart(e, idx)}
                onDragEnd={onDragEnd}>
                <span style={{ display: "flex", alignItems: "center" }}>{item.value || "Add your skill here"}</span>
                <button style={{ color: "white", opacity: 0.8 }}>
                    <svg width="24" height="24" fill="none" stroke="grey" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"   ><circle cx="12" cy="12" r="10"></circle><path d="M15 9l-6 6M9 9l6 6"></path>
                    </svg>
                </button>
            </div>
        )
    }


    return (
        <div className="card">
            <b>The skills you mention here will help hackathon organizers in assessing you as a potential participant</b>
            <ul>
                {items.map((item, idx) => (
                    <li key={item.value || getRandomKey()} onDragOver={() => onDragOver(idx)} className={`skills-list--item ${item.type}`}>
                        {(item.type === "warn") ? renderOptionLayout() : renderNormalLayout(item, idx)}
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default Drag