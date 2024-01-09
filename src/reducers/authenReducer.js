export const authenReducer = (state = false, action)=>{
    switch(action.type){
        case("authen"):
            return action.value
    }
    return state
}
