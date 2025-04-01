import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetScheduleMonthQuery, useDeleteScheduleMonthMutation } from "@api/scheduleDaysApi";
import MonthBtnBlock from "./components/BtnBlockMonth";
import ItemDay from "./components/ItemDay";
import Breadcrumbs from "./components/Breadcrumbs";

export default function ShowMonth() {
    const { year, month } = useParams();
    const { data = [], isLoading } = useGetScheduleMonthQuery({ year, month });
    const [ deleteScheduleMonth, { isSuccess, isError } ] = useDeleteScheduleMonthMutation();
    const handleDeleteMonth = async (e) => {
        e.preventDefault();
        await deleteScheduleMonth({ year, month });
    }; 

    // useEffect(() => {
    //     let workDaysCount = 0;
    //     let workNightCount = 0;
    
    //     data.schedule_days?.map((day) => {
    //         console.log(day);
    //     })
    // }, [data]);

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
            />           



            <main className="main">  
                <section className="section">
                    <div className="section__col col-6">
                        <div className="schedule-month-info">
                            <p class="schedule-month-info__days"><span>Days:</span> <b>{ workDaysCount }</b></p>   
                            <p class="schedule-month-info__nights"><span>Nights:</span> <b>{ workNightsCount }</b></p> 
                            <p class="schedule-month-info__hours">
                                <span>Hours:</span> <b>{ (workNightsCount + workDaysCount) * 11}</b>
                            </p> 
                            <p class="schedule-month-info__hours">
                                <span>Оклад:</span> <b>{ (workNightsCount + workDaysCount) * 11 * 240 / 1000}</b> <small>тыс.р.</small>
                            </p> 
                            <p class="schedule-month-info__hours">
                                <span>Ночные:</span> <b>{ workNightsCount * 11 * 240 * 0.4 / 1000 }</b> <small>тыс.р.</small>
                            </p>                             
                        </div>
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
        </>      
    )
}