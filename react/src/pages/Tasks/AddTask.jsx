import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAddTaskMutation } from "@api/tasksApi";
import Loading from "@components/Loading";
import Header from "@components/Header";
import Form from "./components/Form";

export default function AddTask() {
    const navigate = useNavigate();
    const location = useLocation();
    const previousPath = location.state?.from || "/"; 
    const [createItem, { isLoading, isSuccess, isError }] = useAddTaskMutation();
    const [formData, setFormData] = useState({ title: "", description: "", rate: "", position: "", status: "A" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await createItem(formData);
        navigate(previousPath);
    };

    return (
        <>
            <Header title="Create Task" />

            <main className="main">
                <div className="main__col col-8">
                    <Form
                        formData={formData}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                    />
                    <Loading isLoading={isLoading} />
                </div>
            </main>
        </>         
    )
}