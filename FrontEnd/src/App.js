
import './App.css';
//import ReactLogo from './ReactLogo';
import LogIn from './LogIn/LogIn';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
  //  <ReactLogo/>
  // <LogIn/>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<LogIn/>} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
