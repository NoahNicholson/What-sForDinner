import { Outlet, Route, Routes } from "react-router-dom"
//import { TicketList } from "../tickets/TicketList"

export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>What's For Dinner?</h1>
                    <div></div>

                    <Outlet />
                </>
         }>

                {/* <Route path="tickets" element={ <TicketList /> } /> */}
            </Route>
        </Routes>
    )
}