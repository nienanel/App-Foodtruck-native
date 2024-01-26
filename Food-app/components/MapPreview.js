import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { googleAPI } from '../services/googleAPI'

const MapPreview = ({ location }) => {

    const MapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=16&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${location.latitude},${location.longitude}&key=${googleAPI.mapStatic}`

    return (
        <View style={styles.MapPreview}>
            <Image
                style={styles.image}
                source={{ uri: MapPreviewUrl }}
                onError={(e) => console.log(e.nativeEvent.error)}
            />
        </View>
    )
};

export default MapPreview;

const styles = StyleSheet.create({
    MapPreview: {
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10
    },
    image: {
        width: 300,
        height: 300,
    }
})