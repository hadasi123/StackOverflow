import React from "react";
import { Text, View, Image } from "react-native";

const ProfileCard = (props) => {
  const {display_name, profile_image, reputation, rate} = props;
  return (
    <View style={{flexDirection:'row-reverse', height:100, marginVertical:24, alignItems:"center"}}>

        <View style={{flex:0.6, flexDirection:'column'}}>
            <Text>Display Name: {display_name} </Text>
            <Text>Reputation: {reputation} </Text>
            <Text>Rate: {rate}</Text>
        </View>

        <View style={{flex:0.4}}>
        <Image style={{height:100, width:100}}source={{uri: profile_image}}/>

        </View>

    </View>
  );
};

export default ProfileCard;