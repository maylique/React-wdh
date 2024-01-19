import { useState } from "react"

const Faq = ({ faq, setfaq }) => {

    
    
    const faqOpen = () => {
        let dp = faq ? 'none' : 'block'
        const leckMich = document.querySelector('#leckMich')
        leckMich.style.display = dp
        setfaq(!faq)
    }

    return ( 
        <>
            <div>
                <p>Why ist React great?</p>
                <p id="leckMich" >its not it sucks</p>
                <button onClick={faqOpen}>Show more</button>
            </div>
        </>
     );
}
 
export default Faq;