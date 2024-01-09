import { get } from "../utils/requests";

export const getQuestionsList = async (topicId)=>{
    const res2 = await get(`http://localhost:3002/questions?topicId=${topicId}`)
    return res2;
}


