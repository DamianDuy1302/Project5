export const topicsReducer = (state="", action)=>{
    switch(action.type){
        case("topicName"):
            return action.name
    }
    return state
}
