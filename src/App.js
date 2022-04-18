import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import CheckOut from "./Components/CheckOut/CheckOut";
import BdAddress from "./Components/Contact/BdAddress";
import Contact from "./Components/Contact/Contact";
import UkAddress from "./Components/Contact/UkAddress";
 
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import ServiceDetails from "./Components/ServiceDetails/ServiceDetails";
import Services from "./Components/Services/Services";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/services' element={<Services></Services>} />
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>} />
        <Route path='/checkout' element={

       <RequireAuth>
          <CheckOut></CheckOut>
       </RequireAuth>
        
        } />
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='/contact' element={<Contact></Contact>}>

          <Route path='bd-address'  element={<BdAddress></BdAddress>}></Route>
          <Route path='uk-address'  element={<UkAddress></UkAddress>}></Route>
        </Route>
       <Route path='/about' element={<About></About>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
