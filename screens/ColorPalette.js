import React from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import ColorBox from "../components/ColorBox";


const ColorPalette = ({ route }) => {
    const { colors, paletteName } = route.params;
    return (

        <FlatList
            style={styles.container}
            data={colors}
            keyExtractor={item => item.hexCode}
            renderItem={({ item }) => (
                <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
            )}
            ListHeaderComponent={<Text style={styles.heading}>{paletteName}</Text>}
        />

    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: 'white'
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
    }
});

export default ColorPalette;