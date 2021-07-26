import {commonService} from "../services";

export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export const SET_USER_ID = "SET_USER_ID";
export const SORT_QUESTIONS = "SORT_QUESTIONS";

export const toggleModeAction=()=>async(dispatch,getState)=>{
    dispatch({
        type:TOGGLE_DARK_MODE,
        payload:{}
    })
}

export const updateUserProfileAction=(query)=>async(dispatch,getState)=>{
    const profile = await getProfileByUserId(query)
    dispatch({
        type:SET_USER_ID,
        payload:profile
    })
}

export const getProfileByUserId=async (query:string)=>{

    const res = await commonService.getData({
        user_id: query,
        order: 'desc',
        sort: 'activity',
        site: 'stackoverflow'
    });
    const results = res.data.items;
    var user = results[0].owner;
    
    var questions = [];
    results.forEach(function (doc) {
        var { creation_date, answer_count, link, title, view_count } = doc;
        console.log("title:" + title);
        var date = new Date(creation_date*1000);
        questions = [...questions, { timestamp: date, creation_date: date.toLocaleDateString(), answer_count, link, title, view_count }];
    });
    let profile = { user, questions };
    return profile;

};

export const sortQuestionsAction=(sortMethod)=>(dispatch,getState)=>{
    
    let questions = getState().questions;
    console.log("sortMethod: " + sortMethod)
    switch (sortMethod)
        {
            case "date":
                questions.sort((questionA, questionB) => (questionA.timestamp > questionB.timestamp) ? 1 : -1);
                break;
            case "answers":
                questions.sort((questionA, questionB) => (questionA.answer_count > questionB.answer_count) ? 1 : -1);
                break;
            case "views":
                questions.sort((questionA, questionB) => (questionA.view_count > questionB.view_count) ? 1 : -1)
                break;
        }

    dispatch({
        type:SORT_QUESTIONS,
        payload:{questions,sort_method:sortMethod}
    })
}