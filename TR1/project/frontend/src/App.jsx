import { RouterProvider } from "react-router-dom"
import Router from "./router/Router"

function App() {
 

  return (
    <div className="w-screen h-screen m-0 p-0 flex justify-center items-center">
      <RouterProvider router={Router} />
    </div>
  )
}

export default App
