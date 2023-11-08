import create from "zustand";
import axios from "axios";


const userController = create((set) => ({
    


    loggedIn: null,
    

    loginForm: {
        email: "",
        password:"",
    },
    loginRegForm: {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        email: "",
        password:""
    },

    updateLoginForm: (e) => {
        const { name, value } = e. target;
    set((state) => {
    return {
    loginForm: {
    ... state. loginForm,
        [name]: value,
        },
    };
});
},
    updateRegisterForm: (e) => {
        const { name, value } = e. target;
    set((state) => {
    return {
    loginRegForm: {
    ... state. loginRegForm,
        [name]: value,
        },
    };
});
},

    login: async (e) => {
        
        
        
        const { loginForm } = userController.getState();
        console.log(loginForm);
        const res = await axios.post("/api/login", loginForm )
        
            
            set({loggedIn: true});
                
            console.log(res);
        
    },
    signup: async (e) => {
        
        
        
        const { loginRegForm } = userController.getState();
        console.log(loginRegForm);
        const res = await axios.post("/api/signup", loginRegForm )
        
            set(res)
                
            console.log(res);
        
    },
    checkAuth: async () => {
        try{
        await axios.get("/api/check-auth");
        set({ loggedIn: true });}
        catch (err) {
        set({ loggedIn: false });
        console.log(err)
        }
    },
    logout: async () => {
    
        await axios.get("/api/logout");
        set({ loggedIn: false});
        
    },

}));
    
    export default userController;