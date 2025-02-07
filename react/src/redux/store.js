import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "@reducers/authSlice";
import eventReducer from "@reducers/eventSlice";
import { authApi } from "@api/authApi";
import { usersApi } from "@api/usersApi";
import { eventsApi } from "@api/eventsApi";
import { carsApi } from "@api/carsApi";
import { tasksApi } from "@api/tasksApi";
import { scheduleDaysApi } from "@api/scheduleDaysApi";

const store = configureStore({
    reducer: {
        auth: authReducer,
        // event: eventReducer,
        [authApi.reducerPath]: authApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [eventsApi.reducerPath]: eventsApi.reducer,
        [carsApi.reducerPath]: carsApi.reducer,
        [tasksApi.reducerPath]: tasksApi.reducer,
        [scheduleDaysApi.reducerPath]: scheduleDaysApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authApi.middleware)
            .concat(usersApi.middleware)
            .concat(eventsApi.middleware)
            .concat(carsApi.middleware)
            .concat(tasksApi.middleware)
            .concat(scheduleDaysApi.middleware)
});

setupListeners(store.dispatch); // настройка слушателей для RTK Query 

export default store;