import { useState } from "react";
import { CgArrowLeft } from "react-icons/cg";
import { submitNewGroup, getGroupsList } from "../../utils/mmindex";
import { Feedback } from "./Feedback";

export const AddGroup = ({ groupName, setGroupName, setExistingGroups, setAppState }) => {

    const [addingGroup, setAddingGroup] = useState();
    const [feedback, setFeedback] = useState();

    const submitHandler = async (e) => {
        e.preventDefault();
        const newGroup = {
            groupName,
            dateModified: new Date()
        }
        await submitNewGroup(newGroup, setFeedback);
        await getGroupsList(setExistingGroups);
    }

    return (
        <div className="pod halfPod podExpand">
            <div className="halfPodHeader">
                {!addingGroup && <h2 className="textButton" onClick={() => setAddingGroup(true)}>Add New Group</h2>}
                {addingGroup &&
                    <form onSubmit={submitHandler}>
                        <div>
                            <CgArrowLeft className="back-arrow textButton" onClick={() => {
                                setAddingGroup(false);
                                setGroupName("");
                                setFeedback("");
                            }} />
                        </div>
                        <div className="inputGroup inputGroupStack">
                            <label id="newGroupNameLabel" htmlFor="groupNameInput">New Group Name</label>
                            <input type="text" id="groupNameInput" name="groupNameInput" value={groupName} onChange={(e) => setGroupName(e.target.value)}/>
                        </div>
                        {feedback && <Feedback feedback={feedback} />}
                        <button className="textButton" type="submit" disabled={(!groupName)}>Submit</button>
                    </form>                
                }
            </div>
        </div>
    )
}