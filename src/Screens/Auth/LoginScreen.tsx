// Screens/Auth/LoginScreen.tsx

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "native-base";
import { i18n, LocalizationKey } from "@/Localization";
import { RootScreens } from "..";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, RootScreens.LOGIN>;

export const LoginScreen = ({ navigation }: LoginScreenProps) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = () => {
        // Xử lý logic đăng nhập ở đây (ví dụ: gọi API, xác thực...)
        console.log("Username:", username, "Password:", password);

        // Điều hướng đến màn hình chính sau khi đăng nhập thành công
        navigation.navigate(RootScreens.MAIN);
    };

    return (
        <View style={styles.container}>
            <Text fontSize="2xl" fontWeight="bold">
                {i18n.t(LocalizationKey.LOGIN_TITLE)}
            </Text>
            <Input
                placeholder={i18n.t(LocalizationKey.USERNAME)}
                value={username}
                onChangeText={setUsername}
                mt={4}
            />
            <Input
                placeholder={i18n.t(LocalizationKey.PASSWORD)}
                value={password}
                onChangeText={setPassword}
                type="password"
                mt={4}
            />
            <Button onPress={onLogin} mt={6}>
                {i18n.t(LocalizationKey.LOGIN_BUTTON)}
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
});
