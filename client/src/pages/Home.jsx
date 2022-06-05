import React, { useContext, useEffect} from "react";
import { Context } from "../store/appContext";

export const Home = () => {
    const { store, actions } = useContext(Context)

    // If user is log in display message
    useEffect(() => {
        if (store.token && store.token !=="" && store.token !== undefined) actions.showProfile()
        }, []);

        return (
        <div>
            <h1>Welcome</h1>
            <p>{store.message}</p>
        </div>
    )
}