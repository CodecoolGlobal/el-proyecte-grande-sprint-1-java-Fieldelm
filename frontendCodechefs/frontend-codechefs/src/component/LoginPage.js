import Header from "./Header";
import {useState} from "react";
import {postFetch} from "../util/Fetch";

const LoginPage = () => {

    const [username, setUsername] = useState();

    const [password, setPassword] = useState();



    const handelUserNameChange = (event) =>{
        setUsername(event.target.value)
    }

    const handelPasswordLoginChange = (event) =>{
        setPassword(event.target.value)
    }

    const login = (e) => {
        e.preventDefault();
        postFetch(`/login`, {username, password}).then(response =>localStorage.setItem("token",  JSON.stringify(response.headers.get('Authorization')))).then(console.log(localStorage.getItem("token")))

    }

    return (
        <div>
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

        </div>
    )
}

export default LoginPage;