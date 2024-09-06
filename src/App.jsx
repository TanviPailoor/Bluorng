import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Parent from "./pages/parent/Parent";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Product from "./pages/product/Product";
const App = () => {
	return (
		<>
			<section>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Parent />}>
							<Route index element={<Home />} />
							{/* <Route path="/register" element={<Register />} /> */}
							<Route path="/product" element={<Product />} />
							<Route path="/cart" element={<Cart />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</section>
		</>
	);
};

export default App;
