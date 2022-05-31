import { useState } from 'react';
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { CgArrowLeft } from "react-icons/cg";
import { submitNewComponent } from '../../utils';
import { GroupField } from '../pods/Fields/GroupField';


export const EditFormPod = ({ setAppState, groupName, editComponentObj, existingGroups }) => {

    const [formName, setFormName] = useState();
    const [fieldName, setFieldName] = useState("blank");
    const [fieldType, setFieldType] = useState("field");
    const [fieldList, setFieldList] = useState([]);

    const addFieldHandler = (e) => {
        e.preventDefault();
        console.log(fieldName)
        console.log(fieldType)
        let tempObj = {
            name: fieldName,
            type: fieldType
        }
        let tempFieldListArray = [...fieldList];
        tempFieldListArray.push(tempObj)
        setFieldList(tempFieldListArray)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        let component = {
            name: formName,
            component: "form",
            formFields: fieldList,
        }
        submitNewComponent(component);
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
                        <GroupField groupName={groupName} />                  
                        <div className="inputGroup">
                            <label htmlFor="formName">Form Name: </label>
                            <input type="text" id="formName" name="formName" onChange={(e) => setFormName(e.target.value)} required/>
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
                                <button type="button" onClick={(e) => submitHandler(e)}>Add Field</button>   
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
                        <tr><th>Order</th><th>Field Name</th><th>Field Type</th></tr>
                        {fieldList.map((x,index) => {
                            if (index === 0) {
                                return <tr key={index}>
                                    <td><button className="formButton" onClick={() => formButtonHandler("down", index)}><FiChevronDown /></button></td>
                                    <td><p>{x.name}</p></td><td><p>{x.type}</p></td>
                                    </tr>
                            } else if (index === (fieldList.length-1)) {                                
                                return <tr key={index}>
                                    <td><button className="formButton" onClick={() => formButtonHandler("up", index)}><FiChevronUp /></button></td>
                                    <td><p>{x.name}</p></td><td><p>{x.type}</p></td>
                                    </tr>
                            } else {
                            return <tr key={index}>
                                
                                <td><div className="dualButtonContainer">
                                        <button className="formButton dualButtons" onClick={() => formButtonHandler("up", index)}><FiChevronUp /></button>
                                        <button className="formButton dualButtons" onClick={() => formButtonHandler("down", index)}><FiChevronDown /></button>
                                </div></td>
                                <td><p>{x.name}</p></td><td><p>{x.type}</p></td>
                                </tr> 
                            }
                            
                        })}
                        </tbody>
                        </table>
                        
                    </div>
                </div>
                </div>
        </div>
    )
}