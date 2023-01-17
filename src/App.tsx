import NavBar from './components/NavBar';
import Products from "./components/Products";
import ProductsDetail from './components/ProductsDetail';
import Posts from "./components/Posts";
import Home from "./components/Home";
import Dashboard from "./components/admin/Dashboard";
import NotFound from './components/NotFound';
import {Route, Routes, useNavigate} from "react-router-dom";



const App = () => {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      <div className="content">
        {/* order routes from most specific ones to most generic ones */}

          <Routes>
            {/* Ok, but how do I access the router's data, like the URL params like id
              or the current location? */}
            <Route path="/products/:id" element={<ProductsDetail />} />

            {/* Passing custom props to Route Product component */}
            <Route path="/products" element={<Products sortBy={true} /> } />

            <Route path="/posts/:year/:month" element={<Posts />} />
            <Route path="/admin/*" element={<Dashboard />} />
            <Route path="/"  element={< Home/>} />
            <Route path="*" element={<NotFound onClick={() => navigate('/')} />} />
          </Routes>
        </div>
    </div>
  )
}

export default App