export const CreateComponentPod = ({ setAppState }) => {

    return (
        <div className="pod halfPod podExpand">
            <h2>Select Component Type</h2>
            <div id="componentSelect">
                <ul>
                    <li><a onClick={() => {setAppState("AddTextbox")}}>Text Box</a></li>
                    <li><a onClick={() => {setAppState("AddMedia")}}>Media</a></li>
                    <li><a onClick={() => {setAppState("AddButton")}}>Button</a></li>
                    <li><a onClick={() => {setAppState("AddBanner")}}>Banner</a></li>
                    <li><a onClick={() => {setAppState("AddForm")}}>Form Field</a></li>
                </ul>
            </div>
        </div>                        
    )
}