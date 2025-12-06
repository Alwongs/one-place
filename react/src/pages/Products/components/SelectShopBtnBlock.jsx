import React, { useEffect, useState } from "react";
export default function SelectShopBtnBlock({onSelect}) {

    const [ selectedShop, setSelectedShop ] = useState('ozon')

    const onSelectHandler = (shop) => {
        onSelect(shop);
        setSelectedShop(shop);
    }

    return (
        <div className="products-header__actions">
            <button
                className={`products-header__actions-btn text-ozon ${selectedShop === 'ozon' ? 'bg-ozon' : ''}`}
                onClick={() => onSelectHandler('ozon')}
            >
                Ozon
            </button>

            <button
                className={`products-header__actions-btn text-wb ${selectedShop === 'wb' ? 'bg-wb' : ''}`}
                onClick={() => onSelectHandler('wb')}
            >
                WB
            </button>

            <button
                className={`products-header__actions-btn text-ya ${selectedShop === 'ya' ? 'bg-ya' : ''}`}
                onClick={() => onSelectHandler('ya')}
            >
                Ya
            </button>      

            <button
                className={`products-header__actions-btn text-dns ${selectedShop === 'dns' ? 'bg-dns' : ''}`}
                onClick={() => onSelectHandler('dns')}
            >
                DNS
            </button>                                       
        </div>                           
    )
}