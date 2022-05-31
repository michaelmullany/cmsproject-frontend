import { useState } from 'react';
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import {AiFillDelete} from "react-icons/ai";
import { CgArrowLeft } from "react-icons/cg";
import { updateComponent, deleteComponent } from '../../utils';
import { GroupFieldExisting } from '../pods/Fields/GroupFieldExisting';


export const EditFormPod = ({ setAppState, groupName, editComponentObj, existingGroups }) => {

    const [formName, setFormName] = useState(editComponentObj.componentName);
    const [fieldName, setFieldName] = useState(editComponentObj.fieldName);
    const [fieldType, setFieldType] = useState("field");
    const [fieldList, setFieldList] = useState(editComponentObj.formFields);
    const [group, setGroup] = useState(editComponentObj.groupName);

    const addFieldHandler = (e) => {
   
        e.preventDefault();
        
        let tempObj = {
            fieldName: fieldName,
            fieldType: fieldType
        }


        let tempFieldListArray = [...fieldList];
        tempFieldListArray.push(tempObj)

        setFieldList(tempFieldListArray)    
        // console.log(fieldList)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        let component = {
            _id: editComponentObj._id,
            assignedToGroup: group,
            componentName: formName,
            component: "Form",
            formFields: fieldList            
        }
        // console.log(fieldList)
        updateComponent(component);
        setAppState("")
    }

    const deleteButtonHandler = (x) => () => {
        deleteComponent(x.componentName)
    }

    const formButtonHandler = (param, index) => {
        if (param === "down") {
            let tempArray = [...fieldList];
            let tempItemToBeMoved = tempArray.slice(index,index + 1);
            let tempSliceItem = [...tempArray].slice(0,index).concat(tempArray.slice(index + 1,))
            tempSliceItem.splice(index + 1,0, ...tempItemToBeMoved)
            setFieldList(tempSliceItem)            
        } if (param === "up") {
            let tempArray = [...fieldList];
            let tempItemToBeMoved = tempArray.slice(index,index + 1);
            let tempSliceItem = [...tempArray].slice(0,index).concat(tempArray.slice(index + 1,))
            tempSliceItem.splice(index - 1,0, ...tempItemToBeMoved)
            setFieldList(tempSliceItem);
        }
    }

    return (
        <div id="mainBodyContainer">
            <div className="pod halfPod podExpand">
                <div className="halfPodHeader">              
                    <CgArrowLeft className="back-arrow textButton" onClick={() => setAppState("Welcome")}/>
                    <form onSubmit={submitHandler}>   
                    <GroupFieldExisting setGroup={setGroup} existingGroups={existingGroups} editComponentObj={editComponentObj}/>                 
                        <div className="inputGroup">
                            <label htmlFor="formName">Form Name: </label>
                            <input type="text" id="formName" name="formName" onChange={(e) => setFormName(e.target.value)} defaultValue={formName} required/>
                        </div>
                        <div id="addFieldsSubForm">
                            <h2>Add Fields</h2>
                            <div className="inputGroup">
                                <label htmlFor="fieldName">Field Name: </label>
                                <input type="text" id="fieldName" name="fieldName" onChange={(e) => setFieldName(e.target.value)} required/>
                            </div>
                            <div className="inputGroup">
                                <label htmlFor="fieldType">Type: </label>
                                <select id="fieldType" name="fieldType" size="1" onChange={(e) => setFieldType(e.target.value)}>
                                    <option value="input">Field</option>
                                    <option value="email">Email</option>
                                    <option value="date">Date</option>
                                    <option value="password">Password</option>
                                    <option value="number">Number</option>
                                    <option value="telNumber">Telephone Number</option>
                                    <option value="dropDown">Drop Down List</option>
                                </select>  
                            </div>  
                            <div className="inputGroup">
                                <button type="button" onClick={(e) => addFieldHandler(e)}>Add Field</button>   
                            </div>  
                        </div>
                        <div className="buttonContainer">
                            <button type="submit">Submit</button>   
                        </div>                   
                    </form>                
                </div>
            </div>

            
            <div className="pod halfPod">
                <div className="halfPodHeader">
                    <CgArrowLeft className="back-arrow textButton" onClick={() => setAppState("Welcome")}/>
                    <h2>Form Fields</h2>
                </div>
                <div class="formBuildContainer">
                    <div id="formBuild">
                        
                        <table className="fullWidthTable">
                        <tbody>
                        <tr><th>Order</th><th>Field Name</th><th>Field Type</th><th></th></tr>
                        {fieldList.map((x,index) => {
                            if (index === 0) {
                                return <tr key={index}>
                                    <td><button className="formButton" onClick={() => formButtonHandler("down", index)}><FiChevronDown /></button></td>
                                    <td><p>{x.fieldName}</p></td><td><p>{x.fieldType}</p></td><td><button className="noStyleButton" onClick={deleteButtonHandler(x)}><AiFillDelete /></button></td>
                                    </tr>
                            } else if (index === (fieldList.length-1)) {                                
                                return <tr key={index}>
                                    <td><button className="formButton" onClick={() => formButtonHandler("up", index)}><FiChevronUp /></button></td>
                                    <td><p>{x.fieldName}</p></td><td><p>{x.fieldType}</p></td><td><button className="noStyleButton" onClick={deleteButtonHandler(x)}> <AiFillDelete /></button></td>
                                    </tr>
                            } else {
                            return <tr key={index}>
                                
                                <td><div className="dualButtonContainer">
                                        <button className="formButton dualButtons" onClick={() => formButtonHandler("up", index)}><FiChevronUp /></button>
                                        <button className="formButton dualButtons" onClick={() => formButtonHandler("down", index)}><FiChevronDown /></button>
                                </div></td>
                                <td><p>{x.fieldName}</p></td><td><p>{x.fieldType}</p></td><td><button className="noStyleButton" onClick={deleteButtonHandler(x)}> <AiFillDelete /></button></td>
                                </tr> 
                            }                            
                        })}



                        {/* {fieldList.map((x,index) => {
                            if (index === 0) {
                                return <tr key={index}>
                                    <td><button className="formButton" onClick={() => formButtonHandler("down", index)}><FiChevronDown /></button></td>
                                    <td><p>{x.name}</p></td><td><p>{x.type}</p></td><td><button className="noStyleButton" onClick={deleteButtonHandler(x)}><AiFillDelete /></button></td>
                                    </tr>
                            } else if (index === (fieldList.length-1)) {                                
                                return <tr key={index}>
                                    <td><button className="formButton" onClick={() => formButtonHandler("up", index)}><FiChevronUp /></button></td>
                                    <td><p>{x.name}</p></td><td><p>{x.type}</p></td><td><button className="noStyleButton" onClick={deleteButtonHandler(x)}> <AiFillDelete /></button></td>
                                    </tr>
                            } else {
                            return <tr key={index}>
                                
                                <td><div className="dualButtonContainer">
                                        <button className="formButton dualButtons" onClick={() => formButtonHandler("up", index)}><FiChevronUp /></button>
                                        <button className="formButton dualButtons" onClick={() => formButtonHandler("down", index)}><FiChevronDown /></button>
                                </div></td>
                                <td><p>{x.name}</p></td><td><p>{x.type}</p></td><td><button className="noStyleButton" onClick={deleteButtonHandler(x)}> <AiFillDelete /></button></td>
                                </tr> 
                            }                            
                        })} */}


                        </tbody>
                        </table>
                        
                    </div>
                </div>
                </div>
        </div>
    )
}