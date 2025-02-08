import { createSlice } from '@reduxjs/toolkit';
import eventsApi from '@api/eventsApi';
import { tsToDateManage } from "@functions/events";

const eventSlice = createSlice({
    name: 'eventSlice',
    initialState: {
        events: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            eventsApi.endpoints.getEvents.matchFulfilled,
            (state, action) => {
                const managed = tsToDateManage(action.payload.events);
                state.events = managed;
            }
        );
    },
});

export const { actions, reducer } = eventSlice;

export default eventSlice.reducer;