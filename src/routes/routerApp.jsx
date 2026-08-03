import AddUser from "../pages/AddUser"
import Home from "../pages/Home"


export let routerApp = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/add",
        element: <AddUser/>
    }

]