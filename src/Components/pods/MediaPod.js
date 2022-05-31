import { useState } from 'react';
import { CgArrowLeft } from "react-icons/cg";
import { submitNewComponent } from '../../utils';
import { GroupField } from './Fields/GroupField';

export const MediaPod = ({ setAppState, existingGroups }) => {

    const [group, setGroup] = useState(existingGroups[0]._id);
    const [mediaName, setMediaName] = useState();
    const [mediaType, setMediaType] = useState("image");
    const [mediaSource, setMediaSource] = useState();
    const [mediaAlt, setMediaAlt] = useState();
    const [mediaSize, setMediaSize] = useState("small");

    const submitHandler = (e) => {
        e.preventDefault();
        let component = {
            assignedToGroup: group,
            componentName: mediaName,
            component: "media",
            option: mediaType,
            text: mediaAlt,
            src: mediaSource,
            size: mediaSize,
        }
        submitNewComponent(component);
    }

    return (
        <div className="pod fullPod podExpand">
            <div className="halfPodHeader">
                <CgArrowLeft className="back-arrow textButton" onClick={() => setAppState("CreateComponent")}/>
                <h2>Media</h2>
                <form onSubmit={submitHandler}>
                    <GroupField setGroup={setGroup} existingGroups={existingGroups} /> 
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="mediaName">Name: </label>
                        <input type="text" id="mediaName" name="mediaName" onChange={(e) => setMediaName(e.target.value)}/>
                    </div>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="mediaType">Type: </label>
                        <select id="mediaType" name="mediaType" size="1" onChange={(e) => setMediaType(e.target.value)}>
                            <option value="image">Image</option>
                            <option value="video">Video</option>
                        </select>
                    </div>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="mediaSource">Source: </label>
                        <input type="text" id="mediaSource" name="mediaSource" onChange={(e) => setMediaSource(e.target.value)}/>
                    </div>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="mediaAlt">Alt Text: </label>
                        <input type="text" id="mediaAlt" name="mediaAlt" onChange={(e) => setMediaAlt(e.target.value)}/>
                    </div>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="mediaSize">Type: </label>
                        <select id="mediaSize" name="mediaSize" size="1" onChange={(e) => setMediaSize(e.target.value)}>
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