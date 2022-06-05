const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
            token: null,
		},
		actions: {
            syncTokenFromSessionStorage: () => {
                const token = sessionStorage.getItem("token");
                if (token && token !=="" && token !== undefined) setStore({ token: token })

            },

            logout: () => {
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("message")
                setStore({ token: null })
                setStore({ message: null })

            },

            login: async (email,password) => {
                const opts = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }   
        
                try {
                    const res = await fetch("http://localhost:5000/token", opts)
                    if (res.status !== 200){
                        alert("There has been some error.");
                        return false;
                    }
                    
                    const data = await res.json();
                    sessionStorage.setItem("token", data.access_token);
                    setStore({ token: data.access_token })
                    return true;
                }
                catch(error){
                    console.error("There has been some error login in.")
                }
            }, 
            
            showProfile: () => {
                const store = getStore()
                const opts = {
                    headers: {
                        Authorization: "Bearer " + store.token
                    }
                };
                fetch("http://localhost:5000/profile", opts)
                    .then(res => res.json())
                    .then(data => setStore({ message: data.message }))
                    .catch(error => console.log(error))
            },
        }
    }
};


export default getState;