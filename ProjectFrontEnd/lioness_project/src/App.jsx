import './App.css'
import { Outlet } from 'react-router-dom'
import BasicExample from './components/navBar'

function App() {
 
  return (
    <>
      <BasicExample />
      <Outlet/>
    </>
  )
}

export default App
