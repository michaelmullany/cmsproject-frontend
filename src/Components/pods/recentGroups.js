export const RecentGroups = ({ existingGroups, setSelectedGroup }) => {

    const selectGroupHandler = group => {
        console.log(group);
        setSelectedGroup(group);
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
                                </tr>
                            </thead>
                            <tbody>
                                {existingGroups.map(group => {
                                    return (
                                        <tr key={group._id} onClick={() => {selectGroupHandler(group)}}>
                                            <td>{group.groupName}</td>
                                            <td>{group.dateModified}</td>
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