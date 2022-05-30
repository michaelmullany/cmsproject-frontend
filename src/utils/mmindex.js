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