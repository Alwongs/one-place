import { useGetProductsQuery, useDeleteProductMutation } from "@api/productsApi";
import Header from "@components/Header";
import Loading from "@components/Loading";
import TableItem from "./components/TableItem";
import AddBtnBlock from "./components/AddBtnBlock";

export default function Tools() {
    const { data = [], isLoading, error } = useGetProductsQuery();

    return (
        <div className="container">
            <Header title="Tools" />
            <main className="main" >
                <div className="section">
                    <div className="section__col col-auto" >
                        <AddBtnBlock />
                        <Loading isLoading={isLoading} />
                        <ul>
                            {data.products?.map((product) => (
                                <TableItem
                                    key={product.id}
                                    item={product}
                                    object="products"
                                    deleteMutation={useDeleteProductMutation}
                                />                            
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </div>        
    )
}
