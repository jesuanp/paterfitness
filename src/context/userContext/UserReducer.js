export default (state = initialState, action) => {
    switch (action.type) {
        
        case "FIND_ONE_USER": return {
            ...state,
            user: action.payload
        }

        case "CREATE_USER": return {
            ...state,
            user: action.payload
        }
    
        default: return state
    }
}