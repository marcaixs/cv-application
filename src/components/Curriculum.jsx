import CurriculumPerson from "./CurriculumPerson"
import CurriculumEducation from "./CurriculumEducation"

export default function Curriculum({person, education, practical}){
    return(
    <div className="curriculum">
    <CurriculumPerson person={person}/>
    <CurriculumEducation education={education}/>
    {/* <CurriculumPractical person={practical}/> */}
    </div>
    )
}