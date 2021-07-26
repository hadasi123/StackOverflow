import {StyleSheet} from "react-native";
import * as colors from "./colors";

const styles = StyleSheet.create({
    light_style: {
      flex:1,
      justifyContent:'flex-start',
      flexDirection:'column',
      paddingHorizontal:24,
      paddingVertical:8,
      backgroundColor:colors.light_background
    },
    dark_style: {
      flex:1,
      justifyContent:'flex-start',
      flexDirection:'column',
      paddingHorizontal:24,
      paddingVertical:8,
      backgroundColor:colors.dark_background
    },
    light_text_style: {
      color:colors.light_text
    },
  
    dark_text_style: {
      color:colors.dark_text
    },

    picked_style:{
      paddingHorizontal:6,
      borderWidth:1,
      borderColor:colors.black,
      backgroundColor:colors.dark_orange
    },

    unpicked_style:{
      paddingHorizontal:6,
      borderWidth:1,
      borderColor:colors.black,
      backgroundColor:colors.white
    },

    card_style:{
      flexDirection:'row-reverse',
      height:110,
      marginVertical:24,
      alignItems:"center",
      backgroundColor:colors.light_orange,
      padding:4
    }

})

export default styles;