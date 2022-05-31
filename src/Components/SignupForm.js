import { useState } from "react";
import { signUp } from "../utils";

export const SignupForm = ({setUser, setNeedsAccount}) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        signUp(username, email, password, setUser, setError);
    }

    return(
        <form onSubmit={submitHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)}/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
            {error && <p className="warningText">{error}</p>}
            <button type="submit">Sign Up</button>
            <p>Already a user?</p>
            <p className="accessLink" onClick={() => setNeedsAccount(false)}> Log in</p>
        </form>
    )
}