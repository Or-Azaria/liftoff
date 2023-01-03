import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

///////////////////
import Login from "./pages/LogIn"
import Register from "./pages/Register"
import User from "./pages/UserDashbord"
import Profile from "./pages/Profile"
import JuniorProblem from "./pages/JuniorProblem"
import MentorHelp from "./pages/MentorHelp"
import System from "./pages/System"
import Chat from './pages/Chat';


function App() {
  return (
    <>
    <Router>
      <Routes>
        {/* <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/> */}


        {/* routes for user */}
        <Route path='/' element={<User/>}>
          <Route path='' element={<JuniorProblem/>}/>
          <Route path='mentorhelp' element={<MentorHelp/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='system' element={<System/>}/>
        </Route>
          <Route path='/chat' element={<Chat/>}/>

        {/* routes for volunteer */}
        {/* <Route>
          <Route path='juniortrack' element={<JuniorTrack/>}/>
          <Route path='findmentor' element={<FindMentor/>}/>
          <Route path='jobtrack' element={<JobTrack/>}/>
          <Route path='system' element={<System/>}/>
        </Route> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;