import React from "react";
import Banner from "./Banner";
import PopularWatches from "./PopularWatches";
import NewArrivals from "./NewArrivals";
import TrendingProduct from "./TrendingProduct";
import GenderWiseWatches from "./GenderWiseWatches";
import ShopByBrands from "./ShopByBrands";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <PopularWatches />
      <NewArrivals />
      <TrendingProduct />
      <GenderWiseWatches
        gender="MALE"
        title="Men's Watches"
        description="The best watches for men."
      />
      <GenderWiseWatches
        gender="FEMALEbu"
        title="Women's Watches"
        description="The best watches for women."
      />
      <ShopByBrands />
    </div>
  );
};

export default HomePage;
