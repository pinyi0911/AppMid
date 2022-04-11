import React,{useState} from 'react';
import { Image,Pressable,TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Divider,  Input, HStack,VStack, Text,Switch,useColorMode,Center,Box } from 'native-base';
import { StatusBar } from 'native-base';

import MainScreen from '../screens/MainScreen';
import DetailScreen from '../screens/DetailScreen';
import SerialNumScreen from '../screens/SerialNumScreen';
import MyBookScreen from '../screens/MybookScreen';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
const { colorMode } = useColorMode();
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={
          colorMode == "light" ? "dark-content" : "light-content"
        }
        backgroundColor={
          colorMode == "light" ? "white" : "black"
        }
      />
      <MyDrawer />
    </NavigationContainer>
  );
}

const CustomDrawerContent = (props) => {
  // const { colors } = useTheme();
  const { colorMode, toggleColorMode } = useColorMode();
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
      {/* <DrawerItem 
        label="Help"
        activeBackgroundColor={"#000"}
        activeTintColor={"#000"}
        inactiveTintColor={"#000"}
        labelStyle={ {fontSize: 15, fontWeight: '400'} }
        icon={({ color }) => (
          <MaterialCommunityIcons name="account-question" color="#000" size={26} />
        )}
        onPress={()=>alert('Need Help ...')}
        

      /> */}
      
      
      <HStack alignItems="center" ml="30" fontWeight="bold">
      <Text 
      bold fontSize="15" color={colorMode == "light" ? "#2E2015" : "#f8f8f8"}
      >{colorMode == "light" ? "日間模式" : "夜間模式"}</Text>
       <Switch
                  // name="light Mode"
                  isChecked={colorMode === "light"}
                  onToggle={toggleColorMode}
                  offTrackColor="#f8f8f8" 
                  onTrackColor="#2E2015"
                  offThumbColor="#FFC764" 
                  onThumbColor="#FFC764"
                  ml="3"
  
         />
        <Center/>
        </HStack> 
        {/* light/dark模式按鈕 */}
      
          

    </DrawerContentScrollView>
  );
}

const MyDrawer = () => {
  // const { colors } = useTheme();
  const { colorMode } = useColorMode();
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        drawerActiveBackgroundColor: colorMode=='light'?"#FFC764":"#C0A068",
        drawerActiveTintColor: "#FFC764",
        drawerInactiveTintColor: "#FFC764",
        drawerStyle: { width: "85%" ,backgroundColor:colorMode=='light'?'#f8f8f8':"#2E2015",},
        drawerLabelStyle: { fontSize: 15, fontWeight: '700',marginLeft:15,color:colorMode=='light'?"#2E2015":'#f8f8f8', },
        
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
        name="SerialNum" 
        component={SerialStack} 
        options={{
          
          headerShown: false,
          drawerLabel: "序號兌換",

        }}
      />

    
      
      
    </Drawer.Navigator>
    
  );
}

const SerialStack = ({navigation}) => {

  const { colorMode } = useColorMode();


  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerShown: false
      // }}
    >
      
    
<Stack.Screen
        name="SerialNum"
        component={SerialNumScreen}
        options={{
          title: "序號兌換",
          headerStyle: {
            backgroundColor: colorMode=='light'?"#f8f8f8":"#2E2015",
          },
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 15,
            // marginLeft:20,
            color:colorMode=='light'?"#2E2015":"#f8f8f8"
          },
          // headerShadowVisible: false,//去除陰影

          headerLeft: () => (
            <Box mr="3" >
            <MaterialCommunityIcons 
            name="menu" color={colorMode=='light'?"#2E2015":"#FFC764"} size={24} 
            onPress={()=>navigation.openDrawer()}
            />
            </Box>
          ), // 漢堡選單
        }}
      />
      


      
      

    </Stack.Navigator>
  );
}

const HomeStack = ({navigation}) => {

  const { colorMode } = useColorMode();
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
        component={MainScreen}
        options={{
          title: " ",
          headerStyle: {
            backgroundColor: colorMode=='light'?"#f8f8f8":"#2E2015",
          },
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          // headerShadowVisible: false,//去除陰影

          headerLeft: () => (

            <MaterialCommunityIcons 
            name="menu" color={colorMode=='light'?"#2E2015":"#FFC764"} size={24} marginLeft="20" 
            onPress={()=>navigation.openDrawer()}
            />
            
          ), // 漢堡選單
        }}
      />

{/* <Stack.Screen
        name="SerialNum"
        component={SerialNumScreen}
        options={{
          title: "序號兌換",
          headerStyle: {
            backgroundColor: colorMode=='light'?"#f8f8f8":"#2E2015",
          },
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          // headerShadowVisible: false,//去除陰影

          headerLeft: () => (

            <MaterialCommunityIcons 
            name="menu" color={colorMode=='light'?"#2E2015":"#FFC764"} size={24} marginLeft="20" 
            onPress={()=>navigation.openDrawer()}
            />
            
          ), // 漢堡選單
        }}
      /> */}
      


      
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