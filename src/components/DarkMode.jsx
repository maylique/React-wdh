import { useState } from "react"


const DarkMode = ({darkMode, setdarkMode}) => {

    const background =  darkMode ? 'black' : 'white'
    const color = darkMode ? 'white' : 'black'
    const buttonText = darkMode ? 'Change to white' : 'Change to black'
    const htmlRoot = document.querySelector('html')
    
    htmlRoot.style.backgroundColor = background
    htmlRoot.style.color = color
    
    const darkModeToggle = () => {
      setdarkMode(!darkMode)
    }
    return ( 
        <>
            <div>
                <button onClick={darkModeToggle}>{buttonText}</button>
            </div>
        </>
    );
}
 
export default DarkMode;