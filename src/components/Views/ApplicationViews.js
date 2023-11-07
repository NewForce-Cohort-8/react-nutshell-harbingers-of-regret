import { Route, Routes, Outlet } from "react-router-dom"
import { MessageContainer } from "../Messages/MessageContainer"
import { MessageList } from "../Messages/MessageList"
import { MessageForm } from "../Messages/MessageForm"
import { MessageEdit } from "../Messages/MessageEdit"
// import { MessageDelete } from "../Messages/MessageDelete"




export const ApplicationViews = () => {
	return ( 
	<Routes>
<Route path="/" element={
<>
	<h2> Welcome to NutShell</h2>
	<div>We got it all</div>
	<Outlet />
	</>
	}>
		<Route path="messages" element={<MessageContainer/>} />
		<Route path="/messages/message/list" element={ <MessageList/> } />
		{/* <Route path="/event/:eventId/edit" element={ <MessageForm/> } /> */}
		<Route path="/messages/:messageId/edit" element={ <MessageEdit /> } />
		{/* <Route path="/messages/:messageId/delete" element={ <MessageDelete /> } /> */}

</Route>
	</Routes>
	
	)
}