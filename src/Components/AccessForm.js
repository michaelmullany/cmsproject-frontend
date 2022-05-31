import { useState } from "react";
import { SignupForm } from './SignupForm';
import { LoginForm } from './LoginForm';
import Logo from "../images/cmsLogo.png";

export const AccessForm = ({setUser}) => {
    const [needsAccount, setNeedsAccount] = useState();

    return(
        <div id="accessForm">
            <img id="accessLogo" src={Logo} alt="Logo" />
            {needsAccount && <SignupForm setUser={setUser} setNeedsAccount={setNeedsAccount} />}
            {!needsAccount && <LoginForm setUser={setUser} setNeedsAccount={setNeedsAccount} />}
        </div>
    )
}