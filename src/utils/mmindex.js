export const submitNewGroup = async (newGroup, setFeedback) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}group`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newGroup),
        });
        const data = await response.json();
        if (data.error) { 
            throw new Error(data.error)
        };
        setFeedback({
            type: "success",
            message: `Successfully added new group ${data.groupName}`
        });
    } catch (error) {
        console.log(error);
        setFeedback({
            type: "error",
            message: "Could not add group - please make sure the name is unique"
        });
    }
}

export const getGroupsList = async (setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}group`, {
            method: "GET"
        });
        const data = await response.json();
        setter(data.groups);
    } catch (err) {
        console.log(err);
    }
}

export const updateGroup = async (update) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}group`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(update)
        });        
        const data = await response.json();
        console.log(data);
    }
 catch (err) {
    console.log(err.message);
    
    }
}

export const deleteGroup = async (id) => {
    console.log("Deleting Group");
    console.log(id);
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}group`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(id)
        });        
        const data = await response.json();
        console.log(data);
    }
 catch (err) {
    console.log(err.message);
    
    }
}