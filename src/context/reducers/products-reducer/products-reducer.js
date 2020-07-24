export const productsReducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case "GET_LARGE_IMG":
            return state
        default:
            return state
    }
}