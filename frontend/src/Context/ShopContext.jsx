import React, { createContext } from 'react'
import all_product from '../Components/Assets/all_product';
export const ShopContext = createContext (null);

const ShopContextProvider =(Props)=>{
    const contextValue ={all_product};

    return(
        <ShopContext.Provider value={contextValue}>
            {Props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;