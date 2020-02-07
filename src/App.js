import React, { useState, useEffect } from 'react'
import Drag from './components/Drag'
import Tasktwo from './components/Tasktwo'
import axios from 'axios'
import skills from './config/demoSkills.json'


function App() {
  const [options, setOptions] = useState(null)

  useEffect(() => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')
      setOptions(skills.items)
    else
      axios.get('https://api.stackexchange.com/2.2/tags?site=stackoverflow').then(res => setOptions(res.data.items))

  }, [])


  return (
    <section >
      <Drag options={options} />
      <Tasktwo />
    </section>

  )
}

export default App