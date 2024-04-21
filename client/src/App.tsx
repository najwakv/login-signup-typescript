import { BrowserRouter,Routes, Route } from "react-router-dom"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Otp from "./pages/Otp";

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/otp" element={<Otp/>}></Route>
    </Routes>
    </BrowserRouter>
      
  );
}

export default App;