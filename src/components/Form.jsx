import GeneralForm from "./GeneralForm"
import EducationForm from "./EducationForm"
import PracticalForm from "./PracticalForm"
import { useState } from "react";

export default function Form(){
 const [person, setPerson] = useState({name: "", email: "", phone: ""});

    return(
        <form>
            <GeneralForm onClick={setPerson} person={person}/>
            <EducationForm />
            <PracticalForm />
        </form>
    )
}