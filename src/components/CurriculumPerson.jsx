export default function CurriculumPerson({person}){
    return(
        <div className="curriculum-person">
            <p>Name: {person.name}</p>
            <p>eMail: {person.email}</p>
            <p>Phone: {person.phone}</p>
        </div>
    )
}