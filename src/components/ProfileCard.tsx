import React from "react";
import { Text, View, Image } from "react-native";
import * as strings from "../constants/strings";
import styles from "../constants/styles";

const ProfileCard = (props) => {

  const {display_name, profile_image, reputation, rate} = props;

  return (
    <View style={styles.card_style}>

        <View style={{flex:0.6, flexDirection:'column'}}>
            <Text>{strings.display_name_title}{display_name} </Text>
            <Text>{strings.reputation_title}{reputation} </Text>
            <Text>{strings.rate_title}{rate}</Text>
        </View>

        <View style={{flex:0.4}}>
          <Image
            style={{height:100, width:100}}
            source={{uri: profile_image}}/>
        </View>

    </View>
  );
};

export default ProfileCard;