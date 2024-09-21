import { RouterProvider } from "react-router-dom"
import Router from "./router/Router"
import { Provider } from "react-redux"
import store from "./redux/store"

function App() {
 

  return (
    <Provider store={store}>
    <div className="w-screen h-screen m-0 p-0 flex justify-center items-center">
      <RouterProvider router={Router} />
    </div>
    </Provider>
  )
}

export default App
