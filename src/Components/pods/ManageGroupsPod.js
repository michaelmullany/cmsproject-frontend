import {useState, useEffect} from 'react'
import { postComponents } from "../../utils";


export const ManageGroupsPod = () => {
    const [existingComponents, setExistingComponents] = useState([]);
    
    
    useEffect(() => {
        postComponents("testN", setExistingComponents);
    }, []);
        
  
    return (
        <div className="pod fullPod tablePod">
            <div className="halfPodHeader">
            <h2>Components</h2>
            </div>
            <div id="recentComponentsBodyContainer">
                <div id="recentComponentsBody">
                    <div className="podTableContainer">
                        <table className="podTable">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Modified</th>
                                </tr>
                            </thead>
                            <tbody>
                               
                                {existingComponents.map(x => {
                                    return (<tr>
                                            <td>{x.componentName}</td>
                                            <td>{x.component}</td>
                                            <td>"01/01/2022"</td>
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