import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity , TextInput} from 'react-native';

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
        <View style={styles.container}>
            <TextInput style={styles.inputBox} placeholder={'Name of the story'} />
            <TextInput style={styles.inputBox}  placeholder={'Author of the  story'} />
            <TextInput style={styles.inputBox}  placeholder={'Write your story'} multiline={true}/>
        <TouchableOpacity style={styles.scanButton}>
                        <Text style={styles.buttonText}>SUMBIT</Text>
                        </TouchableOpacity>
            </View>
            )
    }
}
const styles = StyleSheet.create({ 
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
     displayText:{ fontSize: 15, textDecorationLine: 'underline' }, 
     scanButton:{ backgroundColor: '#2196F3', padding: 10, margin: 10 }, 
     buttonText:{ fontSize: 20, },
     inputView:{ flexDirection: 'row', margin: 20 }, 
     inputBox:{ width: 200, height: 40, borderWidth: 1.5, borderRightWidth: 0, fontSize: 20 },
     });