import {useState, useEffect} from 'react'
import { postComponents, deleteComponent } from "../../utils";
import {AiFillDelete} from "react-icons/ai";

export const ManageGroupsPod = () => {
    const [existingComponents, setExistingComponents] = useState([]);
    const [searchField, setSearchField] = useState("");
    
    
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
  
    return (
        <div className="pod fullPod tablePod">
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
                                            <td>{x.componentName}</td>
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
    )
}