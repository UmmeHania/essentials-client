import { Route, Routes, useParams } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import AddItem from './components/AddItem/AddItem';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header1 from './components/Header1/Header1';
import Home from './components/Home/Home';
import Product from './components/Home/Product/Product';
import Inventory from './components/Inventory/Inventory';
import LogIn from './components/LogIn/LogIn';
import RequireAuth from './components/LogIn/RequireAuth/RequireAuth';
import ManageInventory1 from './components/ManageInventory1/ManageInventory1';
import ManageItems from './components/ManageItems/ManageItems';
import MyItems from './components/MyItems/MyItems';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';


//good job. ekhn amake email er oita kivabe korbo hints den. oita niye o time waste korsilam. pore folder soho delete kore disi -_- kno korechen :P ja korben rakhben
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
        {/* <Route path='/inventory/:inventoryId' element={<Product></Product>} /> */}
        <Route path='/login' element={<LogIn></LogIn>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/myitems' element={
          <RequireAuth>

            <MyItems></MyItems>
          </RequireAuth>
        } />
        <Route path='/additem' element={<AddItem></AddItem>} />
        <Route path='/inventory' element={<ManageInventory1></ManageInventory1>} />

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
