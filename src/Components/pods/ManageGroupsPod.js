import {useState, useEffect} from 'react'
import { postComponents, deleteComponent } from "../../utils";
import {AiFillDelete} from "react-icons/ai";
import { EditTextBoxPod } from '../editPods/EditTextBoxPod';
import { EditFormPod } from '../editPods/EditFormPod';
import { EditBannerPod } from '../editPods/EditBannerPod'
import { EditMediaPod } from '../editPods/EditMediaPod'

export const ManageGroupsPod = ({setGroup, existingGroups}) => {
    const [existingComponents, setExistingComponents] = useState([]);
    const [searchField, setSearchField] = useState("");
    const [appState, setAppState] = useState("")
    const [editComponentName, setEditComponentName] = useState("")
    const [editComponentObj, setEditComponentObj] = useState();
    const [componentEdit, setComponentEdit] = useState();
    const [on, setOn] = useState(false);


    
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
        console.log("edit comp handler started")
        setEditComponentObj(obj);
        console.log("setEditComponentObj updated with:")
        console.log(obj)
        setAppState(obj.component);
        setOn(!on);
        }
    
    // const editComponentHandler = (obj) => {
    //    setAppState(obj.component)
    //     if(obj.component == "text") {
    //         setEditComponentObj(obj);
    //         setComponentEdit(<EditTextBoxPod setAppState={setAppState} editComponentObj={editComponentObj} setGroup={setGroup} existingGroups={existingGroups}  />)
    //     }       
    // }



  
    return (
        <div id="manageCompContainer">
            {
                    (!appState || appState === "Welcome") &&
                    <>
            {/* existing component search table */}
            <div className="pod halfPod podExpand">
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
            </>
            }
            {/* edit component pod  */}
            
            {
                (appState == "text" || appState == "Text") &&
                <>
                    <div id="editExistPod">

                            <EditTextBoxPod setAppState={setAppState} editComponentObj={editComponentObj} setGroup={setGroup} existingGroups={existingGroups}  />
                    </div>
                </>
            }
            {
                (appState == "form" || appState == "Form") &&
                <>
                    <div id="editExistPod">

                            <EditFormPod setAppState={setAppState} editComponentObj={editComponentObj} setGroup={setGroup} existingGroups={existingGroups}  />
                    </div>
                </>
            }
            {
                (appState == "banner" || appState == "Banner") &&
                <>
                    <div id="editExistPod">

                            <EditBannerPod setAppState={setAppState} editComponentObj={editComponentObj} setGroup={setGroup} existingGroups={existingGroups}  />
                    </div>
                </>
            }
            {
                (appState == "button" || appState == "Button") &&
                <>
                    <div id="editExistPod">

                            <EditBannerPod setAppState={setAppState} editComponentObj={editComponentObj} setGroup={setGroup} existingGroups={existingGroups}  />
                    </div>
                </>
            }
            {
                (appState == "media" || appState == "Media") &&
                <>
                    <div id="editExistPod">

                            <EditMediaPod setAppState={setAppState} editComponentObj={editComponentObj} setGroup={setGroup} existingGroups={existingGroups}  />
                    </div>
                </>
            }




            {/* {
                (appState == "text" || appState == "Text") &&
                <> 
                     />
                </>     
            }
            {
                (appState == "Form" ) &&
                <>
                    <EditFormPod setAppState={setAppState} editComponentObj={editComponentObj} setGroup={setGroup}/>
                </>
            } */}

           





            
        </div>
    )
}