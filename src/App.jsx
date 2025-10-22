import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import KhaiNiem from './pages/KhaiNiem'
import ViDu from './pages/ViDu'
import YNghia from './pages/YNghia'
import SuKien from './pages/SuKien'
import AIReport from './pages/AIReport'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<KhaiNiem />} />
            <Route path="/khai-niem" element={<KhaiNiem />} />
            <Route path="/vi-du" element={<ViDu />} />
            <Route path="/y-nghia" element={<YNghia />} />
            <Route path="/su-kien" element={<SuKien />} />
            <Route path="/ai-report" element={<AIReport />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
