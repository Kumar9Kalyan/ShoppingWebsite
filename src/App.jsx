import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<DashBoard />}>
            <Route index element={<ProductListing />} />
            <Route path="/product/:productId" Component={ProductDetails} />
            <Route
              path="*"
              element={
                <h2 style={{ marginTop: "100px", textAlign: "center" }}>
                  404 Page Not Found
                </h2>
              }
            />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
