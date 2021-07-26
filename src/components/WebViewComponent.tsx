import React, {useState} from "react";
import { View, Modal ,Button, Text, StyleSheet, TouchableOpacity} from "react-native";
import { WebView } from 'react-native-webview';
import * as strings from "../constants/strings";

const WebViewComponent = (props) => {

  const [showModal, setShowModal] = useState(false)

  return(
            <View style={{flex : 1, justifyContent : 'center', alignItems: 'center', marginVertical:8}}>
                <Button title={strings.stackoverflow_button} onPress={() => setShowModal(!showModal)}/>
                <Modal 
                    onRequestClose={() => { setShowModal(false)}}
                    visible={showModal}>
                    <View style={styles.modal}>
                        <View style={styles.modalContainer}>
                            <WebView 
                                style={{ flex : 1 }} 
                                source={{uri: props.link}}/>
                        </View>

                        <TouchableOpacity onPress={() => {setShowModal(false)}}>
                        <Text style={{backgroundColor:"#ffffff"}}>{strings.close_button}</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        )
};

const styles = StyleSheet.create({
  modal : {
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center',
      backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalContainer : {
      backgroundColor : 'white',
      width : '90%',
      height : '90%',
  },

})
export default WebViewComponent;