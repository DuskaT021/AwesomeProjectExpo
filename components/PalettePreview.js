/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, FlatList, View } from 'react-native';

const PalettePreview = ({ handlePress, colorPalette }) => {
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.text}>{colorPalette.paletteName}</Text>
            <FlatList
                horizontal={true}
                data={colorPalette.colors.slice(0, 5)}
                keyExtractor={item => item.colorName}
                renderItem={({ item }) =>
                    <View style={[styles.box, { backgroundColor: item.hexCode }]} />}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
    },
    box: {
        height: 30,
        width: 30,
        marginRight: 10,
    },
});
export default PalettePreview;
// https://frontendmasters.com/courses/react-native-v2/navigation-solution-adding-new-data/
// 16:09
