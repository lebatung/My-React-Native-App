import React, { useState } from "react";
import { View, StyleSheet, Image, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import { Text, Input, Button } from "native-base";
import { Select } from "native-base";
import { i18n, LocalizationKey } from "@/Localization";
import { RootScreens } from "..";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { ApiHelper } from "@/Helper/AxiosHelper";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, RootScreens.LOGIN>;

export const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [year, setYear] = useState("2024");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  interface LoginResponse {
    access_token: string;
    refresh_token: string;
    message: string;
  }

  const saveTokens = async (accessToken: string, refreshToken: string) => {
    console.log('Bắt đầu lưu token:', { accessToken, refreshToken });
    
    if (!accessToken || !refreshToken) {
      throw new Error('Token không hợp lệ');
    }
    
    try {
      await Promise.all([
        AsyncStorage.setItem('access_token', accessToken),
        AsyncStorage.setItem('refresh_token', refreshToken)
      ]);
      
      const savedAccessToken = await AsyncStorage.getItem('access_token');
      const savedRefreshToken = await AsyncStorage.getItem('refresh_token');
      console.log('Token đã được lưu:', { savedAccessToken, savedRefreshToken });
      
    } catch (error) {
      console.error('Lỗi khi lưu token:', error);
      throw new Error('Không thể lưu token');
    }
  };

  const onLogin = async () => {
    setIsLoading(true);
    
    try {
      const response = await ApiHelper.post<LoginResponse>('/login', {
        username, 
        password 
      });
      
      console.log('Response từ API:', response.data);
      
      if (response?.data?.access_token && response?.data?.refresh_token) {
        console.log('Token nhận được từ API:', {
          access: response.data.access_token,
          refresh: response.data.refresh_token
        });
        
        await saveTokens(response.data.access_token, response.data.refresh_token);
        
        const checkToken = await AsyncStorage.getItem('access_token');
        console.log('Kiểm tra token sau khi lưu:', checkToken);
        
        navigation.navigate(RootScreens.MAIN);
      } else {
        setError("Đăng nhập thất bại - Không nhận được token");
        console.warn('Token không tồn tại trong response:', response);
      }
    } catch (error) {
      console.error('Lỗi trong quá trình đăng nhập:', error);
      setError("Đăng nhập thất bại");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <View style={styles.headerContainer}>
              <Image 
                source={require('../../../assets/NTSOFTLOGO.png')} 
                style={styles.ntsoftLogo} 
              />
              <View style={styles.logoTitleContainer}>
              
                <Text fontSize="2xl" fontWeight="bold" color="#006A4E">
                  Đăng nhập
                </Text>
              </View>
              <Text fontSize="md" color="gray.600" mt={2}>
                Vui lòng đăng nhập để trải nghiệm ứng dụng
              </Text>
            </View>

            <Input
              placeholder="Tên đăng nhập"
              value={username}
              onChangeText={setUsername}
              mt={4}
              borderRadius="lg"
              leftElement={
                <Ionicons name="person-outline" size={20} color="#006A4E" style={{marginLeft: 10}} />
              }
            />
            
            <Input
              placeholder="Mật khẩu"
              value={password}
              onChangeText={setPassword}
              type={showPassword ? "text" : "password"}
              mt={4}
              borderRadius="lg"
              leftElement={
                <Ionicons name="lock-closed-outline" size={20} color="#006A4E" style={{marginLeft: 10}} />
              }
              rightElement={
                <Ionicons 
                  name={showPassword ? "eye-outline" : "eye-off-outline"} 
                  size={20} 
                  color="#006A4E" 
                  style={{marginRight: 10}}
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
            />

            <Select
              selectedValue={year}
              onValueChange={setYear}
              mt={4}
              borderRadius="lg"
              _selectedItem={{
                bg: "teal.600",
              }}
            >
              <Select.Item label="2024" value="2024" />
              <Select.Item label="2023" value="2023" />
            </Select>

            <View style={styles.checkboxContainer}>
              <Ionicons 
                name={rememberMe ? "checkbox" : "square-outline"} 
                size={20} 
                color="#006A4E"
                onPress={() => setRememberMe(!rememberMe)}
              />
              <Text ml={2}>Ghi nhớ</Text>
            </View>

            <Button 
              onPress={onLogin} 
              mt={6}
              style={styles.loginButton}
              isLoading={isLoading}
              rightIcon={<Ionicons name="arrow-forward" size={20} color="white" />}
            >
              <Text color="white">Đăng nhập</Text>
            </Button>

            {error ? <Text color="red.500" mt={2}>{error}</Text> : null}
          </View>

          <View style={styles.contactContainer}>
            <Text color="gray.600">Liên hệ với chúng tôi</Text>
            <View style={styles.socialButtons}>
              <Button variant="ghost">
                <Image source={require('../../../assets/web.png')} style={styles.socialIcon} />
              </Button>
              <Button variant="ghost">
                <Image source={require('../../../assets/email.png')} style={styles.socialIcon} />
              </Button>
              <Button variant="ghost">
                <Image source={require('../../../assets/phone.png')} style={styles.socialIcon} />
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 30,
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#006A4E',
    borderRadius: 8,
    height: 50,
  },
  contactContainer: {
    marginTop: 'auto',
    alignItems: 'center',
    paddingBottom: 30,
  },
  socialButtons: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },
  socialIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  logoTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  ntsoftLogo: {
    width: 300,
    height: 100, 
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
});
