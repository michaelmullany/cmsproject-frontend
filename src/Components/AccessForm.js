import { useState } from "react";
import { SignupForm } from './SignupForm';
import { LoginForm } from './LoginForm';

export const AccessForm = ({setUser}) => {
    const [needsAccount, setNeedsAccount] = useState();

    return(
        <div id="accessForm">
            {needsAccount && <SignupForm setUser={setUser} setNeedsAccount={setNeedsAccount} />}
            {!needsAccount && <LoginForm setUser={setUser} setNeedsAccount={setNeedsAccount} />}
        </div>
    )
}