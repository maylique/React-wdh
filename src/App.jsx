import { useState } from 'react'
import './App.css'
import DarkMode from './components/DarkMode'

function App() {
  const [darkMode, setdarkMode] = useState(false)



  return (
    <>
      <h1>Dark Mode</h1>
      <DarkMode
      darkMode={darkMode}
      setdarkMode={setdarkMode}
      />
    </>
  )
}

export default App
