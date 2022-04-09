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
        style={{height:230,}}
        source= {{uri:"https://github.com/pinyi0911/AppMid/blob/master/img/drawerTile.png?raw=true"}}
        alt='albumImage'
      />
      <DrawerItemList {...props} />
      <Divider my="2"/>
      <DrawerItem 
        label="Help"
        activeBackgroundColor={"#000"}
        activeTintColor={"#000"}
        inactiveTintColor={"#000"}
        labelStyle={ {fontSize: 15, fontWeight: '400'} }
        icon={({ color }) => (
          <MaterialCommunityIcons name="account-question" color="#000" size={26} />
        )}
        onPress={()=>alert('Need Help ...')}
      />
 

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
        drawerStyle: { width: 340 ,backgroundColor:"#F8F8F8",},
        drawerLabelStyle: { fontSize: 15, fontWeight: '700',marginLeft:20,color:"#2E2015", },
        tapToClose: true,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tapToClose: true,
          headerShown: false,
          drawerLabel: "首頁",

        }}
      />

     <Drawer.Screen 
        name="Wishlist" 
        component={WishlistScreen} 
        options={{
          title: "序號兌換",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          
        }}
      />
           <Drawer.Screen 
        name="Wish" 
        component={WishlistScreen} 
        options={{
          title: "Wishlist",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          
        }}
      />
      
      
    </Drawer.Navigator>
    
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
            backgroundColor: '#f8f8f8',
          },
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          // headerShadowVisible: false,//去除陰影

          headerLeft: () => (

            <MaterialCommunityIcons 
            name="menu" color="#2E2015" size={24} 
            onPress={()=>navigation.openDrawer()}
            />
            
          ), // 漢堡選單
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