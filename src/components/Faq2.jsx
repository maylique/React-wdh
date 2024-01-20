const Faq2 = ({ faq2, setfaq2 }) => {
    
    
    const faqOpen2 = () => {
        const dp2 = faq2 ? 'none' : 'flex'
        const omegalul = document.querySelector('#omegalul')
        omegalul.style.display = dp2
        setfaq2(!faq2)
    }

    return ( 
        <>
                <button onClick={faqOpen2} >Show More</button>
            <div className="yo">
                <p id="omegalul">React syntax is ACTUALLY TRASH</p>
            </div>
        </>
     );
}
 
export default Faq2;