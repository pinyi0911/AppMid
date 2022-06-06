import React from "react";
//import { View , Text} from "react-native";
import { Box, Image, ColorMode, useColorMode,Text,Pressable} from "native-base";
import { TouchableOpacity } from "react-native";
//import { ImageBackground } from "react-native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from "react-redux";
import cookies from "../json/cookiesList.json"

const TestScreen = ({item,navigation}) => {
    const{colorMode} = useColorMode();
    const likeItems = useSelector((state) => state.like.likeList);
    // console.log(likeItems);

    const dispatch = useDispatch();
    // const increase = () => {
    //     dispatch(cartActions.addToCart({
    //         id,
    //         title,
    //         authors,
    //         image_url,
    //         num_pages,
    //         description,
    //         rating,
            
    //         price,
    //         quantity,
    //         totalPrice
    //     }))
    // }
    // const decrease = () => {
    //     dispatch(cartActions.removeFromCart(id));
    // }

    return(
        <Box flex={1} alignItems= "center" _light={{bg:"#fff"}} _dark={{bg:"#121212"}}>


            {likeItems.map((item) => {
                return(
                    <Box>
                        
                        <Pressable
                            onPress={() => navigation.navigate("CookiePage", {item})}
                        >
                            <Image 
                            width= "78"
                            height= "78"
                            source={{uri: item.image}}
                            alt="cookie"
                            borderRadius={7}
                        />
                        </Pressable>
                        <Text>{item.name}</Text>
                        
                    </Box>
                )
            })}





        </Box>
        
    );
};



export default TestScreen;