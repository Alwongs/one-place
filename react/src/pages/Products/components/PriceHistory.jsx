

export default function PriceHistory({ data, shop }) {

    let title = "title not defined";

    if (shop === "ozon") title = "Ozon";
    if (shop === "wb") title = "Wildberries";
    if (shop === "ya") title = "Yandex Market";

    return (
        <div className={`products-table-row__shop ${shop}-style`}>
            <h3 className="products-table-row__shop-title">{title}:</h3>
            <ul className={`products-table-row__price-history`}>                
                {data?.map((item, index) => (
                    <li
                        key={index}
                        className={`products-table-row__price-history-item ${shop}-style`}
                    >
                        <span style={{ letterSpacing: '-1px' }}>{item.toLocaleString('ru-RU') }</span>
                        <span>р</span>
                    </li>
                ))}
            </ul> 
        </div>
    )
}