import { useState } from 'react'

export const GroupFieldExisting = ({ existingGroups, setGroup, editComponentObj }) => {



    return (
        <div className="inputGroup inputGroupLine">
            <label htmlFor="selectGroup">Group: </label>
            <select id="selectGroup" name="selectGroup" size="1" onChange={(e) => setGroup(e.target.value)}>      
            <option>{editComponentObj.assignedToGroup}</option>     
            {
                existingGroups.map(group => {
                    if(group.groupName != editComponentObj.assignedToGroup){
                    return (
                        <option key={group._id} value={group.groupName}>{group.groupName}</option>
                    )
                    }
                })
            }
            </select>
        </div>     
    )
}