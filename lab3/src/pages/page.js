
import React from 'react';
import { Text, Button } from 'react-native';

export default function Page({navigation}) {

  return (
      <>
      
        <Button style={{padding:10}}  title='Login'color={"black"}  onPress={() => 
         navigation.navigate("form")} /> 

        <Button  style={{padding:10}}  title='Todo'color={"black"}  onPress={() => 
        navigation.navigate("Todo")} /> 

      </>
        
  );
}

