import React from "react";
import { TextInput, View} from "react-native";
import * as colors from "../constants/colors";

const CommonInput = (props) => {

    const [text, onChangeText] = React.useState(props.text);
    const { maxCharacters, hint, inputStyle, parentCallback, keyboardType } = props;
    
    return (
      
      <View style={[styles.base, { ...inputStyle }]}>
        <TextInput
          style={styles.text}
          onEndEditing={() => text !== "" && parentCallback( text)}
          multiline={true}
          maxLength={maxCharacters}
          onChangeText={onChangeText}
          value={text}
          placeholder={hint}
          keyboardType={keyboardType}
        ></TextInput>
      </View>
    );
  };
  
  const styles = {
    base: {
      flexDirection: "column",
      alignContent: "flex-start",
      backgroundColor:colors.light_orange,
    },
    text: {
      fontSize: 12,
    },
  };

export default CommonInput;