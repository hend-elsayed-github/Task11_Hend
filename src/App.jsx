
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Left from './Components/Left/Left';
import Right from './Components/Right/Right';
import Page1 from './Components/Page1/Page1';
import Page2 from './Components/Page2/Page2';
import Page3 from './Components/Page3/Page3';
import Page4 from './Components/Page4/Page4';
import Page5 from './Components/Page5/Page5';
import Navigation from './Components/Navigation/Navigation';
function App() {

  return (
    <div id='maindiv'>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navigation/>}>
          <Route path="Page1" element={<Page1/>}></Route>
          <Route path="Page2" element={<Page2/>}></Route>
          <Route path="Page3" element={<Page3/>}></Route>
          <Route path="Page4" element={<Page4/>}></Route>
          <Route path="Page5" element={<Page5/>}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
