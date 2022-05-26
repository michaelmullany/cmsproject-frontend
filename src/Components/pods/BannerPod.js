import { useState } from 'react';
import { CgArrowLeft } from "react-icons/cg";
import { submitNewComponent } from '../../utils';

export const BannerPod = ({ setAppState }) => {

    const [bannerName, setBannerName] = useState();
    const [bannerType, setBannerType] = useState();
    const [bannerText, setBannerText] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        let component = {
            name: bannerName,
            component: "banner",
            option: bannerType,
            text: bannerText,
        }
        submitNewComponent(component);
    }

    return (
        <div className="pod fullPod podExpand">
            <div className="halfPodHeader">
                <CgArrowLeft className="back-arrow textButton" onClick={() => setAppState("Welcome")}/>
                <h2>Banner</h2>
                <form onSubmit={submitHandler}>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="bannerName">Name: </label>
                        <input type="text" id="bannerName" name="bannerName" onChange={(e) => setBannerName(e.target.value)}/>
                    </div>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="bannerType">Type: </label>
                        <select id="bannerType" name="bannerType" size="1" onChange={(e) => setBannerType(e.target.value)}>
                            <option value="info">Info</option>
                            <option value="warning">Warning</option>
                        </select>
                    </div>
                    <div className="inputGroup inputGroupLine">
                        <label htmlFor="bannerText">Text: </label>
                        <input type="text" id="bannerText" name="bannerText" onChange={(e) => setBannerText(e.target.value)}/>
                    </div>
                    <div className="buttonContainer">
                        <button type="submit">Add</button>
                    </div>
                </form>                
            </div>
        </div>
    )
}