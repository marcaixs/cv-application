import GeneralForm from "./GeneralForm"
import EducationForm from "./EducationForm"
import PracticalForm from "./PracticalForm"
import { useState } from "react";

export default function Form(){
 const [person, setPerson] = useState({name: "", email: "", phone: ""});
 const [education, setEducation] = useState({school: "", studie: "", date: ""});

    return(
        <form>
            <GeneralForm onClick={setPerson} person={person}/>
            <EducationForm onClick={setEducation} education={education}/>
            <PracticalForm />
        </form>
    )
}