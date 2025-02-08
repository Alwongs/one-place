import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAddScheduleMonthMutation } from "@api/scheduleDaysApi";
import { getCurrentYear, getCurrentMonth } from "@functions/datetime";
import Loading from "@components/Loading";
import Form from "./components/FormMonth";
import Breadcrumbs from "./components/Breadcrumbs";

export default function AddDays() {
    const navigate = useNavigate();
    const [addScheduleMonth, {isLoading, isSuccess, isError}] = useAddScheduleMonthMutation();
    const { year, month } = useParams();
    const [formData, setFormData] = useState({
        year,
        month,
        first_day_shift_index: 0
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
        await addScheduleMonth(formData);
        navigate(`/schedule/${formData.year}/${formData.month}`);
    };  

    return (
        <>
            <Breadcrumbs
                year={year}
                month={month}
                add={true}
            />

            <main className="main">
                <section className="section">
                    <div className="section__col col-6">
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