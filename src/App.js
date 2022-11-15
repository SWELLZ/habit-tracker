import { Nav } from './components/universalComponents/Nav';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./components/userComponents/SignIn";
import { SignUp } from "./components/userComponents/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <div className='min-h-screen pt-[70px] bg-amber-50'>
        <h1>Track Your Habits Today!</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
