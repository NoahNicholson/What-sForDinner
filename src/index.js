import { createRoot } from "react-dom/client"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { Dinner } from "./components/Dinner"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <Dinner />
  </BrowserRouter>

);

