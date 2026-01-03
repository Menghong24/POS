import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import RootLayout from "./layouts/RootLayout"
import About from "./pages/About"
import Category from "./pages/Category"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout/>}>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/category" element={<Category/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App