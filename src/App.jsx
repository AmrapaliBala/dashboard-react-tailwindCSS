import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Members from "./pages/Members"
import Home from "./pages/Home"
import Messages from "./pages/Messages";
import Projects from "./pages/Projects";
import Clients from "./pages/Clients";
import WorkPlan from "./pages/WorkPlan";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="members" element={<Members />} />
          <Route path="messages" element={<Messages />} />
          <Route path="projects" element={<Projects />} />
          <Route path="clients" element={<Clients />} />
          <Route path="work" element={<WorkPlan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
