export default function CurriculumEducation({education}){
    const cards = education.map(item => 
    <div className="education-card">
        <p>{item.school}</p>
        <p>{item.studie}</p>
        <p>{item.date}</p>
    </div>)
    
    return(
        <>
        {cards}
        </>
    )
}