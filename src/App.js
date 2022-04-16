import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/services' element={<Services></Services>} />
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
