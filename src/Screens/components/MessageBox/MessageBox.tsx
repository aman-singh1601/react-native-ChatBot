import { Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import { useConversation } from '../../../Bot/BotContext';


export default function MessageBox() {
  const scrollRef = useRef<ScrollView>(null);
  let mesages = [

    {
      message: "hello world",
      owner: "bot"
    },
    {
      message: "fjkhasdlkfjads;lfkjads",
      owner: "user"
    },
    {
      message: "fjkhasd  lkfjads;l  fkjads",
      owner: "user"
    },
    {
      message: "fjkhasdlkf dfadsfasdfdasfj ads;lfk jads",
      owner: "user"
    },
    {
      message: "fjkhasdlkf dfadsfasdfdasfj ads;lfk jads",
      owner: "user"
    },
    {
      message: "fjkhasdlkf dfadsfasdfdasfj ads;lfk jads",
      owner: "bot"
    },
    {
      message: "fjkhasdlkf dfadsfasdfdasfj ads;lfk jads",
      owner: "bot"
    },
    {
      message: "fjkhasdlkf dfadsfasdfdasfj ads;lfk jads",
      owner: "bot"
    },
  ]

  const {conversation} = useConversation();


  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        scrollRef.current?.scrollToEnd({
          animated: true
        });
      }
    );


    return () => {

      keyboardDidShowListener.remove();
    };
  }, []);

  if(!conversation.length) {
    return (
      <View style = {{flexGrow: 1, justifyContent: "center", alignItems: "center"}}>
        <Text style ={{fontSize: 18}}>
          Welcome
        </Text>
      </View>
    )
  }

  return (
    <ScrollView
      snapToEnd
      ref={scrollRef}
      onContentSizeChange={(contentWidth, contentHeight) => {
        scrollRef.current?.scrollTo({
          y: contentHeight,
          animated: true
        })
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={[styles.container]}>
      {
        conversation.map((m, idx) => (
            <View style={[styles.textContainer, styles.shadowProp, m.owner === "user" ? styles.userMessage : styles.botMessage]} key={idx}>
              <Text
                style={[styles.text, m.owner === "user" ? styles.userText : styles.botText]}
              >{m.message}
              </Text>
            </View>
          ))
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 4,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column-reverse",
    // backgroundColor: "#000000

  },
  textContainer: {
    padding: 10,
    marginVertical: 4,
    // borderRadius: 15,

    backgroundColor: "#383632",
    maxWidth: "70%",
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 16,
  },
  botText: {
    color: "#000000"
  },
  userText: {
    color: "#000000"
  },
  shadowProp: {
    shadowColor: '#7b70ee',
    shadowOffset: {width: -8, height: 10},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  userMessage: {
    alignSelf: 'flex-end',
    textAlign: "justify",
    backgroundColor: "#ffffff",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 20,
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#7b70ee',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 20,
  },
})