export default function CurriculumPractical({practical}){
    const cards = practical.map(item => 
    <div className="practical-card">
        <p>{item.company}</p>
        <p>{item.position}</p>
        <p>{item.firstDate}</p>
        <p>{item.lastDate}</p>
    </div>)
    
    return(
        <>
        {cards}
        </>
    )
}