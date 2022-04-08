
const ToggleMenuReducer = (state = false, action) => {
    if (action.type === "toggleMenu") {
        return state = !state;
    }
    return state;
}

export default ToggleMenuReducer;