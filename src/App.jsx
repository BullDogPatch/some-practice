import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Footer />
    </div>
  )
}

export default App
