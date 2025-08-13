import GeneralForm from "./GeneralForm"
import EducationForm from "./EducationForm"
import PracticalForm from "./PracticalForm"
import Curriculum from "./Curriculum";
import { useState } from "react";
import '../styles/app.css'

export default function App(){
 const [person, setPerson] = useState({name: "", email: "", phone: ""});
 const [education, setEducation] = useState({school: "", studie: "", date: ""});
 const [practical, setPractical] = useState({company: "", position:"", firstDate: "", lastDate: ""});

    return(
        <div className="app-container">
            <div className="form-conatiner">
                <GeneralForm onClick={setPerson} person={person}/>
                <EducationForm onClick={setEducation} education={education}/>
                <PracticalForm onClick={setPractical} practical={practical}/>
            </div>
            <Curriculum person={person} education={education} practical={practical}/>
        </div>
        
    )
}