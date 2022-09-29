import {useState} from "react";
import Header from "./Header";
import {getApi, postFetch} from "../util/Fetch";

const RegisterPage = () => {

    const [name, setName] = useState([])

    const [password, setPassword] = useState([])

    const [email, setEmail] = useState([])

    const [role, setRole] = useState("USER")

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleEmailChange = (event) =>  {
        setEmail(event.target.value);
    }

    const handleRoleChange = (event) =>  {
        console.log(event.target.value)
        setRole(event.target.value);
    }

    const register = (e) => {
        e.preventDefault();
        postFetch(`/register`, {name, password, email, role}).then()

    }

    return(
        <div>
            <Header/>

                <div className="register-container">


                    <form id="signup" onSubmit={register}>

                        <div className="header">
                            <h3>Sign Up</h3>
                            <p>You want to fill out this form</p>
                        </div>

                        <div className="sep"></div>

                        <div className="inputs">

                            <input type="text" name="name" placeholder="name" autoFocus onChange={handleNameChange}/>

                            <input type="email" name="email" placeholder="e-mail" onChange={handleEmailChange}/>

                            <input type="password" name="password" placeholder="Password" onChange={handlePasswordChange}/>

                            <select onChange={handleRoleChange}>
                                <option value={"CHEF"}>CHEF</option>
                                <option value={"USER"}>USER</option>
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

        </div>


    )
}

export default RegisterPage;