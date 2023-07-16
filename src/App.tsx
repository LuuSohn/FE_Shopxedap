import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Signin from "./pages/user/signin";

import Signup from "./pages/user/signup";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App ">
      <Routes>
        <Route path="/">
          <Route></Route>
          <Route path="signin" element={<Signin />}></Route>
          <Route path="signup" element={<Signup />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
