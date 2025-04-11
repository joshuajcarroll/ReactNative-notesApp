import { Flatlist, Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';

function NoteScreen() {
    const [notes, setNotes] = useState([
        { id: 1, content: "Note 1" },
        { id: 2, content: "Note 2" },
        { id: 3, content: "Note 3" },
    ]);

  return (
    <View style = {styles.container}>
        <Flatlist
            data={notes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.noteItem}>
                    <Text style = {styles.noteText}>{item.text}</Text>
                </View>
            )}
        />
    </View>
  )
}

export default NoteScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    noteItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#f5f5f5",
        padding: 15,
        borderRadius: 5,
        marginVertical: 5,
    },
    noteText: {
        fontSize: 10,
    },

});