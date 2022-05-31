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
import { CreateComponentPod } from "./pods/CreateComponent";

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
                        {!selectedGroup && 
                        <RecentGroups 
                            existingGroups={existingGroups}
                            setExistingGroups={setExistingGroups}
                            setSelectedGroup={setSelectedGroup}
                        />
                        }
                        {!selectedGroup && 
                        <AddGroup 
                            setAppState={setAppState}
                            groupName={groupName}
                            setGroupName={setGroupName}
                            setExistingGroups={setExistingGroups}
                        />
                        }
                        {selectedGroup && 
                            <SelectedGroup 
                                selectedGroup={selectedGroup} 
                                setSelectedGroup={setSelectedGroup}
                                setExistingGroups={setExistingGroups}
                            />
                        }
                    </>
                }
                {
                    appState==="CreateComponent" &&
                    <CreateComponentPod setAppState={setAppState} />
                }
                {
                    appState==="ManageGroups" &&
                    <ManageGroupsPod setAppState={setAppState}/>
                }
                {
                    appState==="AddTextbox" &&
                    <TextboxPod setAppState={setAppState} existingGroups={existingGroups} />
                }
                {
                    appState==="AddBanner" &&
                    <BannerPod setAppState={setAppState} existingGroups={existingGroups} />                
                }
                {
                    appState==="AddMedia" &&
                    <MediaPod setAppState={setAppState} existingGroups={existingGroups} />                
                }              {
                    appState==="AddButton" &&
                    <ButtonPod setAppState={setAppState} existingGroups={existingGroups} />                
                }
                {
                    appState==="AddForm" && 
                    <NewFormPod setAppState={setAppState} existingGroups={existingGroups} />
                }
            </main>
        </div>
    )
}