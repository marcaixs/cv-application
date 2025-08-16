import { useState } from "react"

export default function PracticalForm({onClick, practical}){
    const [localPractical, setLocalPractical] = useState({id: "", company: "", position:"", firstDate: "", lastDate: ""});

    const cards = education.map(item => 
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
            <div className="form-practical-input">
                <label htmlFor="company">Enter the company name: </label>
                <input type="text" 
                name="company" 
                id="company"
                value={localPractical.company}
                onChange={(e) => {setLocalPractical({...localPractical, company: e.target.value})}} />
            </div>
            <div className="form-practical-input">
                <label htmlFor="position">Enter position title: </label>
                <input type="text" 
                name="position" 
                id="position"
                value={localPractical.position}
                onChange={(e) => {setLocalPractical({...localPractical, position: e.target.value})}} />
            </div>
            <div className="form-practical-input">
                <label htmlFor="position-first-date">Enter your position first date: </label>
                <input type="date" 
                name="position-first-date" 
                id="position-first-date"
                value={localPractical.firstDate}
                onChange={(e) => {setLocalPractical({...localPractical, firstDate: e.target.value})}} />
            </div>
            <div className="form-practical-input">
                <label htmlFor="last-date">Enter your position last date: </label>
                <input type="date" 
                name="last-date" 
                id="last-date"
                value={localPractical.lastDate}
                onChange={(e) => {setLocalPractical({...localPractical, lastDate: e.target.value})}} />
            </div>
            <button onClick={(e)=>{
                e.preventDefault();
                setLocalPractical({...localPractical, id: crypto.randomUUID()})
                onClick([...practical, localPractical])
                }}>Add</button>
        </div>
    )
}