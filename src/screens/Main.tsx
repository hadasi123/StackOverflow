import React from "react";
import {Text, View} from "react-native";
import {CommonToggle,
        CommonPicker,
        QuestionsList,
        CommonInput,
        ProfileCard} from "../components";
import {connect} from 'react-redux';
import {sortQuestionsAction,updateUserProfileAction} from "../redux/actions";

function Main({dark_mode,
              user_profile,
              sort_method,
              questions,
              sortQuestions,
              updateUserProfile })

{
   function callback(text) {
      console.log(text)
      updateUserProfile(text)
    };
  
    return (
        <View style={{ flex:1, justifyContent:'flex-start', flexDirection:'column', marginHorizontal:24, marginVertical:8}}>

          <CommonToggle defaultValue={dark_mode} titleOn={"light mode"} titleOff={"dark mode"}></CommonToggle>

          <Text>Get Stackoverflow Posts</Text>

          <CommonInput maxCharacters={12} hint={"Enter user id"}  parentCallback={callback} ></CommonInput>

          <ProfileCard profile_image={user_profile.profile_image} display_name={user_profile.display_name} reputation={user_profile.reputation} rate={user_profile.accept_rate}></ProfileCard>

          <View style={{flexDirection:'row', marginVertical:16, justifyContent:'center'}}>
            <Text>Sort By: </Text>
            <CommonPicker optionsList={['date', 'answers', 'views']} defaultPickedOption={sort_method}></CommonPicker>
          </View>
          
          <QuestionsList items={questions}></QuestionsList>
          <Text style={{marginTop:20}}>Total of {questions? questions.length: 0} questions found</Text>
        </View>
      );
}


const mapStateToProps=(state)=>({ dark_mode:state.dark_mode,
                                  user_profile:state.user_profile,
                                  sort_method:state.sort_method,
                                  questions:state.questions})

const mapDispatchToProps={
  sortQuestions:sortQuestionsAction,
  updateUserProfile:updateUserProfileAction
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
