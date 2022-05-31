export const submitLoginForm = async (username, password, setError, setUser) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username,
                password
            }),
        });
        const data = await response.json();
        if (data.err) { 
            throw new Error(data.err)
        };
        setUser(data.username);
    } catch (error) {
        setError(error.message);
    }
}

export const signUp = async (username, email, password, setUser, setError) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username,
                email,
                password
            }),
        });
        const data = await response.json();
        if (data.error) {
            throw new Error("Account already exists");
        }
         setUser(data.username);
    } catch (error) {
        setError(error.message);
    }
}

// export const submitNewComponent = async (component) => {
//     console.log(`Submitting a new component: `);
//     for (const [key, value] of Object.entries(component)) {
//         console.log(`${key}: ${value}`);
//     }
// }

export const submitNewComponent = async (component, setFeedback) => {
    try {
        component.dateModified = new Date();
        const response = await fetch(`${process.env.REACT_APP_REST_API}component`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(component),
        });
        const data = await response.json();
        console.log(data);
        if (data.error) {
            throw new Error(data.error)
        }  
        setFeedback({
            type: "success",
            message: `Successfully added new component ${data.componentName}`
        });
    } catch (err) {
        console.log(err.message)
        setFeedback({
            type: "error",
            message: "Could not add component - please make sure the name is unique"
        });
    }
}

// export const listAllComponents = async (setter) => {
//     try {
//         const response = await fetch(`${process.env.REACT_APP_REST_API}component`, {
//             method: "GET",
//             // headers: { "Content-Type": "application/json" },
//             // body: JSON.stringify(componentName)
//         });
//         const data = await response.json();
//         setter(data);
//     } catch (err) {
//         console.log(err.message);
//     }
// }

export const postComponents = async (componentName, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}list`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({componentName})
     });
     const data = await response.json();
     setter(data);
    } catch (err) {
        console.log(err.message);
    }
}

export const deleteComponent = async (componentName) => {
    console.log(componentName);
    try {
        await fetch(`${process.env.REACT_APP_REST_API}component`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({componentName})
        });        
    }
 catch (err) {
    console.log(err.message);
    
    }
}

export const updateComponent = async (component) => {
    try {
        console.log("component is: ");
        console.log(component);
        const response = await fetch(`${process.env.REACT_APP_REST_API}component`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(component),
        });

        const data = await response.json();
        console.log(data);
        if (data.error) {
            throw new Error(data.error)
        }  
    } catch (err) {
        console.log(err.message);
    }
}

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

export const getComponentsByGroup = async (name, setter) => {
    try {
        const filter = { assignedToGroup: name };
        console.log(JSON.stringify(filter));
        const response = await fetch(`${process.env.REACT_APP_REST_API}groupid`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(filter)
     });
     const data = await response.json();
     setter(data.groups);
    } catch (err) {
        console.log(err.message);
    }
}