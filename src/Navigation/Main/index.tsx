import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "@/Screens/Home";
import { ProfileScreen } from "@/Screens/Profile/ProfileScreen";
import { Icon } from "native-base";
import { Home, User, Plus } from "lucide-react-native";
import { TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();

export const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon as={Home} color={color} />,
          tabBarLabel: 'Trang chủ'
        }}
      />
      <Tab.Screen
        name="Add"
        component={ProfileScreen}
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity
              style={{
                backgroundColor: '#2563eb',
                width: 50,
                height: 50,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: -20,
              }}
              onPress={() => {
                // Xử lý khi nhấn nút +
              }}
            >
              <Icon as={Plus} color="white" size="xl" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon as={User} color={color} />,
          tabBarLabel: 'Cá nhân'
        }}
      />
    </Tab.Navigator>
  );
};