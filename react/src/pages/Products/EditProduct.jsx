import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useGetProductQuery, useUpdateProductMutation } from "@api/productsApi";
import Header from "@components/Header";
import Form from "./components/Form";

export default function EditProduct() {
    const navigate = useNavigate();
    const location = useLocation();
    const previousUrl = location.state?.from || "/"; 
    const { id } = useParams();
    const { data: product, error, isLoading } = useGetProductQuery(id);
    const [updateTool, { isSuccess, isError }] = useUpdateProductMutation();
    const [formData, setFormData] = useState({
        title: "",
        image_url: "",
        product_url: "",
        ozon_price_history: "",
        wb_price_history: "",
        ya_price_history: "",                
        rate: "5",
        position: "0",
        status: "A",
        description: ""
    });
  
    useEffect(() => {
        if (product) {
            const ozonPricesString = mfJsonToString(product.ozon_price_history)
            const wbPricesString = mfJsonToString(product.wb_price_history)
            const yaPricesString = mfJsonToString(product.ya_price_history)
            const formProduct = {
                ...product,
                ozon_price_history: ozonPricesString,
                wb_price_history: wbPricesString,
                ya_price_history: yaPricesString,
            }
            setFormData(formProduct);
        }
    }, [product]);

    const mfJsonToString = (jsonData) => {
        let pricesArray;
        try {
            pricesArray = JSON.parse(jsonData);
        } catch (error) {
            console.error('Ошибка парсинга JSON:', error);
            pricesArray = [];
        }
        const formattedPrices = pricesArray.map(price => price.toString());
        return formattedPrices.join(', ');
    }
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        formData.ozon_price_history = mfStringListToJson(formData.ozon_price_history);    
        formData.wb_price_history = mfStringListToJson(formData.wb_price_history);  
        formData.ya_price_history = mfStringListToJson(formData.ya_price_history);         

        await updateTool({ id, ...formData });
        navigate(previousUrl);
    };

    const mfStringListToJson = (stringList) => {
        const array = stringList.split(',').map(item => item.trim());
        const numericArray = array.map(item => Number(item));
        return JSON.stringify(numericArray);        
    }
  
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading item.</p>;

    return (
        <div className="container">
            <Header title={product.title} />

            <main className="main">
                <div className="section">
                    <div className="section__col col-8">
                        <Form
                            formData={formData}
                            onChange={handleChange}
                            onSubmit={handleSubmit}
                        />
                    </div>
                </div>
            </main>
        </div>         
    )
}
