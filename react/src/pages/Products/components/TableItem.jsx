import TableActions from "./TableActions";
import TableItemLink from "./TableItemLink";
import TableDate from "@components/table/TableItemDate";
import { FaExternalLinkAlt  } from 'react-icons/fa'; 
import PriceHistory from "./PriceHistory";

export default function TableItem({ item, object, deleteMutation }) {  

    const ozonPiceHistory = JSON.parse(item.ozon_price_history);
    const wbPiceHistory = JSON.parse(item.wb_price_history);
    const yaPiceHistory = JSON.parse(item.ya_price_history);
    
    return (
        <li className="products-table-row">

            <div className="products-table-row__image">
                <img src={ item.image_url } alt="" />
            </div>            
            
            <div className="products-table-row__title-and-price-block" >
                <TableItemLink
                    title={item.title}
                    path={`/${object}/${item.id}`}
                />
                <div className="products-table-row__price-history-block">
                    <PriceHistory data={ozonPiceHistory} shop="ozon" />
                    <PriceHistory data={wbPiceHistory} shop="wb" />
                    <PriceHistory data={yaPiceHistory} shop="ya" />
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