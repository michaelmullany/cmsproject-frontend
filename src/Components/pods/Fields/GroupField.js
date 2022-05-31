export const GroupField = ({ existingGroups, setGroup }) => {
    return (
        <div className="inputGroup inputGroupLine">
            <label htmlFor="selectGroup">Group: </label>
            <select id="selectGroup" name="selectGroup" size="1" onChange={(e) => setGroup(e.target.value)}>           
            {
                existingGroups.map(group => {
                    return (
                        <option key={group._id} value={group.groupName}>{group.groupName}</option>
                    )
                })
            }
            </select>
        </div>     
    )
}