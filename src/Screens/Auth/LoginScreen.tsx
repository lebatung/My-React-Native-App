import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "native-base";
import { i18n, LocalizationKey } from "@/Localization";
import { RootScreens } from "..";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { ApiHelper } from "@/Helper/AxiosHelper";
import AsyncStorage from '@react-native-async-storage/async-storage';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, RootScreens.LOGIN>;

export const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  interface LoginResponse {
    access_token: string;
    refresh_token: string;
    message: string;
  }

  const onLogin = async () => {
    setIsLoading(true);
    
    if (!username || !password) {
      setError("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu");
      return;
    }
  
    try {
      setError("");
      const response = await ApiHelper.post<LoginResponse>('/login', {
        username, 
        password 
      });

      console.log('Full Response:', response);
      console.log('Response Data:', response.data);
  
      if (response?.data?.access_token && response?.data?.refresh_token) {
        await AsyncStorage.setItem('access_token', response.data.access_token);
        await AsyncStorage.setItem('refresh_token', response.data.refresh_token);
        navigation.navigate(RootScreens.MAIN);
      } else {
        setError("Đăng nhập thất bại");
        console.warn('Token không tồn tại trong response:', response);
      }
    } catch (err: any) {
      console.warn('Error:', err);
      if (err.response?.data) {
        setError(err.response.data.message || "Đăng nhập thất bại");
      } else if (err instanceof Error) {
        setError(err.message || "Có lỗi xảy ra, vui lòng thử lại");
      } else {
        setError("Có lỗi xảy ra, vui lòng thử lại");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text fontSize="2xl" fontWeight="bold">
        Đăng nhập
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
        Đăng nhập
      </Button>
      {error ? <Text color="red.500">{error}</Text> : null}
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
