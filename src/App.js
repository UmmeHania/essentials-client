import { Route, Routes } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header1 from './components/Header1/Header1';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import LogIn from './components/LogIn/LogIn';
import RequireAuth from './components/LogIn/RequireAuth/RequireAuth';
import MyProducts from './components/MyProducts/MyProducts';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';



function App() {
  return (
    <div className="">
      <Header1></Header1>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/blog' element={<Blog></Blog>} />

        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        } />
        <Route path='/myproducts' element={<MyProducts></MyProducts>} />
        <Route path='/login' element={<LogIn></LogIn>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
