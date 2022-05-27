import { useState } from "react";
import { Sidebar } from "./Sidebar"
import { RecentGroups } from "./pods/recentGroups"
import { AddGroup } from './pods/AddGroup'
import { TextboxPod } from './pods/TextboxPod'
import { BannerPod } from './pods/BannerPod'
import { MediaPod } from './pods/MediaPod'
import { ButtonPod } from "./pods/ButtonPod";
import { NewFormPod } from './pods/NewFormPod'
import { ManageGroupsPod } from "./pods/ManageGroupsPod";

export const MainApp = () => {

    const [appState, setAppState] = useState();

    const [groupName, setGroupName] = useState();

    return (
        <div id="mainContainer">
            <Sidebar setAppState={setAppState} />
            <main id="mainBodyContainer">
                {
                    (!appState || appState === "Welcome") &&
                    <>
                        <RecentGroups />
                        <AddGroup 
                            setAppState={setAppState}
                            groupName={groupName}
                            setGroupName={setGroupName}
                        />
                    </>
                }
                {
                    appState==="ManageGroups" &&
                    <ManageGroupsPod setAppState={setAppState}/>
                }
                {
                    appState==="AddTextbox" &&
                    <TextboxPod setAppState={setAppState} groupName={groupName} />
                }
                {
                    appState==="AddBanner" &&
                    <BannerPod setAppState={setAppState} groupName={groupName} />                
                }
                {
                    appState==="AddMedia" &&
                    <MediaPod setAppState={setAppState} groupName={groupName} />                
                }              {
                    appState==="AddButton" &&
                    <ButtonPod setAppState={setAppState} groupName={groupName} />                
                }
                {
                    appState==="AddForm" && 
                    <NewFormPod setAppState={setAppState} groupName={groupName} />
                }
            </main>
        </div>
    )
}