import { useState } from 'react';
import { CgArrowLeft } from "react-icons/cg";
import { updateComponent } from '../../utils';
import { GroupFieldExisting } from '../pods/Fields/GroupFieldExisting';

export const EditMediaPod = ({ setAppState, existingGroups, editComponentObj }) => {

    const [group, setGroup] = useState(existingGroups[0].assignedToGroup);
    const [mediaName, setMediaName] = useState(editComponentObj.componentName);
    const [mediaType, setMediaType] = useState(editComponentObj.option);
    const [mediaSource, setMediaSource] = useState(editComponentObj.src);
    const [mediaAlt, setMediaAlt] = useState(editComponentObj.text);
    const [mediaSize, setMediaSize] = useState(editComponentObj.size);

    const submitHandler = (e) => {
        e.preventDefault();
        let component = {
            assignedToGroup: group,
            componentName: mediaName,
            component: "Media",
            option: mediaType,
            text: mediaAlt,
            src: mediaSource,
            size: mediaSize,
            _id: editComponentObj._id
        }
        updateComponent(component);
    }

    return (
        <div className="pod fullPod podExpand">
            <div className="halfPodHeader">
                <CgArrowLeft className="back-arrow textButton" onClick={() => setAppState("CreateComponent")}/>
                <h2>Media</h2>
                <form onSubmit={submitHandler}>
                    <GroupFieldExisting setGroup={setGroup} existingGroups={existingGroups} editComponentObj={editComponentObj}/> 
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="mediaName">Name: </label>
                        <input type="text" id="mediaName" name="mediaName" onChange={(e) => setMediaName(e.target.value)} defaultValue={mediaName}/>
                    </div>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="mediaType">Type: </label>
                        <select id="mediaType" name="mediaType" size="1" onChange={(e) => setMediaType(e.target.value)} defaultValue={mediaType}>
                            <option value="image">Image</option>
                            <option value="video">Video</option>
                        </select>
                    </div>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="mediaSource">Source: </label>
                        <input type="text" id="mediaSource" name="mediaSource" onChange={(e) => setMediaSource(e.target.value)} defaultValue={mediaSource}/>
                    </div>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="mediaAlt">Alt Text: </label>
                        <input type="text" id="mediaAlt" name="mediaAlt" onChange={(e) => setMediaAlt(e.target.value)} defaultValue={mediaAlt}/>
                    </div>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="mediaSize">Type: </label>
                        <select id="mediaSize" name="mediaSize" size="1" onChange={(e) => setMediaSize(e.target.value)} defaultValue={mediaSize}>
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