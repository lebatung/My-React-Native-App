import React from 'react';
import { ScrollView } from 'react-native';
import { Box, Icon } from 'native-base';
import { 
  User, 
  Lock, 
  Fingerprint, 
  Palette, 
  Building2, 
  FileText, 
  Info, 
  MessageCircle,
  LogOut 
} from 'lucide-react-native';
import { ProfileHeader } from './Components/ProfileHeader';
import { ProfileSection } from './Components/ProfileSection';
import { ProfileMenuItem } from './Components/ProfileMenuItem';

export const ProfileScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <ProfileHeader />
      
      <ProfileSection title="Thiết lập tài khoản">
        <ProfileMenuItem 
          icon={<Icon as={User} size="sm" />}
          title="Thông tin cá nhân"
        />
        <ProfileMenuItem 
          icon={<Icon as={Lock} size="sm" />}
          title="Đổi mật khẩu"
        />
      </ProfileSection>

      <ProfileSection title="Thiết lập tùy chọn">
        <ProfileMenuItem 
          icon={<Icon as={Fingerprint} size="sm" />}
          title="Đăng nhập bằng vân tay"
        />
        <ProfileMenuItem 
          icon={<Icon as={Palette} size="sm" />}
          title="Tùy chỉnh giao diện"
        />
      </ProfileSection>

      <ProfileSection title="Tùy chọn khác">
        <ProfileMenuItem 
          icon={<Icon as={Building2} size="sm" />}
          title="Thông tin nhà phát triển"
        />
        <ProfileMenuItem 
          icon={<Icon as={FileText} size="sm" />}
          title="Điều khoản sử dụng"
        />
        <ProfileMenuItem 
          icon={<Icon as={Info} size="sm" />}
          title="Thông tin ứng dụng"
        />
        <ProfileMenuItem 
          icon={<Icon as={MessageCircle} size="sm" />}
          title="Góp ý về ứng dụng"
        />
        <ProfileMenuItem 
          icon={<Icon as={LogOut} size="sm" color="red.500" />}
          title="Đăng xuất"
        />
      </ProfileSection>
    </ScrollView>
  );
};