import { AiFillDelete } from "react-icons/ai";
import { deleteGroup, getGroupsList, getComponentsByGroup } from "../../utils/index";

export const RecentGroups = ({ existingGroups, setExistingGroups, setSelectedGroup, setComponentsInGroup }) => {

    const selectGroupHandler = async (group) => {
        await getComponentsByGroup(group.groupName, setComponentsInGroup);
        setSelectedGroup(group);
    }

    const deleteButtonHandler = async(id) => {
        await deleteGroup({_id: id});
        await getGroupsList(setExistingGroups);
    }

    return (
        <div className="pod halfPod tablePod">
            <div className="halfPodHeader">
            <h2>Recent Groups</h2>
            </div>
            <div id="recentComponentsBodyContainer">
                <div id="recentComponentsBody">
                    <div className="podTableContainer">
                        <table className="podTable">
                            <thead>
                                <tr>
                                    <th>Name</th>                                
                                    <th>Modified</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {existingGroups.map(group => {
                                    return (
                                        <tr key={group._id}>
                                            <td onClick={() => {selectGroupHandler(group)}}>{group.groupName}</td>
                                            <td onClick={() => {selectGroupHandler(group)}}>{`${group.dateModified.substring(0,10)} - ${group.dateModified.substring(11,19)}`}</td>
                                            <td><button className="noStyleButton" onClick={() => {deleteButtonHandler(group._id)}}><AiFillDelete /></button></td>
                                        </tr>
                                    )
                                })} 
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
    )
}