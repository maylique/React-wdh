import { useState } from 'react'
import './App.css'
import DarkMode from './components/DarkMode'
import Faq from './components/Faq'
import Map from './components/map'

function App() {
  const [darkMode, setdarkMode] = useState(true)
  const [faq, setfaq] = useState(false)
  const [map, setmap] = useState(false)


  return (
    <>
      <DarkMode
      darkMode={darkMode}
      setdarkMode={setdarkMode}
      />
      <Faq
        faq={faq}
        setfaq={setfaq}
      />
      <Map
      map={map}
      setmap={setmap}
      />
    </>
  )
}

export default App
