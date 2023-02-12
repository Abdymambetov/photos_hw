
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import User from "./components/user/User";
import UsersPage from "./pages/usersPage/UsersPage";
import FavPage from './pages/FavPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<UsersPage/>}/>
          <Route path='/:id' element={<User/>}/>
          <Route path='fav'  element={<FavPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
