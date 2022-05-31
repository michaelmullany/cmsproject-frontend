import { useState } from 'react';
import { CgArrowLeft } from "react-icons/cg";
import { updateComponent } from '../../utils';
import { GroupFieldExisting } from '../pods/Fields/GroupFieldExisting';

export const EditBannerPod = ({ setAppState, existingGroups, editComponentObj }) => {

    const [group, setGroup] = useState(editComponentObj.assignedToGroup);
    const [bannerName, setBannerName] = useState(editComponentObj.componentName);
    const [bannerType, setBannerType] = useState(editComponentObj.option);
    const [bannerText, setBannerText] = useState(editComponentObj.text);

    const submitHandler = (e) => {
        e.preventDefault();
        let component = {
            assignedToGroup: group,
            componentName: bannerName,
            component: "Banner",
            option: bannerType,
            text: bannerText,
            _id: editComponentObj._id
        }
        console.log(component)
        updateComponent(component);
        setAppState("")
    }
    return (
        
        <div className="pod fullPod podExpand">
            <div className="halfPodHeader">
                <CgArrowLeft className="back-arrow textButton" onClick={() => setAppState("CreateComponent")}/>
                <h2>Banner</h2>
                <form onSubmit={submitHandler}>
                    <GroupFieldExisting setGroup={setGroup} existingGroups={existingGroups} editComponentObj={editComponentObj}/>             
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="bannerName">Name: </label>
                        <input type="text" id="bannerName" name="bannerName" onChange={(e) => setBannerName(e.target.value)} defaultValue={bannerName}/>
                    </div>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="bannerType">Type: </label>
                        <select id="bannerType" name="bannerType" size="1" onChange={(e) => setBannerType(e.target.value)} defaultValue={bannerType}>
                            <option value="info">Info</option>
                            <option value="warning">Warning</option>
                        </select>
                    </div>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="bannerText">Text: </label>
                        <input type="text" id="bannerText" name="bannerText" onChange={(e) => setBannerText(e.target.value)} defaultValue={bannerText}/>
                    </div>
                    <div className="buttonContainer">
                        <button type="submit">Add</button>
                    </div>
                </form>                
            </div>
        </div>
    )
}