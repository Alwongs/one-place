import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetScheduleMonthQuery, useDeleteScheduleMonthMutation } from "@api/scheduleDaysApi";
import MonthBtnBlock from "./components/BtnBlockMonth";
import ItemDay from "./components/ItemDay";
import Breadcrumbs from "./components/Breadcrumbs";
import Salary from "./components/Salary";

export default function ShowMonth() {
    const { year, month } = useParams();
    const { data = [], isLoading } = useGetScheduleMonthQuery({ year, month });
    const [ deleteScheduleMonth, { isSuccess, isError } ] = useDeleteScheduleMonthMutation();
    const [ showModal, setShowModal ] = useState(false);
    const handleDeleteMonth = async (e) => {
        await deleteScheduleMonth({ year, month });
    }; 

    const openModalHandler = () => {
        setShowModal(true);
    }

    const closeModalHandler = () => {
        setShowModal(false);
    }

    let workDaysCount = 0;
    let workNightsCount = 0;
    data.schedule_days?.map((day) => {
        if (day.shift_type == 'D') {
            workDaysCount++;
        }
        if (day.shift_type == 'N') {
            workNightsCount++;
        }
    })

    return (
        <>
            <Breadcrumbs
                year={year}
                month={month}
            />

            <MonthBtnBlock
                isContent={data.schedule_days?.length !== 0}
                onClick={handleDeleteMonth}
                backPath={`/schedule/${year}`}
                year={year}
                month={month}
                openModalHandler={openModalHandler}
            />           

            <main className="main">  
                <section className="section">
                    <div className="section__col col-6">

                        {data.schedule_days?.length !== 0 && (
                            <ul className="table">
                                {data.schedule_days?.map((day) => (
                                    <ItemDay key={day.id} day={day} />
                                ))}
                            </ul>
                        )}
                    </div>
                </section>
            </main> 

            {showModal && (
                <Salary
                    year={year}
                    month={month}
                    workDaysCount={workDaysCount}
                    workNightsCount={workNightsCount}
                    closeModalHandler={closeModalHandler}
                />
            )}

        </>      
    )
}