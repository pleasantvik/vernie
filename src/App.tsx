import { Routes, Route } from "react-router-dom";
import Signin from "./page/Signin";
import Signup from "./page/Signup";
import Dashboard from "./page/Dashboard";
import Profile from "./page/Profile";
import ActivateAccount from "./page/ActivateAccount";
import React from "react";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Signup />} />
			<Route path="/signin" element={<Signin />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/profile" element={<Profile />} />
			<Route element={<Signup />} />
			<Route path="/verify" element={<ActivateAccount />} />
		</Routes>
	);
}

export default App;
