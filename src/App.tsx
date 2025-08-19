import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Header from "./components/header";
import LandingPage from "./components/LandingPage";
import LogInPage from "./components/LogInPage";
import Footer from "./components/Footer";
import SignUpPage from "./components/SignUpPage";
import Message from "./components/Message";
import HomeHeader from "./components/HomeHeader";
import ShopPage from "./components/ShopPage";

// import ProductPage from "./components/Products";
// import FarmerDetails from "./components/FarmerProfile";
// import PricingPage from "./components/Pricing";
// import CustomerReviews from "./components/Review";
// import BadgesPage from "./components/Badges";
import CartPage from "./components/Cart";
import OrderPage from "./components/Order";
import OrderHistory from "./components/History";
import ProductDetailsPage from "./components/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <HomeHeader />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/logins" element={<LogInPage />} />
        <Route path="/SignUps" element={<SignUpPage />} />
        <Route path="/Messages" element={<Message />} />
        <Route path="/Shops" element={<ShopPage />} />
        <Route path="/Products/:id" element={<ProductDetailsPage />} />
        <Route path="/Carts" element={<CartPage />} />
        <Route path="/Orders" element={<OrderPage />} />
        <Route path="/Historys" element={<OrderHistory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
