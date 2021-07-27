import React from "react";
import {Text, View} from "react-native";
import {connect} from 'react-redux';
import styles from "../constants/styles";

import {CommonToggle,
        CommonPicker,
        QuestionsList,
        CommonInput,
        ProfileCard} from "../components";

import {sortQuestionsAction,
        refreshUserProfileAndQuestions, 
        toggleModeAction} from "../redux/actions";

import * as strings from "../constants/strings";

function Main({dark_mode,
              user_profile,
              sort_method,
              questions,
              sortQuestions,
              toggleMode,
              updateUserProfile })

{

   function inputCallback(text:string) {
      updateUserProfile(text);
    };

    function pickerCallback(option:string){
      sortQuestions(option);
    }

    function toggleCallback(){
      toggleMode();
    }

    const sortingOptions = [strings.sort_date, strings.sort_answers, strings.sort_views]
  
    return (
        <View style={dark_mode? styles.dark_style: styles.light_style}>

          <CommonToggle
          defaultValue={dark_mode}
          titleOn={strings.light_mode}
          titleOff={strings.dark_mode}
          parentCallback={toggleCallback}>
          </CommonToggle>

          <Text
          style={dark_mode? styles.dark_text_style: styles.light_text_style}>
          {strings.main_title}
          </Text>

          <CommonInput
          maxCharacters={12}
          hint={strings.input_hint}
          parentCallback={inputCallback}
          keyboardType="numeric">
          </CommonInput>

          <ProfileCard
          profile_image={user_profile.profile_image}
          display_name={user_profile.display_name}
          reputation={user_profile.reputation}
          rate={user_profile.accept_rate}>
          </ProfileCard>

          <View style={{flexDirection:'row', marginVertical:16, justifyContent:'center'}}>
              <Text
              style={dark_mode? styles.dark_text_style: styles.light_text_style}>
              {strings.sort_title}
              </Text>
              <CommonPicker
              optionsList={sortingOptions}
              defaultPickedOption={sort_method}
              parentCallback={pickerCallback}>
              </CommonPicker>
          </View>
          
          <QuestionsList items={questions}></QuestionsList>
          <Text
            style={dark_mode? styles.dark_text_style: styles.light_text_style}>
            Total of {questions? questions.length: 0} questions found
          </Text>
        </View>
      );
}

const mapStateToProps=(state)=>({ dark_mode:state.dark_mode,
                                  user_profile:state.user_profile,
                                  sort_method:state.sort_method,
                                  questions:state.questions})

const mapDispatchToProps={
  sortQuestions:sortQuestionsAction,
  updateUserProfile:refreshUserProfileAndQuestions,
  toggleMode:toggleModeAction,
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);