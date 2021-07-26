import React, {useState} from "react";
import { Text, View , TouchableOpacity} from "react-native";

const CommonPicker = (props) => {
  const {optionsList, defaultPickedOption } = props;
  const [pickedOption, setPickedOption] = useState(defaultPickedOption);

  return (
    <View style={{flexDirection:'row', marginHorizontal:4}}>
      {optionsList.map((option, index) => (

          pickedOption===option?
          <TouchableOpacity
          onPress={()=>setPickedOption(option)}>
            <Text
            style={{paddingHorizontal:6, borderWidth:1, borderColor:"#444444", backgroundColor:"#F6A18E"}}>
              {option}
            </Text>
          </TouchableOpacity> :
          <TouchableOpacity
          onPress={()=>setPickedOption(option)}>
            <Text
            style={{paddingHorizontal:6, borderWidth:1, borderColor:"#444444"}}>
              {option}
            </Text>
          </TouchableOpacity>
        
    ))}
    </View>
  );
};

export default CommonPicker;