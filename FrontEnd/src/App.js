
import './App.css';
import LogIn from './LogIn/LogIn';
import AddStudent from './Component/StudentComp';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (

  <BrowserRouter>
  <Routes>
    <Route path='/' element={<LogIn/>} />
  </Routes>

  <Routes>
    <Route path='/add-Student' element={<AddStudent Title="Add Student" LabelName="add Name" LabelEmail="add Email" ExitButton="Submit" variant="outlined"/>} />
  </Routes>

  <Routes>
    <Route path='/Read-Student' element={<AddStudent Title="Read Student" LabelName="Name" LabelEmail="Email" ExitButton="Exit"  disabled="true"/>} />
  </Routes>

  <Routes>
    <Route path='/Update-Student' element={<AddStudent Title="Update Student" LabelName="Update Name" LabelEmail="Update Email" ExitButton="Update"  variant="outlined"/>} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
