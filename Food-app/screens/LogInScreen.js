import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import BackGroundVideo from "../components/BackGroundVideo";
import { colors } from '../constants/colors';

const LogInScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <View style={styles.container}>
            <BackGroundVideo />
            <View style={styles.formContainer}>
                <Text style={styles.title}>Log In</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                />
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Enter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}
                        title="Register"
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        position: 'absolute',
        backgroundColor: colors.primary,
        opacity: 0.9,
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 40,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 8,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
        fontFamily: 'UrbanistBold',
        borderBottomWidth: 1,
        borderBottomColor: colors.secondary,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 20,
        padding: 10,
        fontFamily: 'UrbanistMedium',
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
        backgroundColor: colors.secondary,
        marginHorizontal: 10,
    },
    buttonText: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        fontFamily: 'UrbanistMedium',
    },

});

export default LogInScreen;