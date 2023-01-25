import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import User from "./components/user/User";
import UsersPage from "./pages/usersPage/UsersPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<UsersPage/>}/>
          <Route path='/:id' element={<User/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
