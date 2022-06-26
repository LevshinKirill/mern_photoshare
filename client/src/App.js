import { ToastContainer } from 'react-toastify'
import './App.sass'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useState } from 'react'

const App = () => {
  const [testString, setTestString] = useState('')

  const fetchTestString = async () => {
    const response = await fetch(process.env.REACT_APP_SERVER_URI)
    const data = await response.json()
    setTestString(data.message)
  }

  useEffect(()=> {
    fetchTestString()
  }, [])

  return (
    <div className='App' >
      <ToastContainer />
      <h1>{ testString }</h1>
    </div>
  )
}

export default App
