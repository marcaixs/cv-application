import { useState } from "react"
import InputsEducation from "./InputsEducation";

export default function EducationForm({onClick, education}){
    const [localEducation, setLocalEducation] = useState({id: crypto.randomUUID(), school: "", studie: "", date: ""});

    const handleDelete = (id) => {
        const updatedEducation = education.filter((item) => item.id !== id);
        onClick(updatedEducation);
    };

    const handleEdit = (id) => {
        setLocalEducation(education.find((item)=> item.id == id))
    }
    
    const cards = education.map(item => 
        <div className="education-card" key={item.id}>
            <p>{item.school}</p>
            <p>{item.studie}</p>
            <p>{item.date}</p>

            <button onClick={
                () => handleEdit(item.id)
            }>Edit</button>

            <button onClick={
                () => handleDelete(item.id)
            }>Delete</button>

        </div>
    )

    return(
        <div className='form-education'>
            <InputsEducation localEducation={localEducation} setLocalEducation={setLocalEducation} education={education} onClick={onClick}/>
            <h4>Submitted education</h4>
            <div>
                {cards}
            </div>    
        </div>
    )
}