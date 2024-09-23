import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import { Provider } from 'react-redux'
import store from './redux/store/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Provider store={store}>
      <Navbar />
      <Dashboard />
      </Provider>
    </div>
  )
}

export default App
