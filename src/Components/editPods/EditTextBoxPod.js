import { useEffect, useState } from 'react';
import { CgArrowLeft } from "react-icons/cg";
import { GroupFieldExisting } from '../pods/Fields/GroupFieldExisting';
import { updateComponent } from '../../utils';
import {  } from '../../utils';


export const EditTextBoxPod = ({ setAppState, editComponentObj,  existingGroups }) => {
    const [textBoxName, setTextboxName] = useState(editComponentObj.componentName);
    const [htmlContent, setHtmlContent] = useState(editComponentObj.text);
    const [group, setGroup] = useState();
    


    const submitHandler = (e) => {
        e.preventDefault();
        let component = {    
            assignedToGroup: group,                    
            componentName: textBoxName,
            component: "text",
            text: htmlContent,
            _id: editComponentObj._id
        }
        updateComponent(component);
        setAppState("")
    }

return (
    <div className="pod fullPod">
            <div className="halfPodHeader">
                <CgArrowLeft className="back-arrow textButton" onClick={() => setAppState("")}/>
                <h2>Textbox</h2>
                <form onSubmit={submitHandler}>
                    <GroupFieldExisting setGroup={setGroup} existingGroups={existingGroups} editComponentObj={editComponentObj}/>  
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="textboxName">Name: </label>
                        <input type="text" id="textboxName" name="textboxName" onChange={(e) => setTextboxName(e.target.value)} defaultValue={textBoxName}/>
                    </div>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="htmlContent">HTML: </label>
                        <textarea id="htmlContent" name="htmlContent" rows="5" onChange={(e) => setHtmlContent(e.target.value)} defaultValue={htmlContent}/>
                    </div>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="htmlDisplay">Preview: </label>
                        <div id="htmlDisplay" name="htmlDisplay">{htmlContent}</div>
                    </div>
                    <div className="buttonContainer">
                        <button type="submit">Update</button>
                    </div>
                </form>                
            </div>
        </div>


)




}