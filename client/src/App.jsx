import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./MainPage/Home";
import CreatePost from "./MainPage/CreatePost";
import UpdatePost from "./MainPage/UpdatePost";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/update/:id" element={<UpdatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
