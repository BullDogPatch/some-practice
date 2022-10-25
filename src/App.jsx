import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Articles from './components/Articles'
import ArticleById from './components/ArticleById'
import ArticlesByTopic from './components/ArticlesByTopic'
import Users from './components/Users'
import './App.css'

function App() {
  return (
    <div className="container">
      <Header />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/:topic" element={<ArticlesByTopic />} />
          <Route path="/articles/:article_id" element={<ArticleById />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  )
}

export default App
