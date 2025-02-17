import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useGetTaskQuery, useUpdateTaskMutation } from "@api/tasksApi";
import Header from "@components/Header";
import Form from "./components/Form";

export default function EditTask() {
    const navigate = useNavigate();
    const location = useLocation();
    const previousUrl = location.state?.from || "/"; 
    const { id } = useParams();
    const { data: task, error, isLoading } = useGetTaskQuery(id);
    const [updateTask, { isSuccess, isError }] = useUpdateTaskMutation();
    
    const [formData, setFormData] = useState({ title: "", description: "", rate: "", position: "", status: "" });
  
    useEffect(() => {
        if (task) {
            setFormData(task);
        }
    }, [task]);
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        await updateTask({ id, ...formData });
        navigate(previousUrl);
    };
  
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading item.</p>;

    return (
        <div className="container">
            <Header title={task.title} />

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