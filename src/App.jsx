import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Userdetails from './component/Userdetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{display: "flex", justifyContent:"center",}}>Redux Toolkit</h1>
      <Navbar />
      <Userdetails />
    </>
  )
}

export default App
