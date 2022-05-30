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

export const submitNewComponent = async (component) => {
    try {
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
    } catch (err) {
        console.log(err.message)
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
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}component`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({componentName})
        });        
    }
 catch (err) {
    console.log(err.message);
    
    }
}