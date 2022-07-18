import React from "react";
import { View, Text } from 'react-native';

const PalettePreview = () => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('ColorPalette', item)}>
            <Text>{item.paletteName}</Text>
        </TouchableOpacity>

    )

};

export default PalettePreview;