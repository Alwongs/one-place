import React, { useEffect, useState } from "react";
import { useGetProductsQuery, useDeleteProductMutation } from "@api/productsApi";
import Header from "./components/Header";
import Loading from "@components/Loading";
import TableItem from "./components/TableItem";
import AddBtnBlock from "./components/AddBtnBlock";

export default function Tools() {
    const { data = [], isLoading, error } = useGetProductsQuery();
    const [ shopActive, setShopActive ] = useState('ozon');

    const selectShopHandle = (shop) => {
        setShopActive(shop);
    }

    return (
        <div className="container">
            {/* <Header title="Tools" /> */}
            <main className="main" >
                <div className="section">
                    <div className="section__col col-auto" >
                        <AddBtnBlock onSelectShop={selectShopHandle} />
                        <Loading isLoading={isLoading} />
                        <ul>
                            {data.products?.map((product) => (
                                <TableItem
                                    key={product.id}
                                    item={product}
                                    object="products"
                                    deleteMutation={useDeleteProductMutation}
                                    shopActive={shopActive}
                                />                            
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </div>        
    )
}
