import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './page/signup/signup'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
