import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  
  const [options, setOptions] = useState([])
  const [items, setItems] = useState(["🍰 Cake", "🍩 Donut", "🍎 Apple", "🍕 Pizza"])
  const [draggableItemOptions, setDraggableItemOptions] = useState({
    dragStartIndex : null,
    draggedOnIndex: null
  })
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  useEffect(() => {
    // axios.get('https://api.stackexchange.com/2.2/tags?site=stackoverflow').then(res => {
    //   let temp = []
    //   for (const tag of res.data.items)
    //     temp.push(<option value={capitalizeFirstLetter(tag.name)} key={tag.name} />)

    //   setOptions(temp)
    // })

    // <label>Choose a browser from this list:

    // <input list="browsers" name="myBrowser" /></label>
    // <datalist id="browsers">
    //   {options}
    // </datalist>
  }, [])


  const onDragStart = (e, index) => {
    setDraggableItemOptions({...draggableItemOptions, dragStartIndex:index})
   

    e.dataTransfer.effectAllowed = "move"
    e.dataTransfer.setData("text/html", e.target.parentNode)
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20)

  }

  const onDragOver = (index) => {
    //hover on same place
    if(draggableItemOptions.draggedOnIndex == index)
      return

    setDraggableItemOptions({...draggableItemOptions, draggedOnIndex:index})
  }

  const onDragEnd = () => {
    let tempItems = items.filter(item => item !== items[draggableItemOptions.dragStartIndex])
    tempItems.splice(draggableItemOptions.draggedOnIndex, 0, items[draggableItemOptions.dragStartIndex])
   
    setItems(tempItems)
  }


  return (
    <div className="card">
      <div>
        <b>The skills you mention here will help hackathon organizers in assessing you as a potential participant</b>
      </div>
      <ul>
        {items.map((item, idx) => (
          <li key={item} onDragOver={() => onDragOver(idx)} className="skills-list--item">
            <div
              className="drag"
              draggable
              onDragOver = {e=>onDragOver(idx)}
              onDragStart={e => onDragStart(e, idx)}
              onDragEnd={onDragEnd}>
              <span style={{ display: "flex", alignItems: "center" }}>{item}</span>
              <button style={{ color: "white", opacity: 0.8 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"   ><circle cx="12" cy="12" r="10"></circle><path d="M15 9l-6 6M9 9l6 6"></path>
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>

  )
}

export default App