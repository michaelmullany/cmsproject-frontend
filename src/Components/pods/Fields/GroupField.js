export const GroupField = ({ groupName}) => {
    return (
        <div className="inputGroup inputGroupLine">
            <label htmlFor="selectGroup">Group: </label>
            <input type="text" id="selectGroup" name="selectGroup" value={groupName} disabled />
        </div>     
    )
}