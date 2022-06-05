import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
    name:'like',
    initialState:{
        likeList: [],
        showLike: false
    },
    reducers: {
        addToLike(state,action) {
            const newItem = action.payload;
            // const existingItem = state.likeList.find((item) => item.id === newItem.id );

            // if(existingItem) {
            //     existingItem.quantity ++;
            //     existingItem.totalPrice += existingItem.price;
            // }else {
                state.likeList.push({
                    id: newItem.id,
                    name: newItem.name,
                    image: newItem.image,
                })
        //     }
        //     state.totalQuantity++;
        },
        removeFromLike(state,action) {
            const id = action.payload;
            // const existingItem = state.cartList.find(item => item.id === id);
            
            // if(existingItem.quantity === 1){
                state.likeList = state.likeList.filter(item => item.id !== id);
            // } else {
            //     existingItem.quantity--;
            //     existingItem.totalPrice -= existingItem.price;
            // }
        },
        setShowLike(state) {
            state.showLike = true;
        }
    }
});

export const likeActions = likeSlice.actions;
export default likeSlice;
