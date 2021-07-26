import React, {useState} from "react";
import { Text, View , TouchableOpacity} from "react-native";
import styles from "../constants/styles";

const CommonPicker = (props) => {

  const {optionsList, defaultPickedOption, parentCallback } = props;
  const [pickedOption, setPickedOption] = useState(defaultPickedOption);

  return (
    <View style={{flexDirection:'row', marginHorizontal:4}}>
      {optionsList.map((option, index) => (
          <TouchableOpacity
          onPress={()=>{setPickedOption(option); parentCallback(option)}}>
            <Text
            style={pickedOption===option? styles.picked_style: styles.unpicked_style}>
              {option}
            </Text>
          </TouchableOpacity> 
    ))}
    </View>
  );
};

export default CommonPicker;