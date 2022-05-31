import {useState, useRef} from "react";
import Logo from "../images/cmsLogo.png";
import supportIcon from "../images/supportIcon.png"


export const Sidebar = ({ setAppState, user, setUser }) => {
    // ### useRefs and useState ###
    const createComponentRef = useRef(null);
    const modifyComponentRef = useRef(null);
    const groupsRef = useRef(null);   
    const signOutRef = useRef(null);   
    const[page, setPage] = useState(groupsRef)

    // ### hanlders for mouse entering, clicking and leaving ###
    const mouseEnterHandler = (param) => (e) => {  
        if(page != param) {
            param.current.style.backgroundColor = "#c5cfdd"
        }         
    }
    const onClickHandler = (param) => (e) => {        
        e.preventDefault();
        if (page != param) {
            page.current.style.backgroundColor = "#A4B4CA";
            param.current.style.backgroundColor = "#F3F7F8";
            if (param == createComponentRef) {
                setAppState("CreateComponent");
            } else if (param == modifyComponentRef) {
                setAppState("ManageGroups")
            }   else if (param == signOutRef) {
                setUser(null);
            } 
            else {
                setAppState("Welcome")
            }
            setPage(param);
        }
    }
    const mouseLeaveHandler = (param) => (e) => {
        if (page != param) {        
        e.target.style.background="#A4B4CA"
        }
    }
    return (
        <div id="sidebar">
            <div id="logoContainer">
                <a href="#" ><img src={Logo} id="logo"/></a>
            </div>
                <div id="sidebarMenu">
                    <p id="usernameSidebar">{`Welcome ${user}`}</p>
                    <a href="#" 
                        className="sideBarMenuOptions"
                        id="sideBarMenuGroups"
                        ref={groupsRef}
                        onMouseEnter={mouseEnterHandler(groupsRef)} 
                        onClick={onClickHandler(groupsRef)}
                        onMouseLeave={mouseLeaveHandler(groupsRef)}>
                        <p>Groups</p>
                    </a>
                    <a href="#" 
                        className="sideBarMenuOptions"
                        id="sideBarMenuCreateComp"
                        ref={createComponentRef}
                        onMouseEnter={mouseEnterHandler(createComponentRef)} 
                        onClick={onClickHandler(createComponentRef)}
                        onMouseLeave={mouseLeaveHandler(createComponentRef)}>
                        <p>Create component</p>
                    </a>
                    <a href="#"  
                        className="sideBarMenuOptions"
                        ref={modifyComponentRef}
                        onMouseEnter={mouseEnterHandler(modifyComponentRef)} 
                        onClick={onClickHandler(modifyComponentRef)}
                        onMouseLeave={mouseLeaveHandler(modifyComponentRef)}>
                        <p>Manage components</p>
                    </a>
                    <a href="#"  
                        className="sideBarMenuOptions"
                        ref={signOutRef}
                        onMouseEnter={mouseEnterHandler(signOutRef)} 
                        onClick={onClickHandler(signOutRef)}
                        onMouseLeave={mouseLeaveHandler(signOutRef)}>
                        <p>Sign Out</p>
                    </a>
                </div>
                <div id="supportIconContainer">
                    <a href="#">
                        <img src={supportIcon} id="supportIcon"/>
                    </a>
                </div>
            </div>
        
    )
}