import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useGetIdeaQuery, useUpdateIdeaMutation } from "@api/ideasApi";
import Header from "@components/Header";
import Form from "./components/Form";

export default function EditIdea() {
    const navigate = useNavigate();
    const location = useLocation();
    const previousUrl = location.state?.from || "/"; 
    const { id } = useParams();
    const { data: idea, error, isLoading } = useGetIdeaQuery(id);
    const [updateIdea, { isSuccess, isError }] = useUpdateIdeaMutation();
    
    const [formData, setFormData] = useState({ title: "", description: "", position: "" });
  
    useEffect(() => {
        if (idea) {
            setFormData(idea);
        }
    }, [idea]);
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateIdea({ id, ...formData });
        navigate(previousUrl);
    };
  
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading item.</p>;

    return (
        <div className="container">
            <Header title={idea.title} />

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