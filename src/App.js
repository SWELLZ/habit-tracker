import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./components/userComponents/SignIn";
import { SignUp } from "./components/userComponents/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
