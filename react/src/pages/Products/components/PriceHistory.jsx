import React, { useEffect, useState } from "react";

const priceHistoryBlockHeight = 81;

export default function PriceHistory({ data, shop, hide }) {
    const [ maxPrice, setMaxPrice ] = useState(0);
    const [ firstElement, setFirstElement ] = useState(0);
    const [ middleElements, setMiddleElements ] = useState([]);
    const [ lastElement, setLastElement ] = useState(0);

    useEffect(() => {
        setMaxPrice(Math.max(...data));
        formatDiagram(data);
    }, [])


    const formatDiagram = (data) => {
        if (!data || data.length === 0) {
            return { firstEl: 0, middleArray: [], lastEl: 0 };
        }
        const firstEl = data[0];
        const lastEl = data.length > 1 ? data[data.length - 1] : 0;
        const middleArray = data.length > 2 ? data.slice(1, -1) : [];
        setFirstElement(firstEl);
        setMiddleElements(middleArray);
        setLastElement(lastEl);     
    }

    const calculateHeightPircent = (itemPrice, maxPrice) => {
        const height = itemPrice * 100 / maxPrice;
        return calculateHeightPx(Math.floor(height), priceHistoryBlockHeight);
    }

    const calculateHeightPx = (pircent, blockHeight) => {
        const px = blockHeight / 100 * pircent;
        return px;
    }

  


    console.log(maxPrice)


    if (hide) return false;

    let title = "title not defined";

    if (shop === "ozon") title = "Ozon";
    if (shop === "wb") title = "Wildberries";
    if (shop === "ya") title = "Yandex Market";

    return (
        <div className={`products-table-row__shop`}>
            {/* <h3 className={`products-table-row__shop-title text-${shop}`}>{title}:</h3> */}
            <p className="products-table-row__shop-max-price">
                <span>max: {maxPrice.toLocaleString('ru-RU')}</span>
                <span>р</span>
            </p>
            <ul className={`products-table-row__price-history`}>  
                {firstElement !== 0 && (
                    <li
                        className={`products-table-row__price-history-item bg-${shop}`}
                        style={{ height: calculateHeightPircent(firstElement, maxPrice) }}
                    >
                        <span style={{ letterSpacing: '-1px' }}>{firstElement.toLocaleString('ru-RU') }</span>
                        <span>р</span>
                    </li>
                )}  

                {middleElements?.map((item, index) => (
                    <li
                        key={index}
                        title={item.toLocaleString('ru-RU') + ' р'}
                        className={`bg-${shop}`}
                        style={{
                            height: calculateHeightPircent(item, maxPrice),
                            width: '60px',
                            // padding: '6px',
                            // width: '14px',
                            // flex: 1,
                            textAlign: 'center'
                        }}
                    >
                        {middleElements.length < 16 && (
                            <>
                                <span style={{ letterSpacing: '-1px', fontSize: 11, color: '#fff',  }}>{item.toLocaleString('ru-RU') }</span>
                                <span style={{ letterSpacing: '-1px', fontSize: 10, color: '#fff',  }}> р</span>                            
                            </>
                        )}                        
                    </li>
                ))}

                {lastElement !== 0 && (
                    <li
                        className={`products-table-row__price-history-item bg-${shop}`}
                        style={{ height: calculateHeightPircent(lastElement, maxPrice) }}
                    >
                        <span style={{ letterSpacing: '-1px' }}>{lastElement.toLocaleString('ru-RU') }</span>
                        <span>р</span>
                    </li>
                )}
            </ul> 
        </div>
    )
}