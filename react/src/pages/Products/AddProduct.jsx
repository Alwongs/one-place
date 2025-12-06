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
        title: "",
        image_url: "",
        product_url: "",
        ozon_price_history: "",
        wb_price_history: "",
        ya_price_history: "",   
        dns_price_history: "",               
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
        formData.dns_price_history = mfStringListToJson(formData.dns_price_history);     
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
