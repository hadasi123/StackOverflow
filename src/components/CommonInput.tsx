import React from "react";
import { TextInput, View } from "react-native";

const CommonInput = (props) => {

    const [text, onChangeText] = React.useState(props.text);
    const { maxCharacters, hint, inputStyle, parentCallback } = props;
    
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
        ></TextInput>
      </View>
    );
  };
  
  const styles = {
    base: {
      flexDirection: "column",
      alignContent: "flex-start",
      backgroundColor:"#F9F0EE",
    },
    text: {
      fontSize: 12,
    },
  };

export default CommonInput;