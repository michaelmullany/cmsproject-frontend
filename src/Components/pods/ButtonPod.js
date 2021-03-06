import { useState } from 'react';
import { CgArrowLeft } from "react-icons/cg";
import { submitNewComponent } from '../../utils';
import { GroupField } from './Fields/GroupField';
import { Feedback } from './Feedback';

export const ButtonPod = ({ setAppState, existingGroups }) => {

    const [group, setGroup] = useState(existingGroups[0].groupName);
    const [buttonName, setButtonName] = useState();
    const [buttonType, setButtonType] = useState("apply");
    const [buttonUrl, setButtonUrl] = useState();
    const [buttonSize, setButtonSize] = useState("small");
    const [feedback, setFeedback] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        let component = {
            assignedToGroup: group,
            componentName: buttonName,
            component: "Button",
            option: buttonType,
            src: buttonUrl,
            size: buttonSize
        }
        submitNewComponent(component, setFeedback);
    }

    return (
        <div className="pod fullPod podExpand">
            <div className="halfPodHeader">
                <CgArrowLeft className="back-arrow textButton" onClick={() => setAppState("CreateComponent")}/>
                <h2>Button</h2>
                <form onSubmit={submitHandler}>
                    <GroupField setGroup={setGroup} existingGroups={existingGroups} />  
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
                    {feedback && <Feedback feedback={feedback} />}
                    <div className="buttonContainer">
                        <button type="submit">Add</button>
                    </div>
                </form>                
            </div>
        </div>
    )
}