import { CgArrowLeft } from "react-icons/cg";

export const AddGroup = ({ setAppState, addingGroup, setAddingGroup, groupName, setGroupName }) => {

    return (
        <div className="pod halfPod podExpand">
            <div className="halfPodHeader">
                {!addingGroup && <h2 className="textButton" onClick={() => setAddingGroup(true)}>Add New Group</h2>}
                {addingGroup &&
                    <form onSubmit={() => console.log(groupName)}>
                        <div>
                            <CgArrowLeft className="back-arrow textButton" onClick={() => {
                                setAddingGroup(false);
                                setGroupName("");
                            }} />
                        </div>
                        <div className="inputGroup inputGroupStack">
                            <label id="newGroupNameLabel" htmlFor="groupNameInput">New Group Name</label>
                            <input type="text" id="groupNameInput" name="groupNameInput" value={groupName} onChange={(e) => setGroupName(e.target.value)}/>
                        </div>
                    </form>                
                }
                {
                    groupName &&
                    <div>
                        <h2>Select Component Type</h2>
                        <div id="componentSelect">
                            <ul>
                                <li><a onClick={() => {setAppState("AddTextbox")}}>Text Box</a></li>
                                <li><a onClick={() => {setAppState("AddMedia")}}>Media</a></li>
                                <li><a onClick={() => {setAppState("AddButton")}}>Button</a></li>
                                <li><a onClick={() => {setAppState("AddBanner")}}>Banner</a></li>
                                <li><a onClick={() => {setAppState("AddForm")}}>Form Field</a></li>
                            </ul>
                        </div>
                    </div>                        
                }
            </div>
        </div>
    )
}