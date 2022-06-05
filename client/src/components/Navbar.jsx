import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const { store, actions } = useContext(Context)
    return (
        <nav>
            <Link to="/">
                <span>Home</span>
            </Link>
            <div>
                {!store.token ? 
                    <Link to="/login">
                        <button>Log in</button>
                    </Link>
                    :
                    <Link to="/login">
                        <button onClick={() => actions.logout()}>Log out</button>
                    </Link>}
            </div>
        </nav>
    )
}