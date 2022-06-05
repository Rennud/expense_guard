import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { Context }  from "../store/appContext";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleClick = () => {
        actions.login(email, password)
    };  

    // Using a redirect after the page is fully rendered to handle warning - cannot update the document while rendering a different component 
    useEffect(() => {
        if (store.token && store.token !=="" && store.token !== undefined) {
            return navigate("/")
        }
    })
    

    return (
        <div>
            <h1>Login</h1>
                {store.token && store.token !== "" && store.token !== undefined 
                ? "You are already logged in"
                :
                <div>
                    <input 
                        type="text" 
                        placeholder="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}    
                    />
                    <button onClick={handleClick}>Login</button>
                </div>
                }
        </div>
    )
}