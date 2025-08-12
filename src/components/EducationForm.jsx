export default function EducationForm(){
    return(
        <div>
            <div class="form-example">
                <label for="school-name">Enter your school name: </label>
                <input type="text" name="school-name" id="school-name" required />
            </div>
            <div class="form-example">
                <label for="studie-title">Enter studie title: </label>
                <input type="text" name="studie" id="studie" required />
            </div>
            <div class="form-example">
                <label for="studie-date">Enter your studies date: </label>
                <input type="date" name="studie-date" id="studie-date" required />
            </div>
        </div>
    )
}