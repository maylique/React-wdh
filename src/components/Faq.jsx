import { useState } from "react"
import Faq2 from "./Faq2"

const Faq = ({ faq, setfaq }) => {

    const [faq2, setfaq2] = useState(false)

    
    
    
    const faqOpen = () => {
        const dp = faq ? 'none' : 'flex'
        const leckMich = document.querySelector('#leckMich')
        leckMich.style.display = dp
        setfaq(!faq)
    }

    return ( 
        <>
            <div>
                <div className="yo">
                    <p>Why ist React great?</p>
                        <button onClick={faqOpen}>Show more</button>
                </div>
                <div className="yo" id="leckMich" >
                    <p>its not it sucks</p>
                < Faq2
                    faq2 = {faq2}
                    setfaq2 = {setfaq2}
                />
                </div>
            </div>
        </>
     );
}
 
export default Faq;