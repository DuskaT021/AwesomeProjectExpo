/* eslint-disable prettier/prettier */
import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';

import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
    const [colorPalettes, setColorPalettes] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);
    // eslint-disable-next-line no-lone-blocks
    {/* it is set to false, we only wna to
trigger the refresh, once the user pulls to refresh */}
    const fetchColorPalettes = useCallback(async () => {
        const result = await fetch('https://color-palette-api.kadikraman.now.sh/palettes',);
        if (result.ok) {
            const palettes = await result.json();
            setColorPalettes(palettes);

        }
    }, []);

    useEffect(() => {
        fetchColorPalettes();
    });

    const handleRefresh = useCallback(async () => {
        setIsRefreshing(true);
        await fetchColorPalettes();

        setTimeout(() => {
            setIsRefreshing(false);
        }, 1000);
    }, []);

    return (
        <FlatList
            style={styles.list}
            data={colorPalettes}
            keyExtractor={item => item.paletteName}
            renderItem={({ item }) => (
                <PalettePreview
                    handlePress={() => {
                        navigation.navigate('ColorPalette', item);
                    }}
                    colorPalette={item}
                />

            )}
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            ListHeaderComponent={
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('ColorPaletteModal');
                    }}>
                    <Text>Launch Modal</Text>
                </TouchableOpacity>}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },
});


export default Home;
