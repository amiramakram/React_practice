
import React,{useState} from 'react';
import { Text, Button ,TextInput, View} from 'react-native';

export default function List({item,onDelete, onEdit }) {
    const [dataupdate, setdataupdate] = useState([]);
     const onChangeValue = (text) => {
        setdataupdate(text)
    }

  return (
      <View style={{flex:1,flexDirection:'row', justifyContent: 'space-between',padding:3}}>
        <Text style={{color: '#263238', fontSize: 20}}> {item.value} </Text>
        
    
        <TextInput placeholder='Change value' style={{color:"#b0bec5",fontSize:15}} onChangeText={onChangeValue} /> 
        <Button title='delete'color="#dd2c00" onPress={() => onDelete(item)} />
      <Button title='update' color="#fbc02d" onPress={() => onEdit(item.value,dataupdate)} />
      </View>
        
  );
}

