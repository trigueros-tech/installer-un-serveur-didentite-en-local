import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import SigninCallback from "./components/SigninCallback"
import SignoutCallback from "./components/SignoutCallback"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/signin" element={<SigninCallback />} />
        <Route path="/auth/signout" element={<SignoutCallback />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
