
const login = {
    setToken : () =>{
        localStorage.setItem("token",true);
    },
    removeToken: () =>{
        localStorage.removeItem("token");
    },
    isLoged : () =>{
        const token = localStorage.getItem("token");
        return token ? true : false;
    }
}

export default login;