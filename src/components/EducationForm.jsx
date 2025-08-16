import { useState } from "react"

export default function EducationForm({onClick, education}){
    const [localEducation, setLocalEducation] = useState({id: "", school: "", studie: "", date: ""});

    const handleDelete = (id) => {
        const updatedEducation = education.filter((item) => item.id !== id);
        onClick(updatedEducation);
    };
    
    const cards = education.map(item => 
    <div className="education-card" key={item.id}>
        <p>{item.school}</p>
        <p>{item.studie}</p>
        <p>{item.date}</p>
        <button onClick={
            () => handleDelete(item.id)
        }>Delete</button>
    </div>)

    return(
        <div className='form-education'>
            <h3>Introduce your education background</h3>
            <div className="form-education-input">
                <label htmlFor="school">Enter your school name: </label>
                <input 
                type="text" 
                name="school" 
                id="school"
                value={localEducation.school}
                onChange={(e)=> setLocalEducation({...localEducation, school: e.target.value})} />
            </div>
            <div className="form-education-input">
                <label htmlFor="studie-title">Enter studie title: </label>
                <input 
                type="text" 
                name="studie" 
                id="studie"
                value={localEducation.studie}
                onChange={(e)=> setLocalEducation({...localEducation, studie: e.target.value})} />
            </div>
            <div className="form-education-input">
                <label htmlFor="studie-date">Enter your studies date: </label>
                <input 
                type="date" 
                name="studie-date" 
                id="date" 
                value={localEducation.date}
                onChange={(e)=> setLocalEducation({...localEducation, date: e.target.value})}/>
            </div>
             <button onClick={(e) =>{
                e.preventDefault();
                setLocalEducation({...localEducation, id: crypto.randomUUID()})
                onClick([...education, localEducation])
                }}>Add</button>
            <h4>Submitted education</h4>
            <div>
                {cards}
            </div>    
        </div>
    )
}