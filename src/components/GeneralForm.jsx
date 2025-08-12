export default function GeneralForm(){
    return(
        <div>
            <div class="form-example">
                <label for="name">Enter your name: </label>
                <input type="text" name="name" id="name" required />
            </div>
            <div class="form-example">
                <label for="email">Enter your email: </label>
                <input type="email" name="email" id="email" required />
            </div>
            <div class="form-example">
                <label for="phone">Enter your phone number: </label>
                <input type="text" name="phone" id="phone" required />
            </div>
        </div>
    )
}