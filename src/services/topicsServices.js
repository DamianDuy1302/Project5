import { get } from "../utils/requests";

export const getTopicsList = async ()=>{
    const res2 = await get("http://localhost:3002/topics")
    return res2;
}

export const getTopic = async (topic)=>{
    const res2 = await get(`http://localhost:3002/topics?id=${topic}`)
    return res2;
}
