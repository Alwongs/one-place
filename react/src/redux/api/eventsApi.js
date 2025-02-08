import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "@redux-utils/baseQuery";

export const eventsApi = createApi({
    reducerPath: "eventsApi",
    tagTypes: ["Events", "Event", "Reminder"],
    baseQuery,   
    endpoints: (build) => ({

        getReminder: build.query({
            query: () => `reminder`,
            providesTags: (result) => result ? [...result.overdue.map(({ id }) => ({ type: "Reminder", id })), { type: "Reminder", id: "LIST"}] : [{ type: "Reminder", id: "LIST" }],         
        }),

        getEvents: build.query({
            query: () => `events`,
            providesTags: (result) => result ? [...result.events.map(({ id }) => ({ type: "Events", id })), { type: "Events", id: "LIST"}] : [{ type: "Events", id: "LIST" }],      
        }),
        getEvent: build.query({
            query: (id) => `events/${id}`,
            providesTags: (result, error, id) => [{ type: "Event", id }],                
        }),

        addEvent: build.mutation({
            query: (body) => ({ url: `events`, method: "POST", body }),
            invalidatesTags: [{type: "Events", id: "LIST"}, { type: "Reminder", id: "LIST" }]
        }),

        updateEvent: build.mutation({
            query: (body) => ({ url: `events/${body.id}`, method: "PUT", body }),
            invalidatesTags: (result, error, { id }) => [
                { type: "Event", id },
                { type: "Events", id: "LIST" },
                { type: "Reminder", id: "LIST" }
            ],
        }),

        postponeEvent: build.mutation({
            query: (id) => ({ url: `reminder/postpone/${id}`, method: "PUT" }),
            invalidatesTags: (result, error, { id }) => [{ type: "Event", id }, {type: "Events", id: "LIST"}, { type: "Reminder", id: "LIST" }],
        }),        

        deleteEvent: build.mutation({
            query: (id) => ({ url: `events/${id}`, method: "DELETE" }),
            invalidatesTags: [{type: "Events", id: "LIST"}, { type: "Reminder", id: "LIST" }]
        })      
    }),

});

export const {
    useGetReminderQuery,
    useGetEventsQuery,
    useGetEventQuery,
    useUpdateEventMutation,
    usePostponeEventMutation,
    useDeleteEventMutation,
    useAddEventMutation,
} = eventsApi;

export default eventsApi;