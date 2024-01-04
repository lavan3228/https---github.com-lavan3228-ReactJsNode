
import React, {useState, createContext} from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from './components.js/Nav';
import Register from './components.js/Register';
import Login from './components.js/Login';
import Myprofile from './components.js/Myprofile';
import FunctionalCom from './components.js/FunctionalCom';
import AllProducts from './components.js/AllProducts';
import Cart from './components.js/Cart';
import Order from './components.js/Order';
import Categories from './components.js/Categories';
import Image from './components.js/Image';
import Header from './components.js/Header';
import Footer from './components.js/Footer';
import ClassCompo from './components.js/classCompo';
import Style from './components.js/Style';
import UseState from './components.js/UseState';
import UseEffect from './components.js/UseEffect';
import Onchange from './components.js/Onchange';
import OnSubmit from './components.js/OnSubmit';
import Mapfilter from './components.js/Mapfilter';
import Calculator from './components.js/Calculator';
import Fetch from './components.js/Fetch';
import Navbar from './components.js/Navbar';
import HomeRedirect from './components.js/HomeRedirect';
import Dashboard from './components.js/Dashboard';
import About from './components.js/About';
import UseHistory from './components.js/UseHistory';
import UseContextA from './components.js/UseContextA';
import Redux from './components.js/Redux';
import Bootstrap from './components.js/Bootstrap';
import MaterialUi from './components.js/MaterialUi';
import Downloadfile from './components.js/Downloadfile';
import Search from './components.js/Search';
import {connect} from 'react-redux';
import GoogleMaps from './components.js/GoogleMaps';
import Sass from './components.js/Sass';
import UseRef from './components.js/UseRef';
import UseReducer from './components.js/UseReducer';
import ContextAPI from './components.js/ContextAPI';
import Hoc from './components.js/Hoc';
import UseMemo from './components.js/UseMemo';
import ErrorBoundary from './components.js/ErrorBoundary';
import ControlledComponent from './components.js/ControlledComponent';
import UncontrolledComponent from './components.js/UncontrolledComponent';

export const store = createContext(); 

export const UserContext = createContext();

const App = ({local_variable}) => {
  const [token, setToken] = useState(null);
  return (
    <div className='back'>
      <store.Provider value={[token, setToken]}>
      <BrowserRouter>
        {/* <FunctionalCom/> */}
        {/* <ContextAPI/>
        <Hoc/>
        <UseMemo/>
        <ErrorBoundary/>
        <ControlledComponent/>
        <UncontrolledComponent/> */}
        {/* <UseRef/>  */}
        {/* <UseReducer/> */}
        {/* <Sass/> */}
        {/* <ClassCompo/> */}
        {/* <Search/> */}
        {/* <Downloadfile/> */}
        {/* <Navbar/> */}
        {/* <UseHistory/> */}
        {/* <UserContext.Provider value={"React Context is a way to manage state globally"}>
          <UseContextA/>
        </UserContext.Provider> */}
        {/* <Redux/> */}
        {/* <Calculator/> */}
        {/* <Fetch/> */}
        {/* <Mapfilter/> */}
        {/* <Style/> */}
        {/* <UseState/> */}
        {/* <UseEffect/>   */}
        {/* <Onchange/>  */}
        {/* <OnSubmit/> */}
        {/* <Image/> */}
        {/* <Header/> */}
        {/* <Footer/> */}
        {/* <Image/> */}
        {/* <Bootstrap/> */}
        {/* <MaterialUi/> */}
        <Nav />
        {/* <ClassCompo/> */}
        {/* <GoogleMaps /> */}
        <Switch>
          {/* <Route exact path = '/' component = {HomeRedirect} />
          <Route exact path = '/about' component = {About} />
          <Route exact path = '/dashboard/:name' component = {Dashboard} /> */}

          <Route exact path = '/register' component = {Register} />
          <Route  exact path = '/login' component = {Login} />
          <Route exact path = '/myprofile' component = {Myprofile} />
          <Route exact path = '/allproducts' component = {AllProducts} />
          <Route exact path = '/categories' component = {Categories} />
          <Route exact path = '/order' component = {Order} />
          <Route exact path = '/cart' component = {Cart} />
          <Route exact path = '/header' component = {Header} />
          <Route exact path = '/myprofile' component = {Myprofile} />
        </Switch>
      </BrowserRouter>
      </store.Provider>
    </div>
  )
}

const mapStateToProps = state => ({
  local_variable: state
})

export default connect(mapStateToProps)(App);







// import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Login from "./components.js/loginComponent";
// import SignUp from "./components.js/signupComponent";
// import Home from "./components.js/homeComponent";

// // import UserDetails from "./components.js/userDetails";
 
// function App() {
//   // const isLoggedIn = window.localStorage.getItem("loggedIn");
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route
//             exact
//             path="/"
//             element={<Login />}
//           />
//           <Route path="/sign-in" element={<Login />} />
//           <Route path="/sign-up" element={<SignUp />} />
//           <Route path="/home" element={<Home />} />
//           {/* <Route path="/userDetails" element={<UserDetails />} /> */}
//         </Routes>
//         {/* <ImageUpload/> */}
//       </div>
//     </Router>
//   );
// }

// export default App;
