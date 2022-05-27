import { useState } from 'react';
import { CgArrowLeft } from "react-icons/cg";
import { submitNewComponent } from '../../utils';
import { GroupField } from './Fields/GroupField';

export const ButtonPod = ({ setAppState, groupName }) => {

    const [buttonName, setButtonName] = useState();
    const [buttonType, setButtonType] = useState();
    const [buttonUrl, setButtonUrl] = useState();
    const [buttonSize, setButtonSize] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        let component = {
            componentName: buttonName,
            component: "button",
            option: buttonType,
            src: buttonUrl,
            size: buttonSize
        }
        submitNewComponent(component);
    }

    return (
        <div className="pod fullPod podExpand">
            <div className="halfPodHeader">
                <CgArrowLeft className="back-arrow textButton" onClick={() => setAppState("Welcome")}/>
                <h2>Button</h2>
                <form onSubmit={submitHandler}>
                    <GroupField groupName={groupName} />  
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="buttonName">Name: </label>
                        <input type="text" id="buttonName" name="buttonName" onChange={(e) => setButtonName(e.target.value)}/>
                    </div>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="buttonType">Type: </label>
                        <select id="buttonType" name="buttonType" size="1" onChange={(e) => setButtonType(e.target.value)}>
                            <option value="apply">Apply</option>
                            <option value="info">Info</option>
                        </select>
                    </div>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="buttonSource">URL: </label>
                        <input type="text" id="buttonSource" name="buttonSource" onChange={(e) => setButtonUrl(e.target.value)}/>
                    </div>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="buttonSize">Type: </label>
                        <select id="buttonSize" name="buttonSize" size="1" onChange={(e) => setButtonSize(e.target.value)}>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </div>
                    <div className="buttonContainer">
                        <button type="submit">Add</button>
                    </div>
                </form>                
            </div>
        </div>
    )
}