import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "@reducers/authSlice";
import { authApi } from "@api/authApi";
import { usersApi } from "@api/usersApi";
import { eventsApi } from "@api/eventsApi";
import { tasksApi } from "@api/tasksApi";
import { toolsApi } from "@api/toolsApi";
import { ideasApi } from "@api/ideasApi";
import { productsApi } from "@api/productsApi";
import { scheduleDaysApi } from "@api/scheduleDaysApi";
import { motherScheduleDaysApi } from "@api/motherScheduleDaysApi";
import { motherVizitsApi } from "@api/motherVizitsApi";

const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [eventsApi.reducerPath]: eventsApi.reducer,
        [tasksApi.reducerPath]: tasksApi.reducer,
        [toolsApi.reducerPath]: toolsApi.reducer,
        [ideasApi.reducerPath]: ideasApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [scheduleDaysApi.reducerPath]: scheduleDaysApi.reducer,
        [motherScheduleDaysApi.reducerPath]: motherScheduleDaysApi.reducer,
        [motherVizitsApi.reducerPath]: motherVizitsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authApi.middleware)
            .concat(usersApi.middleware)
            .concat(eventsApi.middleware)
            .concat(tasksApi.middleware)
            .concat(toolsApi.middleware)
            .concat(ideasApi.middleware)
            .concat(productsApi.middleware)
            .concat(scheduleDaysApi.middleware)
            .concat(motherScheduleDaysApi.middleware)
            .concat(motherVizitsApi.middleware)
});

setupListeners(store.dispatch); // настройка слушателей для RTK Query 

export default store;