import React, { useEffect, useState } from "react";
import TableActions from "./TableActions";
import TableItemLink from "./TableItemLink";
import TableDate from "@components/table/TableItemDate";
import { FaExternalLinkAlt  } from 'react-icons/fa'; 
import PriceHistory from "./PriceHistory";
import SelectShopBtnBlock from "./SelectShopBtnBlock";

export default function TableItem({ item, object, deleteMutation }) {  

    const ozonPiceHistory = JSON.parse(item.ozon_price_history);
    const wbPiceHistory = JSON.parse(item.wb_price_history);
    const yaPiceHistory = JSON.parse(item.ya_price_history);
    const dnsPiceHistory = JSON.parse(item.dns_price_history);

    const [ selectedShop, setSelectedShop ] = useState('ozon')

    const selectShopHandle = (shop) => {
        setSelectedShop(shop)
    }   
    
    return (
        <li className="products-table-row">

            <div className="products-table-row__image">
                <img src={ item.image_url } alt="" />
            </div>  

            <SelectShopBtnBlock onSelect={selectShopHandle} />                      
            
            <div className="products-table-row__title-and-price-block" >
                <div className="products-table-row__header">
                    <TableItemLink
                        title={item.title}
                        path={`/${object}/${item.id}`}
                    />
                </div>

                <div className="products-table-row__price-history-block">
                    <PriceHistory data={ozonPiceHistory} shop="ozon" hide={selectedShop !== 'ozon'} />
                    <PriceHistory data={wbPiceHistory} shop="wb" hide={selectedShop !== 'wb'}/>
                    <PriceHistory data={yaPiceHistory} shop="ya" hide={selectedShop !== 'ya'} />
                    <PriceHistory data={dnsPiceHistory} shop="dns" hide={selectedShop !== 'dns'} />
                </div>
            </div>                       

            {/* <div className="products-table-link">
                <a
                    href={item.product_url}
                    target="_blank"
                    title="Перейти на страницу товара в отдельной вкладке"
                >
                    <FaExternalLinkAlt  />
                </a>
            </div> */}

            <TableActions
                itemId={item.id}
                eventType={item.type}
                editPath={`/${object}/edit/${item.id}`}
                returnPath={`/${object}`}
                deleteMutation={deleteMutation}
                template="table"          
            />
        </li>     
    )
}