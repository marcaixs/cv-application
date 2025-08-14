import { useState } from "react"

export default function EducationForm({onClick, education}){
    const [localEducation, setLocalEducation] = useState({school: "", studie: "", date: ""});

    return(
        <div className='form-education'>
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
                onClick([...education, localEducation])
                }}>Add</button>
        </div>
    )
}