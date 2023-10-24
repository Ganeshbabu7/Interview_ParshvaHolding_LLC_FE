import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components :
import AddDocket from "./Components/AddDocket";
import Dashboard from "./Components/Dashboard";

// Api Url :
export const apiUrl = process.env.REACT_APP_HTTP_SERVER;

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="addDocket" element={<AddDocket />} />
          <Route path="*" element={<Navigate to="dashboard" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
