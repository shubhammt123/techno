import { RouterProvider } from 'react-router-dom'
import Router from './router/Router'
import { Provider } from 'react-redux'
import store from './redux/store/store'

function App() {


  return (
    <div className='w-screen h-screen m-0 p-0 flex justify-center items-center'>
      <Provider store={store}>
      <RouterProvider router={Router} />
      </Provider>
    </div>
  )
}

export default App
