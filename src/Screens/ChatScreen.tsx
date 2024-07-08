import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import React, { useEffect, useState } from 'react';

import Typing from "./components/Input/InputField";
import MessageBox from "./components/MessageBox/MessageBox";

export default function ChatScreen() {


  return (
    <KeyboardAvoidingView
      behavior={"padding"}
      style={[styles.container]}
    >
        <View
        style={[styles.container, { backgroundColor: "#584cd7" }]}
        >
          <MessageBox />
          <Typing />
        </View>

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})