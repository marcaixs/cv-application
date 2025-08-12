export default function PracticalForm(){
    return(
        <div>
            <div class="form-example">
                <label for="company-name">Enter the company name: </label>
                <input type="text" name="company-name" id="company-name" required />
            </div>
            <div class="form-example">
                <label for="position-title">Enter position title: </label>
                <input type="text" name="position-title" id="position-title" required />
            </div>
            <div class="form-example">
                <label for="position-first-date">Enter your position first date: </label>
                <input type="date" name="position-first-date" id="position-first-date" required />
            </div>
            <div class="form-example">
                <label for="position-last-date">Enter your position last date: </label>
                <input type="date" name="position-last-date" id="position-last-date" required />
            </div>
        </div>
    )
}