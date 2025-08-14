import CurriculumPerson from "./CurriculumPerson"
import CurriculumEducation from "./CurriculumEducation"
import CurriculumPractical from "./CurriculumPractical"

export default function Curriculum({person, education, practical}){
    return(
    <div className="curriculum">
    <h2>Curriculum Vitae</h2>
    <h3>Personal Information</h3>    
    <CurriculumPerson person={person}/>
    <h3>Education</h3>
    <CurriculumEducation education={education}/>
    <h3>Practical Experience</h3>
    <CurriculumPractical practical={practical}/>
    </div>
    )
}