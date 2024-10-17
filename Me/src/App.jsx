import { Routes, Route } from 'react-router-dom'
import Home from './Page/Mainindex'
import About from './Page/About'
import Performance from './Page/Performance'
import './App.css'
function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/performance" element={<Performance />} />

      </Routes>
    </div>
  )
}

export default App
