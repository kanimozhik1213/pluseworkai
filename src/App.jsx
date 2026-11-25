import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import CardDemo from './components/ui/carddemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CardDemo />
    </>
  )
}

export default App