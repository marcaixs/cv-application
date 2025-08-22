export default function InputsEducation ({localEducation, setLocalEducation, education, onClick}){
    return(
        <>
            <h3>Introduce your education background</h3>
                    <div className="form-education-input">
                        <label htmlFor="school">Enter your school name: </label>
                        <input 
                        type="text" 
                        name="school" 
                        id="school"
                        value={localEducation.school}
                        onChange={(e)=> setLocalEducation({...localEducation, school: e.target.value})} />
                    </div>
                    <div className="form-education-input">
                        <label htmlFor="studie-title">Enter studie title: </label>
                        <input 
                        type="text" 
                        name="studie" 
                        id="studie"
                        value={localEducation.studie}
                        onChange={(e)=> setLocalEducation({...localEducation, studie: e.target.value})} />
                    </div>
                    <div className="form-education-input">
                        <label htmlFor="studie-date">Enter your studies date: </label>
                        <input 
                        type="date" 
                        name="studie-date" 
                        id="date" 
                        value={localEducation.date}
                        onChange={(e)=> setLocalEducation({...localEducation, date: e.target.value})}/>
                    </div>
                    <button className="add-button" onClick={(e) =>{
                        e.preventDefault();
                        const found = education.find((item)=> item.id == localEducation.id);
                        if (found){
                           const newEducation = education.map((object) =>{
                                if(object.id == localEducation.id){
                                    return localEducation
                                }
                                return object
                            })
                            onClick(newEducation)
                            
                        } else {
                            onClick([...education, localEducation])
                        }
                        }}>Add</button>
    </>
    )
    
}