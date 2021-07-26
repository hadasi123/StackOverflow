import React, {useState} from "react";
import { Text, View , Switch, StyleSheet} from "react-native";
import styles from "../constants/styles";

const CommonToggle = (props) => {

  const {defaultValue, titleOn, titleOff, parentCallback} = props;
  const [isEnabled, setIsEnabled] = useState(defaultValue);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    parentCallback()
  }

  return (
    <View style={{flexDirection:"column",alignItems:'flex-end'}}>
      <Switch 
        onValueChange={toggleSwitch}
        value={isEnabled}>
      </Switch>
      <Text style={isEnabled? styles.dark_text_style: styles.light_text_style}>
        {isEnabled? titleOff: titleOn}
      </Text>
    </View>
  );
};

export default CommonToggle;