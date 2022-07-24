/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
    const { colors, paletteName } = route.params;
    return (
        <FlatList
            keyExtractor={(item) => item.hexCode}
            style={styles.container}
            data={colors}
            renderItem={({ item }) => (
                <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
            )}
            ListHeaderComponent={<Text style={styles.heading}>{paletteName}</Text>}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: 'white',
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
    },
});

export default ColorPalette;
