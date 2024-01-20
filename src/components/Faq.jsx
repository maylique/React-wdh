import { useState } from "react"

const Faq = ({ faq, setfaq }) => {

    const [faq2, setfaq2] = useState(false)

    
    
    const text = faq ? 'Show Less' : 'Show More'
    const text2 = faq2 ? 'Show Less' : 'Show More'
    
    const faqOpen = (e) => {
        const dp = faq ? 'none' : 'flex'
        e.target.parentNode.nextSibling.style.display = dp
        setfaq(!faq)
    }
    const faqOpen2 = (e) => {
        const dp = faq2 ? 'none' : 'flex'
        e.target.parentNode.nextSibling.style.display = dp
        setfaq2(!faq2)
    }

    return ( 
        <>
            <section className="fuckthis">
                <div className="yo">
                    <p>Why ist React great?</p>
                        <button onClick={faqOpen}>{text}</button>
                </div>
                <div className="yo2">
                    <p>its not it sucks</p>
                    <button onClick={faqOpen2} >{text2}</button>
                </div>
                <div className="yo2">
                <p>React syntax is ACTUALLY TRASH</p>
                </div>
            </section>
        </>
     );
}
 
export default Faq;