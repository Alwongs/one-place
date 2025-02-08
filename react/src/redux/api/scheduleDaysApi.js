import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "@redux-utils/baseQuery";

export const scheduleDaysApi = createApi({
    reducerPath: "scheduleDaysApi",
    tagTypes: ["ScheduleDay", "ScheduleMonth", "ScheduleDaysInMonthCount", "ScheduleDaysInYearCount"],
    baseQuery,   
    endpoints: (build) => ({

        getScheduleDaysInYearCount: build.query({
            query: ({ start, end }) => `schedule-days-in-year-count/${start}/${end}`,
            providesTags: (result, error, id) => [{ type: "ScheduleDaysInYearCount", id: "COUNT_LIST" }],                
        }),         
        getScheduleDaysInMonthCount: build.query({
            query: (year) => `schedule-days-in-month-count/${year}`,
            providesTags: (result, error, id) => [{ type: "ScheduleDaysInMonthCount", id: "COUNT_LIST" }],                
        }), 

        getScheduleMonth: build.query({
            query: ({ year, month }) => `schedule-month/${year}/${month}`,
            providesTags: (result) => result
            ?   [
                    ...result.schedule_days.map(({ id }) => ({ type: "ScheduleMonth", id })),
                    { type: "ScheduleMonth", id: "LIST"},
                ]
            :   [{ type: "ScheduleMonth", id: "LIST" }],               
        }), 

        addScheduleMonth: build.mutation({
            query: (body) => ({ url: `schedule-add-month`, method: "POST", body }),
            invalidatesTags: [
                {type: "ScheduleMonth", id: "LIST"},
                {type: "ScheduleDaysInMonthCount", id: "COUNT_LIST"},
                {type: "ScheduleDaysInYearCount", id: "COUNT_LIST"}
            ]
        }),   
        
        getScheduleDay: build.query({
            query: (id) => `schedule-day/${id}`,
            providesTags: (result, error, id) => [{ type: "ScheduleDay", id }],                
        }),           
        
        updateScheduleDay: build.mutation({
            query: (body) => ({
                url: `schedule-update-day/${body.id}`,
                method: "PUT",
                body
            }),
            invalidatesTags: (result, error, { id }) => [
                {type: "ScheduleMonth", id: "LIST"},
                {type: "ScheduleDay", id },
            ],
        }),  

        deleteScheduleMonth: build.mutation({
            query: ({ year, month }) => ({
                url: `schedule-delete-month/${year}/${month}`,
                method: "DELETE",
            }),
            invalidatesTags: [
                {type: "ScheduleMonth", id: "LIST"},
                {type: "ScheduleDaysInMonthCount", id: "COUNT_LIST"},
                {type: "ScheduleDaysInYearCount", id: "COUNT_LIST"}
            ]
        }) 
    }),
});

export const {
    useGetScheduleDaysInYearCountQuery,
    useGetScheduleDaysInMonthCountQuery,
    useGetScheduleMonthQuery,
    useAddScheduleMonthMutation,
    useGetScheduleDayQuery,
    useUpdateScheduleDayMutation,
    useDeleteScheduleMonthMutation,
} = scheduleDaysApi;