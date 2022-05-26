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
    const [appMode, setAppMode] = useState();
    const [addingGroup, setAddingGroup] = useState();
    const [groupName, setGroupName] = useState();

    return (
        <div id="mainContainer">
            <Sidebar setAppState={setAppState} />
            <main id="mainBodyContainer">
                {
                    (!appState || appState == "Welcome") &&
                    <>
                        <RecentGroups />
                        <AddGroup 
                            setAppState={setAppState}
                            addingGroup={addingGroup}
                            setAddingGroup={setAddingGroup}
                            groupName={groupName}
                            setGroupName={setGroupName}
                        />
                    </>
                }
                {
                    appState=="ManageGroups" &&
                    <ManageGroupsPod setAppState={setAppState} />
                }
                {
                    appState=="AddTextbox" &&
                    <TextboxPod setAppState={setAppState} />
                }
                {
                    appState=="AddBanner" &&
                    <BannerPod setAppState={setAppState} />                
                }
                {
                    appState=="AddMedia" &&
                    <MediaPod setAppState={setAppState} />                
                }              {
                    appState=="AddButton" &&
                    <ButtonPod setAppState={setAppState} />                
                }
                {
                    appState=="AddForm" && 
                    <NewFormPod setAppState={setAppState}/>
                }
            </main>
        </div>
    )
}