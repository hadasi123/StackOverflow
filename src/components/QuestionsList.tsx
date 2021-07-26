import React from 'react';
import {FlatList,View, Text } from 'react-native';
import WebViewComponent from "./WebViewComponent";

const QuestionsList = (props) => {

  const {items} = props

    const renderItem = ({ item }) => {
      return (
        <View style={{marginBottom:14, backgroundColor:"#ffffff", padding:12, alignItems:"flex-start"}}>

          <Text>{item.title}</Text>
          <Text>Created: {item.creation_date}</Text>
          <Text>Views: {item.view_count}</Text>
          <Text>Answers: {item.answer_count}</Text>
          <WebViewComponent link={item.link}></WebViewComponent>

        </View>
       
      )};
  
    return (
      <View style={{flex:1, backgroundColor:"#F9F0EE", paddingVertical:8}}>
        <FlatList style={{flex:1, backgroundColor:"#F9F0EE", paddingHorizontal:8}}
          data={items}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        </View>
    );
  }

export default QuestionsList;