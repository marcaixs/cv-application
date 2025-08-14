import CurriculumPerson from "./CurriculumPerson"
import CurriculumEducation from "./CurriculumEducation"
import CurriculumPractical from "./CurriculumPractical"

export default function Curriculum({person, education, practical}){
    return(
    <div className="curriculum">
    <CurriculumPerson person={person}/>
    <CurriculumEducation education={education}/>
    <CurriculumPractical practical={practical}/>
    </div>
    )
}