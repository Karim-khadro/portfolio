
import MainPage from "./MainPage";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

export default function App() {
  return (
    // Leaving the possibilty to add more pages 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

