import React from 'react';
import {FlatList,View, Text } from 'react-native';
import WebViewComponent from "./WebViewComponent";
import * as strings from "../constants/strings";
import * as colors from "../constants/colors";

const QuestionsList = (props) => {

  const {items} = props

    const renderItem = ({ item }) => {
      return (
        <View style={{marginBottom:14, backgroundColor:colors.white, padding:12, alignItems:"flex-start"}}>

          <Text>{item.title}</Text>
          <Text>{strings.created_title}{item.creation_date}</Text>
          <Text>{strings.views_title}{item.view_count}</Text>
          <Text>{strings.answers_title}{item.answer_count}</Text>
          <WebViewComponent link={item.link}></WebViewComponent>

        </View>  
      )};
  
    return (
      <View style={{flex:1, backgroundColor:colors.light_orange, paddingVertical:8}}>
        <FlatList style={{flex:1, backgroundColor:colors.light_orange, paddingHorizontal:8}}
          data={items}
          renderItem={renderItem}
          keyExtractor={item => item.id}/>
        </View>
    );
  }

export default QuestionsList;