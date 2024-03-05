import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import AddProduct from './Components/AddProduct';
import UpdateProduct from './Components/UpdateProduct';
import Login from './Components/Login';
import Register from './Components/Register';
import Protected from './Components/Protected';
import ProductList from './Components/ProductList';
import Search from './Components/Search';
import AddEvent from './Components/AddEvent';
import EventList from './Components/EventList';
import UpdateEvent from './Components/UpdateEvent';
import SearchEvent from './Components/SearchEvent';
import AddVenue from './Components/AddVenue';
import VenueList from './Components/VenueList';
import UpdateVenue from './Components/UpdateVenue';
import SearchVenue from './Components/SearchVenue';
import AddDecore from './Components/AddDecore';
import DecoreList from './Components/DecoreList';
import UpdateDecore from './Components/UpdateDecore';
import SearchDecore from './Components/SearchDecore';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Dashboard from './Components/Dashboard';
function App() {
  return (
    <>
      <Routes>
        {/* <Route exact path='/' element={<ProductList />} /> */}
        {/* <Route exact path='/add' element={<Protected Cmp={AddProduct} />} /> */}
        {/* <Route path="/update/:id" element={<Protected Cmp={UpdateProduct} />} /> */}
        <Route exact path='/dashboard' element={<Protected Cmp={Dashboard} />} />
        <Route exact path='/addevent' element={<Protected Cmp={AddEvent} />} />
        <Route exact path='/updateevent/:id' element={<Protected Cmp={UpdateEvent} />} />
        <Route exact path='/eventlist' element={<Protected Cmp={EventList} />} />
        <Route exact path='/addvenue' element={<Protected Cmp={AddVenue} />} />
        <Route exact path='/venuelist' element={<Protected Cmp={VenueList} />} />
        <Route exact path='/updatevenue/:id' element={<Protected Cmp={UpdateVenue} />} />
        <Route exact path='/updatedecore/:id' element={<Protected Cmp={UpdateDecore} />} />
        <Route exact path='/adddecore' element={<Protected Cmp={AddDecore} />} />
        <Route exact path='/decorelist' element={<Protected Cmp={DecoreList} />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/search' element={<Search />} />
        <Route exact path='/searchevent' element={<SearchEvent />} />
        <Route exact path='/searchvenue' element={<SearchVenue />} />
        <Route exact path='/searchdecore' element={<SearchDecore />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
