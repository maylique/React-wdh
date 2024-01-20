import { useState } from "react";


const MapCard = ({ question, answer, answerLong }) => {

    const buttonText = [btn, setbtn] = useState(false)

    const textBtn = btn ? 'Show Less' : 'Show More'


    return ( 
        <>
            <p>{question}</p>
            <p>{answer}</p>
            <p>{answerLong}</p>
        </>
     );
}
 
export default MapCard;