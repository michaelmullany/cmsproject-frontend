export const SelectedGroup = ({ groupName, setGroupName, selectedGroup }) => {

    console.log(selectedGroup);

    return (
        <div className="pod fullPod podExpand">
            <div className="halfPodHeader">
                <form>
                    <div className="inputGroup inputGroupStack">
                        <label id="groupNameLabel" htmlFor="groupNameLabel">Group Name</label>
                        <input type="text" id="groupNameLabel" name="groupNameLabel" value={selectedGroup.groupName} onChange={(e) => setGroupName(e.target.value)}/>
                    </div>
                    <p>Components List</p>
                    <p>...</p>
                    <p>...</p>
                    <p>...</p>
                    <button className="textButton" type="submit">Update</button>
                    <button className="textButton deleteButton" type="button">Delete</button>
                </form>                
            </div>
        </div>
    )
}