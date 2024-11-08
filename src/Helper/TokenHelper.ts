import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';

interface TokenPayload {
  roles: string[];
  exp: number;
  iat: number;
  // ...
}

export const getTokenInfo = async () => {
  try {
    const token = await AsyncStorage.getItem('access_token');
    if (!token) return null;
    
    const decoded = jwtDecode<TokenPayload>(token);
    return decoded;
  } catch (error) {
    console.error('Lỗi khi giải mã token:', error);
    return null;
  }
};

export const getUserRoles = async (): Promise<string[]> => {
  const tokenInfo = await getTokenInfo();
  return tokenInfo?.roles || [];
};

// Kiểm tra role
export const hasRole = async (roleToCheck: string): Promise<boolean> => {
  const roles = await getUserRoles();
  return roles.includes(roleToCheck);
};