import "./sass/app.scss"; 
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import store from "./redux/store";
import router from "./router/router.jsx";

createRoot(document.getElementById("root")).render(
    // <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    // </StrictMode>
);
