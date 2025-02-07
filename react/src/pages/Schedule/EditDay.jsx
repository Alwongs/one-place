import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useGetScheduleDayQuery, useUpdateScheduleDayMutation } from "@api/scheduleDaysApi";
import Form from "./components/FormDay";
import Breadcrumbs from "./components/Breadcrumbs";

export default function EditDay() {
    const navigate = useNavigate();
    const location = useLocation();
    const previousUrl = location.state?.from || "/"; 
    const { id, year, month, day } = useParams();
    const { data: scheduleDay, error, isLoading } = useGetScheduleDayQuery(id);
    const [ updateScheduleDay, { isSuccess, isError } ] = useUpdateScheduleDayMutation();
    const [formData, setFormData] = useState({ shift_type: "", description: "" });
  
    useEffect(() => {
        if (scheduleDay) {
            setFormData(scheduleDay);
        }
    }, [scheduleDay]);
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateScheduleDay({ id, ...formData });
        navigate(previousUrl);
    };
  
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading item.</p>;

    return (
        <div className="container">

            <Breadcrumbs
                year={scheduleDay.year}
                month={scheduleDay.month}
                day={scheduleDay.day}
                edit={true}
            />

            <main className="main">

                <section className="section">
                    <div className="section__col col-6">
                        <Form
                            formData={formData}
                            onChange={handleChange}
                            onSubmit={handleSubmit}
                        />
                    </div>
                </section>
            </main>
        </div>         
    )
}