import { get } from "../utils/requests";

export const getUserList = async ()=>{
    const res2 = await get("http://localhost:3002/users?")
    return res2;
}

export const getUser = async (email, password)=>{
    let stringPassword = ""
    if(password){
        stringPassword = `&password=${password}`
    }
    const res2 = await get(`http://localhost:3002/users?email=${email}${stringPassword}`)
    return res2;
}
