import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Password_valid from "./password-valid/password-valid.tsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Password_valid/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
