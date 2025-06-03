import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "@reducers/authSlice";
import { authApi } from "@api/authApi";
import { usersApi } from "@api/usersApi";
import { eventsApi } from "@api/eventsApi";
import { tasksApi } from "@api/tasksApi";
import { toolsApi } from "@api/toolsApi";
import { scheduleDaysApi } from "@api/scheduleDaysApi";
import { motherScheduleDaysApi } from "@api/motherScheduleDaysApi";

const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [eventsApi.reducerPath]: eventsApi.reducer,
        [tasksApi.reducerPath]: tasksApi.reducer,
        [toolsApi.reducerPath]: toolsApi.reducer,
        [scheduleDaysApi.reducerPath]: scheduleDaysApi.reducer,
        [motherScheduleDaysApi.reducerPath]: motherScheduleDaysApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authApi.middleware)
            .concat(usersApi.middleware)
            .concat(eventsApi.middleware)
            .concat(tasksApi.middleware)
            .concat(toolsApi.middleware)
            .concat(scheduleDaysApi.middleware)
            .concat(motherScheduleDaysApi.middleware)
});

setupListeners(store.dispatch); // настройка слушателей для RTK Query 

export default store;