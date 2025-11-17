import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAddProductMutation } from "@api/productsApi";
import Loading from "@components/Loading";
import Header from "@components/Header";
import Form from "./components/Form";

export default function AddProduct() {
    const navigate = useNavigate();
    const location = useLocation();
    const previousPath = location.state?.from || "/"; 
    const [ createItem, { isLoading, isSuccess, isError } ] = useAddProductMutation();
    const [ formData, setFormData] = useState({
        title: "Планшет",
        image_url: "https://ir-3.ozone.ru/s3/multimedia-1-1/wc1000/7214890033.jpg",
        product_url: "https://www.ozon.ru/product/chehol-s-prozrachnoy-zadney-kryshkoy-dlya-samsung-galaxy-tab-s9-plus-12-4-1773291933/",
        ozon_price_history: "14255",
        wb_price_history: "11256",
        ya_price_history: "15500",                
        rate: "5",
        position: "0",
        status: "A",
        description: ""
    });

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
        await createItem(formData);
        navigate(previousPath);
    };

    const mfStringListToJson = (stringList) => {
        const array = stringList.split(',').map(item => item.trim());
        const numericArray = array.map(item => Number(item));
        return JSON.stringify(numericArray);        
    }

    return (
        <>
            <Header title="Create product" />

            <main className="main">
                <section className="section">
                    <div className="section__col col-8">
                        <Form
                            formData={formData}
                            onChange={handleChange}
                            onSubmit={handleSubmit}
                        />
                        <Loading isLoading={isLoading} />
                    </div>
                </section>
            </main>
        </>         
    )
}
