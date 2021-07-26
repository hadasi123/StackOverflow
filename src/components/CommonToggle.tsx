import React, {useState} from "react";
import { Text, View , Switch} from "react-native";

const CommonToggle = (props) => {

  const {defaultValue, titleOn, titleOff} = props;
  const [isEnabled, setIsEnabled] = useState(defaultValue);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{flexDirection:"column",alignItems:'flex-end'}}>
      <Switch 
        trackColor={{ false: "#767577", true: "#F6A18E" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}>
      </Switch>
      <Text> {isEnabled? titleOn: titleOff}</Text>
    </View>
  );
};

export default CommonToggle;