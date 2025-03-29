import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import DashBoard from "./components/DashBoard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<DashBoard />}>
            <Route path="ShoppingWebsite" element={<ProductListing />} />
            <Route path="product/:productId" Component={ProductDetails} />
            <Route path="*" element={<ProductListing />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
