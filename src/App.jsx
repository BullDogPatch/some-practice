import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Articles from './components/Articles'
import ArticleById from './components/ArticleById'
import ArticlesByTopic from './components/ArticlesByTopic'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/:topic" element={<ArticlesByTopic />} />
          <Route path="/articles/:article_id" element={<ArticleById />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  )
}

export default App
