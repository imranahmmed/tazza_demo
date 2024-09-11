import React from 'react'

import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route
} from "react-router-dom";
import RootLayout from './components/layouts/RootLayout';
import Home from './components/pages/home/Home';
import Shop from './components/pages/Shop';

let routers = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />}></Route>
			<Route path='/products' element={<Shop />}></Route>
		</Route>
	)
);

function App() {
	return (
		<RouterProvider router={routers} />
	);
}

export default App;
