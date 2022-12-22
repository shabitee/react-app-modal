
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return(
    <div>
    <Header/>
    <BrowserRouter>
  <Routes>
     <Route exact path="/" element={<Home/>}/>

    <Route exact path="/about" element={<About/>}/>
  </Routes>
    </BrowserRouter>
  </div>

  );
  
}

export default App;
