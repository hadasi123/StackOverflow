import {commonService} from "../services";

export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export const SET_USER_ID = "SET_USER_ID";
export const SORT_QUESTIONS = "SORT_QUESTIONS";


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
    console.log("user:" + user);
    var questions = [];
    results.forEach(function (doc) {
        var { creation_date, answer_count, link, title, view_count } = doc;
        var date = "" + new Date(creation_date);
        questions = [...questions, { creation_date: date, answer_count, link, title, view_count }];
    });
    let profile = { user, questions };
    return profile;

};

export const sortQuestionsAction=(sortMethod)=>async(dispatch,getState)=>{
    const questions = await sortQuestions(sortMethod, getState.questions)
    dispatch({
        type:SET_USER_ID,
        payload:{questions,sort_method:sortMethod}
    })
}

export const sortQuestions=(sortMethod, questions)=>{
    return new Promise(resolve => {
        resolve(()=>{
        switch (sortMethod)
        {
            case "date":
                return questions.sort((questionA, questionB) => (questionA.creation_date > questionB.creation_date) ? 1 : -1);
            case "answers":
                return questions.sort((questionA, questionB) => (questionA.answer_count > questionB.answer_count) ? 1 : -1);
            case "views":
                return questions.sort((questionA, questionB) => (questionA.view_count > questionB.view_count) ? 1 : -1)
        }
     })
    })
}