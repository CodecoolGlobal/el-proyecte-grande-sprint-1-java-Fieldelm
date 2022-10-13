import { useState } from "react";
import Header from "../landingpage/Header";
import { postFetch } from "../../util/Fetch";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RegisterPage = () => {

    const [name, setName] = useState([])

    const [password, setPassword] = useState([])

    const [email, setEmail] = useState([])

    const [role, setRole] = useState("CUSTOMER")

    const [status, setStatus] = useState(0)

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        switch (status) {
            case 0:
                setErrorMessage('');
                break;
            case 202:
                navigate('/', { replace: false });
                break;
            case 409:
                setErrorMessage('Acount already exists');
                break;
            default:
                setErrorMessage('Unknown ' + status)
        }
    }, [status]);




    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleRoleChange = (event) => {
        console.log(event.target.value)
        setRole(event.target.value);
    }

    const register = (e) => {
        e.preventDefault();
        postFetch(`/register`, { name, password, email, role }).then(response => setStatus(response.status));


    }

    return (
        <div>
            <Header />

            <div className="register-container">



                <form id="signup" onSubmit={register}>

                    <div>{(errorMessage !== '') ? <p>{errorMessage}</p> : <></>}</div>
                    <div className="header">
                        <h3>Sign Up</h3>
                        <p>You want to fill out this form</p>
                    </div>

                    <div className="sep"></div>

                    <div className="inputs">

                        <input type="text" name="name" placeholder="name" autoFocus onChange={handleNameChange} />

                        <input type="email" name="email" placeholder="e-mail" onChange={handleEmailChange} />

                        <input type="password" name="password" placeholder="Password" onChange={handlePasswordChange} />

                        <select onChange={handleRoleChange}>

                            <option value={"CUSTOMER"}>CUSTOMER</option>
                            <option value={"CHEF"}>CHEF</option>
                        </select>


                        <div className="checkboxy">
                            <input name="cecky" id="checky" value="1" type="checkbox" /><label className="terms">I accept the
                                terms of
                                use</label>
                        </div>

                        <input type="submit" value="register" />

                    </div>

                </form>

            </div>

        </div>


    )
}

export default RegisterPage;