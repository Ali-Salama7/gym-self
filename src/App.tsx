import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Classes from "./pages/Classes"
import Trainers from "./pages/Trainers"
import About from "./pages/About"
import Content from "./pages/Content"

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/classes" element={<Classes/>}/>
            <Route path="/trainers" element={<Trainers/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/content" element={<Content/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  )
}

export default App