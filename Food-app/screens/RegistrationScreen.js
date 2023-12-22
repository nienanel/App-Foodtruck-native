import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { auth, firebase } from '../firebaseConfig';
import { colors } from '../constants/colors';

const RegisterScreen = () => {
    const navigator = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('Registrado con:', user.email);

                firebase.firestore().collection('users').doc(user.uid).set({
                    name: name,
                    email: email,
                    password: password,
                })
                    .then(() => {
                        console.log("Usuario registrado exitosamente");
                        navigator.navigate('Home');
                    })
                    .catch((error) => {
                        console.log("Error al obtener datos del usuario:", error);
                    });
            })
            .catch(() => {
                Alert.alert('Error al registrar usuario');
            })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>

            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
        </View>
    );
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: colors.white,
    },
    title: {
        fontSize: 24,
        fontFamily: 'UrbanistBold',
        marginBottom: 20,
        color: colors.secondary,
        borderBottomWidth: 1,
        borderBottomColor: colors.secondary,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        backgroundColor: colors.terciary,
        
    },
    button: {
        backgroundColor: '#blue',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        backgroundColor: colors.secondary,
        padding: 10,
        borderRadius: 10,
    },
})