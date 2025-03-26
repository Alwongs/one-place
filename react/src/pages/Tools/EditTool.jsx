import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useGetToolQuery, useUpdateToolMutation } from "@api/toolsApi";
import Header from "@components/Header";
import Form from "./components/Form";

export default function EditTool() {
    const navigate = useNavigate();
    const location = useLocation();
    const previousUrl = location.state?.from || "/"; 
    const { id } = useParams();
    const { data: tool, error, isLoading } = useGetToolQuery(id);
    const [updateTool, { isSuccess, isError }] = useUpdateToolMutation();
    
    const [formData, setFormData] = useState({ title: "", description: "", qty: "", rate: "", position: "", status: "" });
  
    useEffect(() => {
        if (tool) {
            setFormData(tool);
        }
    }, [tool]);
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData)
        await updateTool({ id, ...formData });
        navigate(previousUrl);
    };
  
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading item.</p>;

    return (
        <div className="container">
            <Header title={tool.title} />

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