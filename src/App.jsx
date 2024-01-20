import { useState } from 'react'
import './App.css'
import DarkMode from './components/DarkMode'
import Faq from './components/Faq'
import Faq2 from './components/Faq2'

function App() {
  const [darkMode, setdarkMode] = useState(true)
  const [faq, setfaq] = useState(false)


  return (
    <>
      <h1>Dark Mode</h1>
      <DarkMode
      darkMode={darkMode}
      setdarkMode={setdarkMode}
      />
      <Faq
        faq={faq}
        setfaq={setfaq}
        />
    </>
  )
}

export default App
