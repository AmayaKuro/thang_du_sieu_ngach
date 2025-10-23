import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import KhaiNiem from './pages/KhaiNiem'
import ViDu from './pages/ViDu'
import YNghia from './pages/YNghia'
import SuKien from './pages/SuKien'
import AIReport from './pages/AIReport'
import RickRoll from './pages/RickRoll'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/khai-niem" element={<KhaiNiem />} />
            <Route path="/vi-du" element={<ViDu />} />
            <Route path="/y-nghia" element={<YNghia />} />
            <Route path="/su-kien" element={<SuKien />} />
            <Route path="/ai-report" element={<AIReport />} />
            <Route path="/present-register" element={<RickRoll />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
