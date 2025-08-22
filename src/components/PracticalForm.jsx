import { useState } from "react"

export default function PracticalForm({onClick, practical}){
    const [localPractical, setLocalPractical] = useState({id: crypto.randomUUID(), company: "", position:"", firstDate: "", lastDate: ""});

    function handleDelete(id){
        const updatedPractical = practical.filter((item)=> item.id != id);
        onClick(updatedPractical);
    }

    const cards = practical.map(item => 
    <div className="practical-card" key={item.id}>
        <p>{item.company}</p>
        <p>{item.position}</p>
        <p>{item.firstDate}</p>
        <p>{item.lastDate}</p>
        <button onClick={
            () => handleDelete(item.id)
        }>Delete</button>
    </div>)

    return(
        <div className="form-practical">
           
                <h4>Submitted work experience</h4>
            <div>
                {cards}
            </div>  
        </div>
    )
}