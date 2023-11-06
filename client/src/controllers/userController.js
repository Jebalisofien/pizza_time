import create from "zustand";
import axios from "axios";


const userController = create((set) => ({
    


    loggedIn: null,
    

    loginForm: {
        email: "",
        password:"",
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

    login: async (e) => {
        
        
        
        const { loginForm } = userController.getState();
        console.log(loginForm);
        const res = await axios.post("/api/login", loginForm )
        
            
            set({loggedIn: true});
                
            console.log(res);
        
    },
    checkAuth: async () => {
        try{
        await axios.get("/api/check-auth");
        set({ loggedIn: true });}
        catch (err) {
        set({ loggedIn: false });
        }
    },

}));
    
    export default userController;