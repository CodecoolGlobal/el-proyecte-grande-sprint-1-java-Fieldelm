import Header from "./Header";
import {useState} from "react";
import {postApi} from "../util/Fetch";

const LoginPage = () => {

    const [username, setUsername] = useState();

    const [passwordLogin, setPasswordLogin] = useState();

    const handelUserNameChange = (event) =>{
        setUsername(event.target.value)
    }

    const handelPasswordLoginChange = (event) =>{
        setPasswordLogin(event.target.value)
    }

    const login = (e) => {
        e.preventDefault();
        const response = postApi(`/login`, {username, passwordLogin});
        if(response.ok){
            localStorage.setItem("Token", response.header("Authorization"));
        }

    }

    return (
        <di>
            <Header/>

            <div className="register-container">


                <form id="signup" onSubmit={login}>

                    <div className="header">
                        <h3>Login</h3>

                    </div>

                    <div className="sep"></div>

                    <div className="inputs">

                        <input type="text" name="name" placeholder="name" autoFocus onChange={handelUserNameChange}/>


                        <input type="password" name="password" placeholder="Password" onChange={handelPasswordLoginChange}/>

                        <input type="submit" value="login"/>

                    </div>

                </form>

            </div>

        </di>
    )
}

export default LoginPage;