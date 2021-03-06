import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import AddItem from './components/AddItem/AddItem';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header1 from './components/Header1/Header1';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import LogIn from './components/LogIn/LogIn';
import RequireAuth from './components/LogIn/RequireAuth/RequireAuth';
import ManageInventory1 from './components/ManageInventory1/ManageInventory1';
import MyItems from './components/MyItems/MyItems';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';

function App() {

  return (
    <div className="">
      <Header1></Header1>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/blog' element={<Blog></Blog>} />
        <Route path='/aboutus' element={<AboutUs></AboutUs>} />

        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        } />

        <Route path='/login' element={<LogIn></LogIn>} />
        <Route path='/register' element={<Register></Register>} />

        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        } />

        <Route path='/inventory' element={
          <RequireAuth>
            <ManageInventory1 />
          </RequireAuth>
        } />

        <Route path='/additem' element={
          <RequireAuth>
            <AddItem />
          </RequireAuth>
        } />

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
