import { useState } from 'react';
import { CgArrowLeft } from "react-icons/cg";
import { updateComponent } from '../../utils';
import { GroupFieldExisting } from './Fields/GroupField';

export const EditButtonPod = ({ setAppState, existingGroups, editComponentObj }) => {

    const [group, setGroup] = useState(editComponentObj.assignedToGroup);
    const [buttonName, setButtonName] = useState(editComponentObj.componentName);
    const [buttonType, setButtonType] = useState(editComponentObj.option);
    const [buttonUrl, setButtonUrl] = useState(editComponentObj.src);
    const [buttonSize, setButtonSize] = useState(editComponentObj.size);

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
        submitNewComponent(component);
    }

    return (
        <div className="pod fullPod podExpand">
            <div className="halfPodHeader">
                <CgArrowLeft className="back-arrow textButton" onClick={() => setAppState("CreateComponent")}/>
                <h2>Button</h2>
                <form onSubmit={submitHandler}>
                    <GroupFieldExisting setGroup={setGroup} existingGroups={existingGroups} editComponentObj={editComponentObj}/>  
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="buttonName">Name: </label>
                        <input type="text" id="buttonName" name="buttonName" onChange={(e) => setButtonName(e.target.value)} defaultValue={buttonName}/>
                    </div>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="buttonType">Type: </label>
                        <select id="buttonType" name="buttonType" size="1" onChange={(e) => setButtonType(e.target.value)} defaultValue={buttonType}>
                            <option value="apply">Apply</option>
                            <option value="info">Info</option>
                        </select>
                    </div>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="buttonSource">URL: </label>
                        <input type="text" id="buttonSource" name="buttonSource" onChange={(e) => setButtonUrl(e.target.value)} defaultValue={buttonUrl}/>
                    </div>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="buttonSize">Type: </label>
                        <select id="buttonSize" name="buttonSize" size="1" onChange={(e) => setButtonSize(e.target.value)} defaultValue={buttonSize}>
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