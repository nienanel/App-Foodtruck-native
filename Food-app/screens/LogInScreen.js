import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Pressable, StyleSheet } from 'react-native';

import BackGroundVideo from "../components/BackGroundVideo";
import { Checkbox } from 'react-native-paper';


const LogInScreen = () => {
    const navigation = useNavigation();
    const [isChecked, setIsChecked] = useState(false);

    return (
        <View style={styles.container}>
            <BackGroundVideo />
            <View style={styles.content}>
                <Text style={styles.text}>LogInScreen</Text>
                <View style={styles.buttonsContainer}>
                    <Pressable
                        onPress={() => navigation.navigate('Home')}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Enter</Text>
                    </Pressable>

                    <Pressable
                        title="Register"
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Register</Text>
                    </Pressable>
                </View>
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        status={isChecked ? 'checked' : 'unchecked'}
                        onPress={() => setIsChecked(!isChecked)}
                        style={styles.checkbox}
                        uncheckedColor='black'
                    />
                    <Text style={styles.textCheck}>Suscribe!</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'red',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: 'black',
        marginHorizontal: 10,
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    checkbox: {
        backgroundColor: 'black',
        color: 'white',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    textCheck: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        marginTop: 20,
        marginLeft: 10,
        marginBottom: 15,
    }
});

export default LogInScreen;