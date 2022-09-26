const RegisterPage = () => {
    return(
        <div className="container">

            <form id="signup" action="/save_sign_up" method="post">

                <div className="header">

                    <h3>Sign Up</h3>

                    <p>You want to fill out this form</p>

                </div>

                <div className="sep"></div>

                <div className="inputs">

                    <input type="text" name="name" placeholder="name" autoFocus/>

                    <input type="email" name="email" placeholder="e-mail"/>

                    <input type="password" name="password" placeholder="Password"/>

                    <select>
                        <option>CHEF</option>
                        <option>USER</option>
                    </select>


                    <div className="checkboxy">
                        <input name="cecky" id="checky" value="1" type="checkbox"/><label className="terms">I accept the
                        terms of
                        use</label>
                    </div>

                    <input type="submit" value="register"/>

                </div>

            </form>

        </div>
    )
}

export default RegisterPage;