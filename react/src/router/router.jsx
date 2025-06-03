import { createBrowserRouter } from "react-router-dom";
import  { 
    AppLayout, GuestLayout, Error, Login, Register,
    Users, User, AddUser, EditUser,
    Events, Event, AddEvent, EditEvent,
    Tasks, Task, AddTask, EditTask,
    Tools, AddTool, EditTool, Tool,
    Schedule, AddDays, EditDay, ShowYear, ShowMonth, ShowDay,
    MotherSchedule, MotherShowYear, MotherShowMonth, MotherShowDay,
    Dashboard
}  from "@router";

export default  createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            { path: "/", element: <Dashboard /> },

            { path: "users", element: <Users /> },
            { path: "users/:id", element: <User /> },
            { path: "users/create", element: <AddUser /> },
            { path: "users/edit/:id", element: <EditUser /> },

            { path: "events", element: <Events /> },
            { path: "events/:id", element: <Event /> },
            { path: "events/create", element: <AddEvent /> },
            { path: "events/edit/:id", element: <EditEvent /> },

            { path: "tasks", element: <Tasks /> },
            { path: "tasks/:id", element: <Task /> },
            { path: "tasks/create", element: <AddTask /> },
            { path: "tasks/edit/:id", element: <EditTask /> },

            { path: "tools", element: <Tools /> },
            { path: "tools/:id", element: <Tool /> },
            { path: "tools/create", element: <AddTool /> },
            { path: "tools/edit/:id", element: <EditTool /> },            

            { path: "/schedule", element: <Schedule /> },
            { path: "/schedule/:year", element: <ShowYear /> },
            { path: "/schedule/:year/:month", element: <ShowMonth /> },
            { path: "/schedule/:year/:month/:day/:id", element: <ShowDay /> },
            { path: "/schedule/:year/:month/create", element: <AddDays /> },
            { path: "/schedule/:year/:month/:day/:id/edit/", element: <EditDay /> },

            { path: "/mother-schedule", element: <MotherSchedule /> },
            { path: "/mother-schedule/:year", element: <MotherShowYear /> },
            { path: "/mother-schedule/:year/:month", element: <MotherShowMonth /> },
            { path: "/mother-schedule/:year/:month/:day/:id", element: <MotherShowDay /> },
        ]
    }, 
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
        ]
    },       
]);
