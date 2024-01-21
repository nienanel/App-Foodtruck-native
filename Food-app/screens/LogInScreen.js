import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { setUser } from '../store/authSlice';
import { useDispatch } from 'react-redux';
import BackGroundVideo from "../components/BackGroundVideo";
import { colors } from '../constants/colors';
import { auth, firebase } from '../services/firebaseConfig';
import { ActivityIndicator } from 'react-native';
import { setUserDetails } from '../store/UserSlice';

const LogInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        return () => {
            setEmail('');
            setPassword('');
        }
    }, []);

    const validateInput = () => {
        if (!email.trim() || !password.trim()) {
            Alert.alert('Error', 'Por favor, rellena todos los campos');
            return false;
        }
        return true;
    }

    const handleLogin = () => {
        if (!validateInput()) return;

        setIsLoading(true);

        auth.signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                firebase.firestore().collection('users').doc(user.uid).get()
                    .then((doc) => {
                        if (doc.exists) {
                            const userData = {
                                uid: user.uid,
                                name: doc.data().name,
                                email: user.email
                            };
                            dispatch(setUser(userData));
                            dispatch(setUserDetails(userData));
                            navigation.navigate('MainTab');
                        } else {
                            Alert.alert('Error', 'usuario no encontrado');
                        }
                    })
                    .catch(error => {
                        Alert.alert('Error', 'Error al obtener datos del usuario: ' + error.message);
                    });

            })
            .finally(() => setIsLoading(false));
    };

    return (
        <View style={styles.container}>
            <BackGroundVideo />
            <View style={styles.formContainer}>
                {isLoading && <ActivityIndicator size={"large"} color={colors.secondary} />}
                <Text style={styles.title}>Log In</Text>
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
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        onPress={handleLogin}
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

export default LogInScreen;

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