import React, { createContext,useEffect,useState } from 'react'

export const ShopContext = createContext (null);

const getDefaultCart = ()=>{
    let cart ={};
    for (let index = 0; index <300+1; index++) {
        cart[index]=0;

    }
    return cart;
}
const ShopContextProvider =(Props)=>{
    const[all_product, setAllProducts] =useState([])
    const[cartItems, SetCartItems]= useState(getDefaultCart());

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((resp)=>resp.json())
        .then((data)=>setAllProducts(data))
    },[])
    
    const addToCart = (itemId)=>{
        SetCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId})

            })
            .then((resp)=>resp.json)
            .then((data)=>console.log(data))
        }
    }
    const removeFromCart = (itemId)=>{
        SetCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount =()=>{
        let totalAmount =0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id ===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }   
        }
        return totalAmount;
    }
    const getTotalCartItems = ()=>{
        let totalItem =0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item]
            }
        }
        return totalItem
    }

    const contextValue ={getTotalCartItems,getTotalCartAmount, all_product,cartItems,addToCart, removeFromCart};
    return(
        <ShopContext.Provider value={contextValue}>
            {Props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;