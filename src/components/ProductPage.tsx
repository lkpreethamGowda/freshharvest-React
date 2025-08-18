import ProductPage from "./Products";
import FarmerDetails from "./FarmerProfile";
import PricingPage from "./Pricing";
import CustomerReviews from "./Review";
import BadgesPage from "./Badges";

function ProductDetailsPage() {
  return (
    <div>
      <ProductPage />
      <FarmerDetails />
      <PricingPage />
      <CustomerReviews />
      <BadgesPage />
    </div>
  );
}

export default ProductDetailsPage;
