import { Route, Routes } from 'react-router-dom';
import AddItem from './components/AddItem/AddItem';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header1 from './components/Header1/Header1';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import LogIn from './components/LogIn/LogIn';
import RequireAuth from './components/LogIn/RequireAuth/RequireAuth';
import ManageItems from './components/ManageItems/ManageItems';
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

        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        } />
        <Route path='/login' element={<LogIn></LogIn>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/myitems' element={<MyItems></MyItems>} />
        <Route path='/additem' element={<AddItem></AddItem>} />
        <Route path='/manageitems' element={<ManageItems></ManageItems>} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
