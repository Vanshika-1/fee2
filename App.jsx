import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Download from './components/Download'
import Features from './components/Features'
import Choose from './components/Choose'
import Screenshot from './components/Screenshot'
import Video from './components/Video'
import Update from './components/Update'
import Support from './components/Support'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Download/>
    <Features/>
    <Choose/>
    <Screenshot/>
    <Video/>
    <Update/>
    <Support/>
    <Footer/>
      
    </>
  )
}

export default App
