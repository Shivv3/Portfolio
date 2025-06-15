import { Home } from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotFound } from "./pages/NotFound"

function App() { 

  return (
    <>
    {/* Defining the brower routes: */}
    <BrowserRouter>
      <Routes>

        {/* If the home page: Route to home */}
        <Route index element = {<Home />}/>

        {/* If any path which is undefined: Go to NotFound page */}
        <Route path = "*" element = {<NotFound />} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
