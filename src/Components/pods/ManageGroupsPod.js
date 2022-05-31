import {useState, useEffect} from 'react'
import { postComponents, deleteComponent } from "../../utils";
import {AiFillDelete} from "react-icons/ai";
import { EditTextBoxPod, editTextBoxPod } from '../editPods/EditTextBoxPod';

export const ManageGroupsPod = () => {
    const [existingComponents, setExistingComponents] = useState([]);
    const [searchField, setSearchField] = useState("");
    const [appState, setAppState] = useState("")
    const [editComponentName, setEditComponentName] = useState("")
    const [editComponentObj, setEditComponentObj] = useState()

    
    
    useEffect(() => {
        postComponents(searchField, setExistingComponents);
    }, [existingComponents]);

        

    const searchSubmitHandler = (e) => {
        if(e.key == "Enter"){
            e.preventDefault();
        }
    }
    const deleteButtonHandler = (x) => (e) => {
        deleteComponent(x.componentName)
    }
    const editComponentHandler = (obj) => {
        setEditComponentObj(obj)
        setAppState(obj.component)
        }


  
    return (
        <div id="manageCompContainer">

            {/* existing component search table */}
            <div className="pod halfPod tablePod">
                <div className="halfPodHeader">
                <h2>Components</h2>
                </div>

                <form onSubmit={searchSubmitHandler}>
                    <label>Search </label>                
                    <input placeholder="Search components" onKeyPress={searchSubmitHandler} onInput={(e) => {setSearchField(e.target.value)} }></input>
                </form>

                <div id="recentComponentsBodyContainer">
                    <div id="recentComponentsBody">
                        <div className="podTableContainer">
                            <table className="podTable">
                                <thead>
                                    <tr>
                                        <th style={{"width":"30%"}}>Name</th>
                                        <th style={{"width":"30%"}}>Type</th>
                                        <th style={{"width":"30%"}}>Modified</th>
                                        <th style={{"width":"10%"}}></th>
                                    </tr>
                                </thead>
                                <tbody>                       
                                    {existingComponents.map((x, index) => {
                                        return (<tr id={index}>
                                                <td onClick={() => editComponentHandler({
                                                    componentName: x.componentName,
                                                    component: x.component,
                                                    _id: x._id,
                                                    assignedToGroup: x.assignedToGroup,
                                                    type: x.type,
                                                    option: x.option,
                                                    text: x.text,
                                                    formFields: x.formFields,
                                                    label: x.label,
                                                    src: x.src,
                                                    size: x.size
                                                })}>{x.componentName}</td>
                                                <td>{x.component}</td>
                                                <td>01/01/2022</td>
                                                <td><button className="noStyleButton" onClick={deleteButtonHandler(x)}> <AiFillDelete /></button></td>
                                                </tr>                                            
                                        )
                                    })}                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
            </div>
            
            {/* edit component pod  */}


            

            
            {
                (!appState || appState == "") &&
                <>
                    <div id="editExistPod" className="emptyPod">

                    </div>
                </>
            }
            {
                (appState == "text") &&
                <> 
                    <EditTextBoxPod setAppState={setAppState} editComponentObj={editComponentObj}/>
                </>     
            }
            {/* {
                (appState == form) &&
                <>
                    <EditFormPod setAppState={setAppState} editComponentObj={editComponentObj} />
                </>
            } */}

           





            
        </div>
    )
}