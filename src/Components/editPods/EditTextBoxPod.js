import { useState } from 'react';
import { CgArrowLeft } from "react-icons/cg";
import { GroupField } from '../pods/Fields/GroupField';
import { updateComponent } from '../../utils';
import {  } from '../../utils';

export const EditTextBoxPod = ({ setAppState, editComponentObj}) => {
    const [textBoxName, setTextboxName] = useState(editComponentObj.componentName);
    const [htmlContent, setHtmlContent] = useState(editComponentObj.text);

    const submitHandler = (e) => {
        e.preventDefault();
        let component = {            
            componentName: textBoxName,
            component: "text",
            text: htmlContent,
            _id: editComponentObj._id
        }
        updateComponent(component);
    }

return (
    <div className="pod halfPod">
            <div className="halfPodHeader">
                <CgArrowLeft className="back-arrow textButton" onClick={() => setAppState("")}/>
                <h2>Textbox</h2>
                <form onSubmit={submitHandler}>
                    <GroupField groupName="TBC" />  
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="textboxName">Name: </label>
                        <input type="text" id="textboxName" name="textboxName" onChange={(e) => setTextboxName(e.target.value)} defaultValue={textBoxName}/>
                    </div>
                    <div class="inputGroup inputGroupLine">
                        <label htmlFor="htmlContent">HTML: </label>
                        <textarea id="htmlContent" name="htmlContent" rows="5" onChange={(e) => setHtmlContent(e.target.value)} defaultValue={htmlContent}/>
                    </div>
                    <div class="inputGroup inputGroupLine">
                        <label htmlFor="htmlDisplay">Preview: </label>
                        <div id="htmlDisplay" name="htmlDisplay">{htmlContent}</div>
                    </div>
                    <div className="buttonContainer">
                        <button type="submit">Add</button>
                    </div>
                </form>                
            </div>
        </div>


)




}