import { RouterProvider } from "react-router-dom";
import Router from "./Router/Routes"
import {QueryClientProvider, QueryClient} from "react-query"
import { Toaster} from 'react-hot-toast';


import './App.css';

const queryClient = new QueryClient()


function App() {
  return (
    <>
    <Toaster />
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={Router}>
      
    </RouterProvider>
    </QueryClientProvider>
    </>
  );
}

export default App;
