import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

import RouterRoot from "./routes/root";
import RouterHome from "./routes/Home";
import RouterCart from "./routes/Cart";
import RouterCatalog from "./routes/Catalog";
import RouterProductItem from "./routes/Product";

import "./index.css"

const router = createBrowserRouter([
	{
		path: "/",
		element: <RouterRoot />,
		children: [
			{
				path: "/",
				element: <RouterHome />,
			},
			{
				path: "/catalog/:category?",
				element: <RouterCatalog />,
			},
			{
				path: "/product/:id",
				element: <RouterProductItem />,
			},
			{
				path: "/cart",
				element: <RouterCart />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
