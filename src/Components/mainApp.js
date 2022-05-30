import { useState, useEffect } from "react";
import { getGroupsList } from "../utils/mmindex"
import { Sidebar } from "./Sidebar"
import { RecentGroups } from "./pods/recentGroups"
import { AddGroup } from './pods/AddGroup'
import { TextboxPod } from './pods/TextboxPod'
import { BannerPod } from './pods/BannerPod'
import { MediaPod } from './pods/MediaPod'
import { ButtonPod } from "./pods/ButtonPod";
import { NewFormPod } from './pods/NewFormPod'
import { ManageGroupsPod } from "./pods/ManageGroupsPod";
import { SelectedGroup } from "./pods/SelectedGroup";

export const MainApp = () => {

    const [appState, setAppState] = useState();
    const [groupName, setGroupName] = useState("");
    const [existingGroups, setExistingGroups] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState("");

    useEffect(() => {
        getGroupsList(setExistingGroups);
    }, []);

    return (
        <div id="mainContainer">
            <Sidebar setAppState={setAppState} />
            <main id="mainBodyContainer">
                {
                    (!appState || appState === "Welcome") &&
                    <>
                        <RecentGroups 
                            existingGroups={existingGroups}
                            setSelectedGroup={setSelectedGroup}
                        />
                        <AddGroup 
                            setAppState={setAppState}
                            groupName={groupName}
                            setGroupName={setGroupName}
                            setExistingGroups={setExistingGroups}
                        />
                        {selectedGroup && <SelectedGroup groupName={groupName} setGroupName={setGroupName} selectedGroup={selectedGroup} />}
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