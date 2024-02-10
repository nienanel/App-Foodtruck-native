import React from "react";
import { ActivityIndicator } from "react-native";
import useSession from "../hooks/useSession";
import MainStackNavigator from "../navigation/MainStackNavigator";
import LogInScreen from "../screens/LogInScreen";

const AppInitialization = () => {
    const { session, isLoading } = useSession()

    if (isLoading) {
        return <ActivityIndicator size={"large"} />
    }

    return session ? <MainStackNavigator /> : <LogInScreen />
};

export default AppInitialization;