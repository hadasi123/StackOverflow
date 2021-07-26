
const image_placeholder = "https://1.bp.blogspot.com/-tIdNnST7hiA/T_5a3pVKfXI/AAAAAAAAAs8/DWdnbzXzUa8/s1600/comics.jpg"

export const initialState={
    dark_mode: false,
    sort_method:"date",
    user_id:"1264804",
    user_profile:{display_name:"-",profile_image:image_placeholder, reputation:"-", accept_rate:"-"},
    questions:[],
};

const reducer = (state=initialState,action) => {
    switch(action.type){
        case "TOGGLE_DARK_MODE": 
            return{
            ...state,
            dark_mode: !state.dark_mode
        }
        case "SORT_QUESTIONS": 
            return{
            ...state,
            sort_method: action.payload.sort_method,
            questions: action.payload.questions
        }
        case "SET_USER_ID": 
        return{
        ...state,
        user_profile: action.payload.user,
        questions: action.payload.questions,
    }
        default:
            return state;

    }   
}

export default reducer;