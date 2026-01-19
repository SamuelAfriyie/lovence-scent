import { routes } from "./config/router/route"

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { getContext, Provider } from "./lib/provider/query-provider";


const router = createBrowserRouter(routes);

function App() {
  const rxQueryClient = getContext().queryClient;
  return (
    <Provider queryClient={rxQueryClient}>
      <RouterProvider router={router} />
    </Provider>
  )
}
export default App
