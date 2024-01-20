import { useState } from "react"


const DarkMode = ({darkMode, setdarkMode}) => {

    const background =  darkMode ? 'black' : 'white'
    const color = darkMode ? 'white' : 'black'
    const buttonText = darkMode ? 'Change to white' : 'Change to black'
    const bcolor = darkMode ? '1px solid white' : '1px solid black'
    const htmlRoot = document.querySelector('html')
const bstyle = document.querySelectorAll('.fuckthis');
bstyle.forEach(element => {
  element.style.border = bcolor;
})
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