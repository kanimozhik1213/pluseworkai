import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import CardDemo from './components/ui/carddemo'
import NavigationMenuDemo from './components/ui/nave'
import Landingpage from './components/ui/Landingpage'

function App() {
  

  return (
    <>
    <div className="flex flex-col items-center gap-2">
        <NavigationMenuDemo />
      </div>
    <div className="flex min-h-screen items-center justify-center">
      <CardDemo />
      </div>
      <Landingpage />
    </>
  )
}

export default App