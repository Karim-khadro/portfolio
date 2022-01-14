
import MainPage from "./MainPage";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
export default function App() {
  
  

return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<MainPage/>} />
    </Routes>
  </BrowserRouter>
);
}

