export const postAnswers = async (obj) => {
    const res1 = await fetch("http://localhost:3002/answers", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(obj)
    })
    const res2 = await res1.json()
    return res2
}


export const getAnswersbyUserId = async (userId, topicId) => {
    var stringTopicId = ``
    if(topicId){
        stringTopicId = `&topicId=${topicId}`
    }
    const res1 = await fetch(`http://localhost:3002/answers?userId=${userId}`+stringTopicId)
    const res2 = await res1.json()
    return res2
}


export const getAnswersbyId = async (id) => {
   
    const res1 = await fetch(`http://localhost:3002/answers?id=${id}`)
    const res2 = await res1.json()
    return res2
}
