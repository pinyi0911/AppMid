import React,{useState} from 'react';
import { Image,Pressable,TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Divider,  Input, HStack, Text } from 'native-base';

import AlbumScreen from '../screens/AlbumScreen';
import DetailScreen from '../screens/DetailScreen';
import WishlistScreen from '../screens/WishlistScreen';
import MybookScreen from '../screens/MybookScreen';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const CustomDrawerContent = (props) => {
  // const { colors } = useTheme();

  return (
    <DrawerContentScrollView {...props}
      contentContainerStyle={{ paddingTop: 0 }}
    >
      <Image
        h={250}
        source={require("../img/drawerTile.png")}
        alt='albumImage'
      />
      <DrawerItemList {...props} />
      <Divider my="2"/>
      <DrawerItem 
        label="Help"
        activeBackgroundColor={"#000"}
        activeTintColor={"#000"}
        inactiveTintColor={"#000"}
        labelStyle={ {fontSize: 18, fontWeight: '400'} }
        icon={({ color }) => (
          <MaterialCommunityIcons name="account-question" color="#000" size={26} />
        )}
        onPress={()=>alert('Need Help ...')}
      />
      <HStack pl="4" alignItems="center">
        <MaterialCommunityIcons name="magnify" color={"#000"} size={26} />
        <Input mx="3" fontSize={18} placeholder="Input Search Text" flex={1} />
      </HStack>

    </DrawerContentScrollView>
  );
}

const MyDrawer = () => {
  // const { colors } = useTheme();

  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        // drawerActiveBackgroundColor: colors.primary100,
        // drawerActiveTintColor: colors.primary700,
        // drawerInactiveTintColor: colors.light500,
        drawerStyle: { width: 300 },
        drawerLabelStyle: { fontSize: 18, fontWeight: '400' },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          drawerLabel: "Home",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

     <Drawer.Screen 
        name="Wishlist" 
        component={WishlistScreen} 
        options={{
          title: "Wishlist",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={24} />
          ),
        }}
      />
      
      
    </Drawer.Navigator>
    
  );
}

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: '#6200EE',
        // headerShown: false
      }}
      
    >
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
          
        }}
        
      />
      <Tab.Screen 
        name="Wishlist" 
        component={WishlistScreen} 
        options={{
          title: "Wishlist",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={24} />
          ),
        }}
      />

        <Tab.Screen 
          name="My books" 
          component={MybookScreen} 
          options={{
            title: "My books",
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
            },
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="book-open" color={color} size={24} />
            ),
            
          }}
        />
    </Tab.Navigator>
  );
}

const HomeStack = ({navigation}) => {


  const [change, setChange] = useState(true);
    const changeIcon = () => {
        setChange(!change);
    };

  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerShown: false
      // }}
    >
      <Stack.Screen
        name="Home"
        component={AlbumScreen}
        options={{
          title: " ",
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          headerShadowVisible: false,//去除陰影
          headerRight: () => (
            // <AntDesign name="SearchOutlined" color={color} size={24} />
            <TouchableOpacity >
            <Image source={{uri:'https://github.com/pinyi0911/BookApp/blob/master/img/icon.png?raw=true'}} 
            style={{
              marginTop:30,
              marginBottom:19,
              height:17.5,
              width:17.5,
          }}
          
            />
            </TouchableOpacity>
            
 
          ), // 右邊放入 icon

          headerLeft: () => (

            <MaterialCommunityIcons 
            name="book-open" color="#000" size={24} 
            onPress={()=>navigation.openDrawer()}
            />
            
 
          ), // 右邊放入 icon
        }}
      />


      
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route,navigation }) => ({
          title: " ",
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: ({color}) => (

          <Pressable 
            onPress={() => {navigation.goBack();}}
          >
          <AntDesign name="left" color={color} size={24} />
          </Pressable>  
            
            // 左邊放入icon /navigation.goBack() 及 backToHome() 回上一頁
          ),
          
          
          headerRight: () => (
            <TouchableOpacity onPress={() => changeIcon()}>
              
            {change ? <MaterialCommunityIcons name={'bookmark-outline'} color={'black'} size={24} />
                     :<MaterialCommunityIcons name={'bookmark'} color={'#6200EE'} size={24} />
            }
            </TouchableOpacity>
          ), // 右邊放入 icon

          headerShadowVisible: false,//去除陰影
        })}
      />
    </Stack.Navigator>
  );
}

export default Navigation;