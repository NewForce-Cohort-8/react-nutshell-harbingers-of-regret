import { Outlet, Route, Routes } from "react-router-dom"


export const UserViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1></h1>
                    <div>Your Dashboard</div>

                    <Outlet />
                </>
            }>

                
                
               
            </Route>
        </Routes>
    )
}