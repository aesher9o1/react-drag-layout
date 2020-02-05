import React, { useState, useEffect } from 'react'
import './Drag.css'
import { getRandomKey, getArrFromFirebase, setArrToFirebase, capitalizeFirstLetter, swap, generateSkillsHTMLFromArray } from '../config/utils'
import Datalist from './Datalist'


function Drag(props) {

    const [options, setOptions] = useState([])
    const [skills, setSkills] = useState({
        original: [],
        html: []
    })
    const [draggableItemOptions, setDraggableItemOptions] = useState({
        dragStartIndex: null,
        draggedOnIndex: null
    })

    const generateOptionsHTMLFromArr = (arr) => {
        let temp = []
        for (const tag of arr)
            temp.push(<option value={capitalizeFirstLetter(tag.name)} key={tag.name} />)
        return temp
    }


    useEffect(() => {
        if (props.options)
            setOptions(generateOptionsHTMLFromArr(props.options))

        getArrFromFirebase().then(obj => setSkills(obj))
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

        if (!skills.html[draggableItemOptions.draggedOnIndex].value)
            return


        const swappedArr = swap(skills.original, draggableItemOptions.draggedOnIndex, draggableItemOptions.dragStartIndex)

        setArrToFirebase(swappedArr)
        setSkills({
            original: swappedArr,
            html: generateSkillsHTMLFromArray(swappedArr)
        })
    }

    const handleDropdownChange = (option) => {
        const updatedList = [...skills.original, capitalizeFirstLetter(option.name)]

        setArrToFirebase(updatedList)
        setSkills({
            original: updatedList,
            html: generateSkillsHTMLFromArray(updatedList)
        })

    }


    const renderOptionLayout = () => {
        return (
            <li
                key="datalist-field"
                className={`skills-list--item warn`}>
                <Datalist options={props.options}
                    handleDropdownChange={handleDropdownChange}
                />
            </li>
        )
    }

    const renderNormalLayout = (item, idx) => {
        return (
            <li key={item.value || getRandomKey()} onDragOver={() => onDragOver(idx)} className={`skills-list--item ${item.type}`}>
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
            </li>
        )
    }


    return (
        <div className="card">
            <b>The skills you mention here will help hackathon organizers in assessing you as a potential participant</b>
            <ul>
                {skills.html.map((item, idx) =>
                    (item.type === "warn") ? renderOptionLayout() : renderNormalLayout(item, idx)
                )}
            </ul>
        </div>

    )
}

export default Drag