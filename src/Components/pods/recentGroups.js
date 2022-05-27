export const RecentGroups = () => {

    return (
        <div className="pod halfPod tablePod">
            <div className="halfPodHeader">
            <h2>Recent Groups</h2>
            </div>
            <div id="recentComponentsBodyContainer">
                <div id="recentComponentsBody">
                    <div className="podTableContainer">
                        <table className="podTable">
                            <thead>
                                <tr>
                                    <th>Name</th>                                
                                    <th>Modified</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Example Name</td>
                                    <td>01/01/2022</td>
                                </tr>
                                <tr>
                                    <td>Example Name 2</td>
                                    <td>01/02/2022</td>
                                </tr>
                                <tr>
                                    <td>Example Name 2</td>
                                    <td>01/02/2022</td>
                                </tr>
                                <tr>
                                    <td>Example Name 2</td>
                                    <td>01/02/2022</td>
                                </tr>                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
    )
}