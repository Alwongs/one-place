import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useGetEventQuery, useUpdateEventMutation } from "@api/eventsApi";
import { getTimestampFromDate, getDateFromTimestamp, getMonthFromTimestamp, getFullYearFromTimestamp } from "@functions/datetime";
import Loading from "@components/Loading";
import Header from "@components/Header";
import Form from "./components/Form";

export default function EditEvent() {
    const navigate = useNavigate();
    const location = useLocation();
    const previousUrl = location.state?.from || "/"; 
    const { id } = useParams();
    const { data: event, error, isLoading } = useGetEventQuery(id);
    const [ updateEvent ] = useUpdateEventMutation();
    const [formData, setFormData] = useState({type:"",day:"",month:"",year:"",title:"",description:""});
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };    

    useEffect(() => {
        const newEvent = {
            ...event,
            day: getDateFromTimestamp(event?.timestamp),
            month: getMonthFromTimestamp(event?.timestamp),
            year: getFullYearFromTimestamp(event?.timestamp),
        };

        if (event && newEvent) {
            setFormData(newEvent);
        }
    }, [event]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newFormData = {
            type: formData.type,
            title: formData.title,
            description: formData.description,
            timestamp: getTimestampFromDate({
                day: formData.day,
                month: formData.month,
                year: formData.year
            })
        };
        await updateEvent({ id, ...newFormData });
        navigate(previousUrl);
    };    

    if (isLoading) return <Loading />
    if (error) return <p>Error loading item.</p>;

    return (
        <>
            <Header title="Edit Event" />

            <main className="main">
                <div className="section">
                    <div className="section__col col-5">
                        <Form
                            formData={formData}
                            onChange={handleChange}
                            onSubmit={handleSubmit}
                        />
                    </div>
                </div>
            </main>
        </>
    )
}
