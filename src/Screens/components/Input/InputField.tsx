import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { useConversation } from '../../../Bot/BotContext';
import Icon from 'react-native-vector-icons/Entypo';

const TextField = () => {
  const [message, setMessage] = useState("");
  const {setConversation} = useConversation();
  
  const messageHandler = () => {
    if(message.length < 1) return;
    setConversation({
      message,
      owner: "user"
    });
    setMessage("");
  }
  return (
    <View style={[styles.container]}>
      <View
        style={[styles.input]}
      >
        <TextInput
          placeholder='type here..'
          multiline = {true}
          style={styles.textholder}
          value={message}
          onChangeText={text => setMessage(text)}
        />
        <TouchableOpacity
          onPress={messageHandler}
        >
        <Icon
          name="paper-plane"
          color= "#000000"
          size={25}
        />
        </TouchableOpacity>

    </View>
    </View>
  )
}

export default TextField;

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    alignItems: "center"
  },
  input: {
    backgroundColor: "#ffffff",
    width: "90%",
    borderRadius: 20,
    paddingHorizontal: 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

  },
  textholder: {
    color: "#000000",
    fontSize: 16,
    marginLeft: 6,
    width: "88%",
    maxWidth: "88%"
  }
})