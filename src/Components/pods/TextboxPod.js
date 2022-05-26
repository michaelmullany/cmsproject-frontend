import { useState } from 'react';
import { CgArrowLeft } from "react-icons/cg";
import { IconContext } from "react-icons";
import { submitNewComponent } from '../../utils';

export const TextboxPod = ({ setAppState }) => {

    const [textboxName, setTextboxName] = useState();
    const [htmlContent, setHtmlContent] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        let component = {
            name: textboxName,
            component: "textbox",
            text: htmlContent,
        }
        submitNewComponent(component);
    }
    
    return (
        <div className="pod fullPod podExpand">
            <div className="halfPodHeader">
                <CgArrowLeft className="back-arrow textButton" onClick={() => setAppState("Welcome")}/>
                <h2>Textbox</h2>
                <form onSubmit={submitHandler}>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="textboxName">Name: </label>
                        <input type="text" id="textboxName" name="textboxName" onChange={(e) => setTextboxName(e.target.value)}/>
                    </div>
                    <div class="inputGroup inputGroupLine">
                        <label htmlFor="htmlContent">HTML: </label>
                        <textarea id="htmlContent" name="htmlContent" rows="5" onChange={(e) => setHtmlContent(e.target.value)}/>
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