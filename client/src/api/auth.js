import axios from "axios";

export const signUp = async (data) => {
    const config = {
        header : {
            "Content-Type" : "application/json"
        }
    }
    const response = await axios.post("http://localhost:5000/api/auth/signup",data,config)
    return response;

}
export const signIn = async (data) => {
    const config = {
        header : {
            "Content-Type" : "application/json"
        }
    }
    const response = await axios.post("http://localhost:5000/api/auth/signin",data,config)
    return response;

}