import { useState } from 'react'
import data from '../assets/data'

const Map = ({ map, setmap }) => {

    return ( 
        <>
            {data.map((el, index) => {

                const [faq, setfaq] = useState(false)
                const [faq2, setfaq2] = useState(false)

                const textmap2 = faq2 ? 'Show Less' : 'Show More'
                const textmap = faq ? 'Show Less' : 'Show More'
    
    
    
                const faqOpen = (e) => {
                        const dp = faq ? 'none' : 'flex'
                    e.target.parentNode.nextSibling.style.display = dp
                    e.target.textContent = textmap
                        setfaq(!faq)
                    }
                const faqOpen2 = (e) => {
                        const dp2 = faq2 ? 'none' : 'flex'
                    e.target.parentNode.nextSibling.style.display = dp2
                    e.target.textContent = textmap2
                        setfaq2(!faq2)
                    }
                return (
                    <section className='fuckthis' key={index}>
                        <div className="yo">
                        <p>{el.question}</p>
                                <button onClick={faqOpen}>{textmap}</button>
                        </div>
                    <div className='yo2'>
                        <p>{el.answer}</p>
                        <button onClick={faqOpen2}>{textmap2}</button>
                    </div>
                    <div className='yo2'>
                        <p>{el.answerLong}</p>
                    </div>
                    </section>
                )})}
        </>
    );
}

export default Map;

