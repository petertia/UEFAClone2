import * as React from 'react';
import { StyleSheet, SafeAreaView, Pressable} from "react-native";
import Field from '../components/Field';
import { Text } from '../components/Themed';
import TeamStats from '../components/TeamStats';

export default function TabOneScreen() {
  
  const viewPlayers = () => {
    console.warn("View player");
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <TeamStats/>
      <Field/>

      <Pressable onPress={viewPlayers} 
      style={styles.buttonContainer}>
        <Text>View Players</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#72cc5e',
  },

  buttonContainer: {
    backgroundColor:'orange', 
    width:'100%', 
    margin: 20,
    padding:10,
    alignItems: 'center',
    borderRadius:50,
    marginTop: "auto"

  }

});
