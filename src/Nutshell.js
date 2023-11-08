import { Route, Routes } from "react-router-dom";
import "./Nutshell.css";
import { Login } from "./Login";
import { Register } from "./auth/Register";
import { ApplicationViews } from "./views/ApplicationViews";
import { Authorized } from "./views/Authorized";

function Nutshell() {
	return (
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
	


			<Route
				path='*'
				element={
					<Authorized>
						<>
							<ApplicationViews />
						</>
					</Authorized>
				}
			/>
		</Routes>
	);
}

export default Nutshell;