import Header from "./Header";
import { useState } from "react";
import { postFetch } from "../util/Fetch";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

//npm i jwt-decode install jwt decode library

import jwtDecode from "jwt-decode";


const LoginPage = ({setIsLoggedIn}) => {

    const [username, setUsername] = useState();

    const [password, setPassword] = useState();

    const [status, setStatus] = useState(0)

    const [errorMessage, setErrorMessage] = useState('')

  

    const handelUserNameChange = (event) => {
        setUsername(event.target.value)
    }

    const handelPasswordLoginChange = (event) => {
        setPassword(event.target.value)
    }

    const navigate = useNavigate();


    useEffect(() => {
        switch (status) {
            case 0:
                setErrorMessage('');
                break;
            case 200:
                break;

            case 403:
                setErrorMessage('username or password incorrect');
                break;
        }
    }, [status]);


    
   
    const login = async(e) => {
        e.preventDefault();
        let response = await postFetch(`/login`, { username, password });

        setStatus(response.status);

        if(response.ok){
            let baererToken = response.headers.get('Authorization');
            localStorage.setItem("token", JSON.stringify(baererToken));
            console.log(localStorage.getItem("token"));
            let decodedToken = jwtDecode(baererToken.replace('Baerer ', ''));
            console.log(`decodedToken: ${decodedToken}`);
            localStorage.setItem("user", decodedToken.sub);
            console.log(`User: ${localStorage.getItem("user")}`)
            setIsLoggedIn(true);
            navigate('/')
            
        }else{
            
        }

           /*  .then(response => baererToken = response.headers.get('Authorization'))
            // .then(response => localStorage.setItem("token", JSON.stringify(baererToken)))
            .then(console.log(localStorage.getItem("token")))
            .then(decodedToken = jwtDecode(baererToken.replace('Baerer ', '')))
            .then(console.log(decodedToken))
            .then(user = decodedToken.sub)
            .then(localStorage.setItem("user", user)) */


    }

    return (
        <div>
            <Header />

            <div className="register-container">


                <form id="signup" onSubmit={login}>

                <div>{(errorMessage !== '') ? <p>{errorMessage}</p> : <></>}</div>


                    <div className="header">
                        <h3>Login</h3>

                    </div>

                    <div className="sep"></div>

                    <div className="inputs">

                        <input type="text" name="name" placeholder="name" autoFocus onChange={handelUserNameChange} />


                        <input type="password" name="password" placeholder="Password" onChange={handelPasswordLoginChange} />

                        <input type="submit" value="login" />

                    </div>

                </form>

            </div>

        </div>
    )
}

export default LoginPage;