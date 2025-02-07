import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAddEventMutation } from "@api/eventsApi";
import { getCurrentDate, getCurrentMonth, getCurrentYear, getTimestampFromDate } from "@functions/datetime";
import Loading from "@components/Loading";
import Header from "@components/Header";
import Form from "./components/Form";

export default function AddEvent() {
    const navigate = useNavigate();
    const location = useLocation();
    const previousPath = location.state?.from || "/"; 
    const [addEvent, {isLoading, isSuccess, isError}] = useAddEventMutation();
    const [formData, setFormData] = useState({
        type: "U",
        day: getCurrentDate(),
        month: getCurrentMonth(),
        year: getCurrentYear(),
        title: "",
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
        await addEvent({
            type: formData.type,
            title: formData.title,
            description: formData.description,
            timestamp: getTimestampFromDate({
                day: formData.day,
                month: formData.month,
                year: formData.year
            })            
        });
        navigate(previousPath);
    };    

    return (
        <>
            <Header title="Create Event" />

            <main className="main">
                <div className="section">
                <div className="section__col col-5">
                    <Form
                        formData={formData}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                    />
                    <Loading isLoading={isLoading} />
                </div>
                </div>
            </main>
        </>
    )
}
