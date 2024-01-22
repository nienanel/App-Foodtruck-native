import React, { useState } from "react";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { auth, firebase } from "../services/firebaseConfig";
import { setUser, clearUser } from "../store/authSlice";
import { setUserDetails } from "../store/UserSlice";

export const useAuth = () => {
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const signIn = async (email, password) => {
        setIsLoading(true);
        try {
            const { user } = await auth.signInWithEmailAndPassword(email, password);
            const doc = await firebase.firestore().collection("users").doc(user.uid).get();
            if (doc.exists) {
                const userData = {
                    uid: user.uid,
                    name: doc.data().name || user.displayName,
                    email: user.email
                };
                dispatch(setUser(userData))
                dispatch(setUserDetails(userData))
                navigation.navigate("MainTab")
            } else {
                Alert.alert("Error", "Usuario no encontrado");
            }
        } catch (error) {
            Alert.alert("Error", error.message)
        } finally {
            setIsLoading(false);
        }
    };

    const signOut = async () => {
        try {
            await auth.signOut();
            dispatch(clearUser());
            navigation.navigate("LogIn");
        } catch (error) {
            Alert.alert("Error", error.message);
        }
    };

    const signUp = async (email, password, name) => {
        setIsLoading(true)
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await firebase.firestore().collection("users").doc(user.uid).set({
                name: name,
                email: email
            })
            const userData = {
                uid: user.uid,
                name: name,
                email: email
            }
            dispatch(setUser(userData));
            dispatch(setUserDetails(userData));
            navigation.navigate("MainTab")
        } catch (error) {
            Alert.alert("Error", error.message)
        } finally {
            setIsLoading(false)
        }
    };

    return { signIn, signOut, signUp, isLoading };
};