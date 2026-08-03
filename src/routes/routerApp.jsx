import AddUser from "../pages/AddUser"
import EditUser from "../pages/EditUser"
import Home from "../pages/Home"


export let routerApp = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/add",
        element: <AddUser/>
    },
    {
        path: "/edit/:id",
        element: <EditUser/>
    }

]