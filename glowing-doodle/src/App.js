import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage"
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Social from "./components/Social";
import '../src/css/app.css'

function App() {
  return (
    <BrowserRouter>
       <div className="main">
         <Routes>
           <Route path="/register" element={<RegisterPage />}/>
           <Route path="/login" element={<LoginPage />}/>
        </Routes>
       <Social/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
