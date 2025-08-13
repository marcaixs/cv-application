import { useState } from "react"

export default function GeneralForm({onClick, person}){
     const [localPerson, setLocalPerson] = useState(person);

    return(
        <div className="form-general">
            <div className="form-general-input">
                <label htmlFor="name">Enter your name: </label>
                <input 
                type="text" 
                name="name" 
                id="name"
                value={localPerson.name}
                onChange={(e)=> setLocalPerson({...localPerson, name: e.target.value})}  />
            </div>
            <div className="form-general-input">
                <label htmlFor="email">Enter your email: </label>
                <input 
                type="email" 
                name="email" 
                id="email"
                value={localPerson.email}
                onChange={(e)=> setLocalPerson({...localPerson, email: e.target.value})}  />
            </div>
            <div className="form-general-input">
                <label htmlFor="phone">Enter your phone number: </label>
                <input 
                type="text" 
                name="phone" 
                id="phone"
                value={localPerson.phone}
                onChange={(e)=> setLocalPerson({...localPerson, phone: e.target.value})}  />
            </div>
            <button onClick={(e) => {
            e.preventDefault();
            onClick(
                {...person, ...localPerson }
            )}}>Submit</button>
        </div>
    )
}