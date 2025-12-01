import React, { useEffect, useState } from "react";
import AddBtn from "@components/btn/AddBtn";

export default function AddBtnBlock({ classes = "", onSelectShop }) {

    const [ selectedShop, setSelectedShop ] = useState('ozon')

    const selectShopHandle = (shop) => {
        onSelectShop(shop)
        setSelectedShop(shop)
    }

    return (
        <div className={`btn-block products-header ${classes}`}>

            <AddBtn
                title="Add Product"
                addPath="/products/create"
                returnPath="/products"
            />

            <div className="products-header__actions">
                <button
                    className={`products-header__actions-btn bg-ozon ${selectedShop === 'ozon' ? 'selected' : ''}`}
                    onClick={() => selectShopHandle('ozon')}
                >
                    Ozon
                </button>

                <button
                    className={`products-header__actions-btn bg-wb ${selectedShop === 'wb' ? 'selected' : ''}`}
                    onClick={() => selectShopHandle('wb')}
                >
                    WB
                </button>

                <button
                    className={`products-header__actions-btn bg-ya ${selectedShop === 'ya' ? 'selected' : ''}`}
                    onClick={() => selectShopHandle('ya')}
                >
                    Ya
                </button>                                
            </div>            
        </div>        
    )
}