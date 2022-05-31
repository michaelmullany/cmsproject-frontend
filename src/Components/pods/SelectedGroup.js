import { useState, useEffect } from "react";
import { getGroupsList, updateGroup, deleteGroup } from "../../utils/index"
import { CgArrowLeft } from "react-icons/cg";
import { getComponentsByGroup } from "../../utils/index";


export const SelectedGroup = ({ selectedGroup, setSelectedGroup, setExistingGroups, componentsInGroup  }) => {

    const [newName, setNewName] = useState(selectedGroup.groupName);

    const updateHandler = async (e) => {
        e.preventDefault();
        if (newName === selectedGroup.groupName) return;
        await updateGroup({
            filter: {
                _id: selectedGroup._id
            },
            update: {
                groupName: newName,
                dateModified: new Date()
            }
        });
        await getGroupsList(setExistingGroups);
        setSelectedGroup(undefined);
    }

    const deleteHandler = async (e) => {
        e.preventDefault();
        await deleteGroup({_id: selectedGroup._id});
        await getGroupsList(setExistingGroups);
        setSelectedGroup(undefined);
    }

    return (
        <div className="pod fullPod podExpand">
            <div className="halfPodHeader">
                <div>
                    <CgArrowLeft className="back-arrow textButton" onClick={() => {setSelectedGroup(undefined)}} />
                </div>
                <form>
                    <div className="inputGroup inputGroupStack">
                        <label id="groupNameLabel" htmlFor="groupNameLabel">Group Name</label>
                        <input type="text" id="groupNameLabel" name="groupNameLabel" value={newName} onChange={(e) => setNewName(e.target.value)}/>
                    </div>
                    <p>Components List</p>
                    <div id="recentComponentsBodyContainer">
                        <div id="recentComponentsBody">
                            <div className="podTableContainer">
                                <table className="podTable">
                                    <thead>
                                        <tr>
                                            <th style={{"width":"30%"}}>Name</th>
                                            <th style={{"width":"30%"}}>Type</th>
                                            <th style={{"width":"30%"}}>Modified</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            componentsInGroup.map(component => {
                                                return (
                                                    <tr key={component._id}>
                                                        <td>{component.componentName}</td>
                                                        <td>{component.component}</td>
                                                        <td>{`${component.dateModified.substring(0,10)} - ${component.dateModified.substring(11,19)}`}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <button className="textButton" onClick={updateHandler} type="submit" disabled={newName==""||newName==selectedGroup.groupName}>Update</button>
                    <button className="textButton deleteButton" onClick={deleteHandler} type="button">Delete</button>
                </form>                
            </div>
        </div>
    )
}